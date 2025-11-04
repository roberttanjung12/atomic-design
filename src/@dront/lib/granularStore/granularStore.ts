/* eslint-disable no-use-before-define */
import { useSyncExternalStore } from 'react';
import type { Store, Subscriber, CreateStoreOptions } from './types';

/**
 * Creates a reactive store with:
 * - Granular subscriptions (per-key updates).
 * - Optional persistence (with custom storage).
 * - Multi-tab synchronization via `storage` event.
 * - Optional DevTools overlay for debugging.
 *
 * @example
 * // Create a non-persisted store
 * const cartStore = createStore({ count: 0 });
 *
 * // Create a persisted store
 * const themeStore = createStore({ mode: 'light' }, { persistKey: 'theme-store' });
 */
export function createStore<T extends object>(initialState: T, options: CreateStoreOptions = {}): Store<T> {
  const {
    persistKey,
    persistHistory = false,
    maxHistory = 50,
    debug = false,
    storage = typeof window !== 'undefined'
      ? {
          getItem: (k: string) => localStorage.getItem(k),
          setItem: (k: string, v: string) => localStorage.setItem(k, v)
        }
      : undefined
  } = options;

  // Initialize state: Try loading from persistent storage (if enabled), otherwise fall back to the given initial state.
  const state: T = loadState() ?? { ...initialState };

  // Holds subscribers for each state key. Each key has its own Set of subscriber functions.
  const subs = new Map<keyof T, Set<Subscriber<any>>>();

  // State history for "time travel" debugging and undo functionality.
  let history: T[] = [cloneSafe(state)];

  // Timer for debouncing persistence writes to storage.
  let persistTimer: NodeJS.Timeout | null = null;

  // Proxy wraps the state so any assignment to its keys automatically:
  // - Updates the target value
  // - Notifies subscribers
  // - Records history
  // - Triggers persistence (debounced)
  const proxy = new Proxy(state, {
    set(target, p: string | symbol, value: any) {
      const key = p as keyof T;

      // Update the actual state value.
      (target as any)[key] = value;

      // Debug logging for state changes (optional).
      if (debug) {
        console.log(`[store] ${String(key)}:`, value);
      }

      // Notify all subscribers for the changed key.
      subs.get(key)?.forEach(fn => fn(value));

      // Push a snapshot of the new state to history.
      history.push(cloneSafe(state));

      // If the history exceeds the configured maximum length, remove the oldest snapshot.
      if (history.length > maxHistory) {
        history.shift();
      }

      // Trigger a debounced save to persistent storage (if enabled).
      saveStateDebounced();

      return true;
    }
  });

  function get() {
    return proxy;
  }

  function set(partial: Partial<T>) {
    // Merge the partial state into the proxy, triggering the Proxy `set` logic for each property.
    Object.assign(proxy, partial);
  }

  function subscribe(key: keyof T, fn: Subscriber<T[keyof T]>) {
    // Create a subscriber set for this key if it doesn't exist.
    if (!subs.has(key)) {
      subs.set(key, new Set());
    }

    // Add the subscriber callback to the key's subscriber list.
    subs.get(key)?.add(fn);

    // Return an unsubscribe function to remove the subscriber later.
    return () => subs.get(key)?.delete(fn);
  }

  function snapshot() {
    // Returns a cloned copy of the current state (safe for external use).
    return cloneSafe(state);
  }

  function timeTravel(index: number) {
    const stateAt = history[index];

    // If a valid state snapshot exists at the given index, restore it.
    if (stateAt) {
      set(stateAt); // This triggers all Proxy side effects (subscriptions, persistence, etc.)
    }
  }

  function clearHistory() {
    // Reset the history to contain only the current state.
    history = [cloneSafe(state)];
    saveStateDebounced();
  }

  // Persists the current state (and optionally history) to localStorage or a custom storage provider.
  // Debounced to avoid excessive writes when many changes occur quickly.
  function saveStateDebounced() {
    if (!persistKey || !storage) {
      return;
    }

    if (persistTimer) {
      clearTimeout(persistTimer);
    }

    // Wait 100ms before persisting to batch rapid updates.
    persistTimer = setTimeout(() => {
      try {
        const payload = JSON.stringify({
          state: proxy,
          history: persistHistory ? history : []
        });

        storage.setItem(persistKey, payload);
      } catch (e) {
        if (debug) {
          console.warn('Persist failed', e);
        }
      }
    }, 100);
  }

  // Attempts to load the state (and history) from storage, supporting both synchronous and asynchronous storage APIs.
  function loadState(): T | null {
    if (!persistKey || !storage) {
      return initialState;
    }

    try {
      const raw = storage.getItem(persistKey);

      // Handle async storage (e.g., if `getItem` returns a Promise, such as with some IndexedDB wrappers).
      if (raw instanceof Promise) {
        raw.then(r => {
          if (!r) {
            return;
          }

          try {
            const parsed = JSON.parse(r);

            applyParsedState(parsed);
          } catch (err) {
            if (debug) {
              console.warn('Load persist (async) failed', err);
            }
          }
        });

        // Return default state for now while async data is loading.
        return initialState;
      }

      if (!raw) {
        return null;
      }

      // Parse stored payload and restore state and history.
      const parsed = JSON.parse(raw);

      return applyParsedState(parsed);
    } catch (e) {
      if (debug) {
        console.warn('Load persist failed', e);
      }

      return null;
    }
  }

  /**
   * Restores the state and history from a parsed payload.
   * Returns the restored state, or null if invalid.
   */
  function applyParsedState(parsed: any): T | null {
    if (parsed && typeof parsed.state === 'object') {
      if (persistHistory && Array.isArray(parsed.history)) {
        history = parsed.history;
      }

      return parsed.state as T;
    }

    return null;
  }

  // Synchronize the store across multiple browser tabs using the "storage" event.
  if (typeof window !== 'undefined' && persistKey) {
    window.addEventListener('storage', e => {
      if (e.key === persistKey && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);

          // Apply the new state received from another tab.
          if (parsed.state) {
            set(parsed.state);
          }
        } catch (err) {
          if (debug) {
            console.warn('Sync failed', err);
          }
        }
      }
    });
  }

  return { get, set, subscribe, snapshot, timeTravel, history, clearHistory };
}

