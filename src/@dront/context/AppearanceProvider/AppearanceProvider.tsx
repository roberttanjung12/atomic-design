import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { usePersistedReducer } from '@/@dront/utils';
import type { Appearance } from './appearance-types';
import { type AppearanceAction, appearanceReducer, initialAppearanceState } from './appearanceReducer';

interface AppearanceContextValue {
  /**
   * Global appearance state persisted in localStorage
   */
  appearanceState: Appearance;

  /**
   * Dispatch function to update appearance state
   */
  appearanceDispatch: React.Dispatch<AppearanceAction>;
}

/**
 * Context to store global `appearance` state and dispatch.
 * The state is automatically persisted in `localStorage` via `usePersistedReducer`.
 */
const AppearanceContext = createContext<AppearanceContextValue>({
  appearanceState: initialAppearanceState,
  appearanceDispatch: () => {}
});

/**
 * Hook to access `appearanceState` and `appearanceDispatch`.
 *
 * @returns {AppearanceContextValue} The global appearance state and dispatch
 * @throws Error if used outside of `AppearanceProvider`
 */
export const useAppearance = () => useContext(AppearanceContext);

/**
 * Provides global `appearanceState` and `appearanceDispatch` to the app.
 * Wrap this around your app to persist appearance settings across pages.
 */
export const AppearanceProvider = ({ children }: { children: ReactNode }) => {
  const [appearanceState, appearanceDispatch] = usePersistedReducer(
    appearanceReducer,
    initialAppearanceState,
    'appearance'
  );

  const value = useMemo(() => ({ appearanceState, appearanceDispatch }), [appearanceState, appearanceDispatch]);

  return <AppearanceContext.Provider value={value}>{children}</AppearanceContext.Provider>;
};
