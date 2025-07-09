import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AppearanceSlice from '@/store/slice/appearance';
import type { Appearance } from '@/store/slice/appearance/appearance-types';

describe('store', () => {
  let store: ReturnType<typeof configureStore>;
  let persistor: ReturnType<typeof persistStore>;

  beforeEach(() => {
    const persistConfig = {
      key: 'root',
      storage
    };

    store = configureStore({
      reducer: {
        appearance: persistReducer(persistConfig, AppearanceSlice)
      },
      devTools: process.env.NODE_ENV !== 'production',
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          },
          immutableCheck: false
        })
    });

    persistor = persistStore(store);
  });

  it('should be created', () => {
    expect(store).toBeDefined();
  });

  it('should persist the appearance state', async () => {
    store.dispatch({ type: 'appearance/setTheme', payload: 'DRONT_THEME' });
    await persistor.flush();

    const newStore = configureStore({
      reducer: {
        appearance: persistReducer({ key: 'root', storage }, AppearanceSlice)
      },
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          },
          immutableCheck: false
        })
    });
    const newPersistor = persistStore(newStore);

    await newPersistor.flush();

    expect(newStore.getState().appearance.activeTheme).toBe('DRONT_THEME');
  });

  it('should handle initial state', () => {
    const initialState: Appearance = {
      activeTheme: 'light',
      activeLanguage: 'en',
      sidebar: {
        background: '',
        isCollapse: false,
        isMobile: false,
        isHover: false,
        itemColor: '',
        itemHoverBackground: '',
        itemHoverColor: '',
        itemSelectedBackground: '',
        itemSelectedColor: '',
        miniWidth: 0,
        subheaderColor: '',
        subMenuHoverBackground: '',
        variant: '',
        width: 0
      }
    };

    const storeWithInitialState = configureStore({
      reducer: {
        appearance: persistReducer({ key: 'root', storage }, AppearanceSlice)
      },
      preloadedState: { appearance: initialState },
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          },
          immutableCheck: false
        })
    });

    expect(storeWithInitialState.getState().appearance).toEqual(initialState);
  });
});
