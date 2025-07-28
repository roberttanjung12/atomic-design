import type { Appearance, AppearanceSidebar } from './appearance-types';
import type { AppearanceAction } from './appearanceReducer';

export const hoverSidebar = (value: boolean): AppearanceAction => ({
  type: 'HOVER_SIDEBAR',
  payload: value
});

export const resetAppearance = (): AppearanceAction => ({
  type: 'RESET'
});

export const setAppearance = <K extends keyof Appearance>(key: K, value: Appearance[K]): AppearanceAction => ({
  type: 'SET_APPEARANCE',
  key,
  value
});

export const setSidebar = <K extends keyof AppearanceSidebar>(
  key: K,
  value: AppearanceSidebar[K]
): AppearanceAction => ({
  type: 'SET_SIDEBAR',
  key,
  value
});

export const toggleCardShadow = (): AppearanceAction => ({ type: 'TOGGLE_CARD_SHADOW' });

export const toggleLayout = (): AppearanceAction => ({ type: 'TOGGLE_LAYOUT' });

export const toggleSidebar = (): AppearanceAction => ({ type: 'TOGGLE_SIDEBAR' });

export const toggleMobileSidebar = (): AppearanceAction => ({ type: 'TOGGLE_MOBILE_SIDEBAR' });
