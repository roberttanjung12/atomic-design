export type Subscriber<T> = (value: T) => void;

export interface Store<T extends object> {
  /**
   * Get the reactive state object
   */
  get: () => T;

  /**
   * Merge a partial update into the state
   */
  set: (partial: Partial<T>) => void;

  /**
   * Subscribe to a single key’s updates
   */
  subscribe: (key: keyof T, fn: Subscriber<T[keyof T]>) => () => void;

  /**
   * Return a deep cloned snapshot of the state
   */
  snapshot: () => T;

  /**
   * Jump to a specific state in history
   */
  timeTravel: (index: number) => void;

  /**
   * Stored state history for debugging or time travel
   */
  history: T[];

  /**
   * Clear all historical states
   */
  clearHistory: () => void;
}

export interface CreateStoreOptions {
  /**
   * LocalStorage key for persistence
   */
  persistKey?: string;

  /**
   * Persist state history (for time travel)
   */
  persistHistory?: boolean;

  /**
   * Max number of states to keep in history
   */
  maxHistory?: number;

  /**
   * Debug logging (console.log on state change)
   */
  debug?: boolean;

  /**
   * Custom storage adapter (e.g., AsyncStorage)
   */
  storage?: {
    getItem: (key: string) => string | null | Promise<string | null>;
    setItem: (key: string, value: string) => void | Promise<void>;
  };
}
