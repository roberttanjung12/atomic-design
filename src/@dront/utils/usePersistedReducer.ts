'use client';

import { useEffect, useReducer, type Reducer, type Dispatch } from 'react';

/**
 * A custom React hook that wraps `useReducer` and persists its state to `localStorage`.
 * Automatically restores the state from `localStorage` on mount (if available).
 * Safely handles SSR by avoiding `localStorage` during server-side rendering.
 *
 * @template State - Type of the reducer state.
 * @template Action - Type of the reducer actions.
 *
 * @param {Reducer<State, Action>} reducer - The reducer function to manage state transitions.
 * @param {State} initialState - The initial state for the reducer.
 * @param {string} storageKey - Key to store and retrieve state in `localStorage`.
 * @returns {[State, Dispatch<Action>]} A tuple containing the current state and dispatch function.
 *
 * @example
 * ```tsx
 * import React, { Reducer } from 'react';
 * import usePersistedReducer from './usePersistedReducer';
 *
 * type State = { count: number };
 * type Action = { type: 'increment' } | { type: 'decrement' };
 *
 * const reducer: Reducer<State, Action> = (state, action) => {
 *   switch (action.type) {
 *     case 'increment': return { count: state.count + 1 };
 *     case 'decrement': return { count: state.count - 1 };
 *     default: return state;
 *   }
 * };
 *
 * export default function Counter() {
 *   const [state, dispatch] = usePersistedReducer(reducer, { count: 0 }, 'counterState');
 *
 *   return (
 *     <div>
 *       <p>Count: {state.count}</p>
 *       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
 *       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
 *     </div>
 *   );
 * }
 * ```
 */
function usePersistedReducer<State, Action>(
  reducer: Reducer<State, Action>,
  initialState: State,
  storageKey: string
): [State, Dispatch<Action>] {
  const isBrowser = typeof window !== 'undefined';

  const [state, dispatch] = useReducer(reducer, initialState, (init: State) => {
    if (!isBrowser) return init;

    try {
      const storedState = window.localStorage.getItem(storageKey);

      return storedState ? (JSON.parse(storedState) as State) : init;
    } catch (error) {
      console.error('Failed to parse stored state:', error);

      return init;
    }
  });

  useEffect(() => {
    if (!isBrowser) return;

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to store state:', error);

      try {
        window.localStorage.setItem(storageKey, JSON.stringify(initialState));
      } catch (err) {
        console.error('Also failed to store initial state:', err);
      }
    }
  }, [state, storageKey, initialState, isBrowser]);

  return [state, dispatch];
}

export default usePersistedReducer;
