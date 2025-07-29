import { createStore, createStoreActions, createStoreHook } from '@/@dront/lib';

interface ThemeState {
  activeMode: 'light' | 'dark';
}

const store = createStore<ThemeState>({ activeMode: 'light' }, { persistKey: 'theme-store' });

export const themeActions = createStoreActions(store, {
  toggleActiveMode: state => ({ activeMode: state.activeMode === 'light' ? 'dark' : 'light' })
});

export const useThemeStore = createStoreHook(store);