/**
 * Clone safely (handles circular refs & non-serializable data)
 */
function cloneSafe<T>(obj: T): T {
  try {
    // Prefer structuredClone (handles most types and avoids issues with circular references).
    return structuredClone(obj);
  } catch {
    // Fallback: JSON cloning (fails for non-serializable values like functions or symbols).
    return JSON.parse(JSON.stringify(obj));
  }
}

/**
 * Generates a typed React hook for a specific store.
 *
 * @example
 * const [count, setCount] = useCartStore('count');
 */
export function createStoreHook<T extends object>(store: Store<T>) {
  return function useStore<K extends keyof T>(key: K): [T[K], (val: T[K]) => void] {
    // Subscribe to updates for a specific key using React's useSyncExternalStore,
    // ensuring proper reactivity with concurrent rendering.
    const value = useSyncExternalStore(
      cb => store.subscribe(key, cb),
      () => store.get()[key],
      () => store.snapshot()[key]
    );

    // Setter updates the specific key in the store.
    const setter = (newValue: T[K]) => {
      const update = { [key]: newValue } as Record<string, unknown>;

      store.set(update as Partial<T>);
    };

    return [value, setter];
  };
}

/**
 * Creates predefined actions to simplify state updates.
 *
 * @example
 * const { toggle } = createStoreActions(sidebarStore, {
 *   toggle: state => ({ isOpen: !state.isOpen })
 * });
 */
export function createStoreActions<T extends object, A extends Record<string, (state: T) => Partial<T>>>(
  store: Store<T>,
  actions: A
): { [K in keyof A]: () => void } {
  const wrapped: any = {};

  // Each action is wrapped to compute new state based on the current state,
  // and then apply the result via `store.set`.
  for (const key in actions) {
    wrapped[key] = () => store.set(actions[key](store.get()));
  }

  return wrapped;
}

/**
 * Combines multiple stores into one global hook.
 *
 * @example
 * const useGlobalStore = combineStores({ cart: cartStore, theme: themeStore });
 * const [cartCount] = useGlobalStore('cart.count');
 */
export function combineStores<Stores extends Record<string, Store<any>>>(stores: Stores) {
  type CombinedState = { [K in keyof Stores]: ReturnType<Stores[K]['get']> };

  // The combined store acts like a proxy interface to all sub-stores.
  const combined: Store<CombinedState> = {
    get: () => {
      // Build a combined state object by merging states from all sub-stores.
      const result: any = {};

      for (const k in stores) {
        result[k] = stores[k].get();
      }

      return result;
    },
    set: partial => {
      // Delegate updates to the appropriate sub-store(s).
      (Object.keys(partial) as (keyof Stores)[]).forEach(k => {
        const val = partial[k];

        if (val && typeof val === 'object') {
          stores[k].set(val as Partial<any>);
        }
      });
    },
    subscribe: (key, fn) => {
      // Supports "storeKey.subKey" syntax to subscribe to a nested store key.
      const [storeKey, subKey] = key.toString().split('.') as [string, string];
      const store = stores[storeKey];

      return store ? store.subscribe(subKey as any, fn as any) : () => {};
    },
    snapshot: () => {
      // Returns a combined snapshot of all sub-stores.
      const snap: any = {};

      for (const k in stores) {
        snap[k] = stores[k].snapshot();
      }

      return snap;
    },
    timeTravel: () => console.warn('Global time travel not supported'), // Not supported globally.
    history: [],
    clearHistory: () => {
      // Clears history for each sub-store.
      for (const k in stores) {
        stores[k].clearHistory();
      }
    }
  };

  // Returns a typed hook for using the combined store.
  return createStoreHook(combined);
}
