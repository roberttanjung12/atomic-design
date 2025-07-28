import type { Appearance, AppearanceSidebar } from './appearance-types';
import appearanceInitialValue from './appearanceInitialValue';

export type AppearanceAction =
  | { type: 'HOVER_SIDEBAR'; payload: boolean }
  | { type: 'RESET' }
  | { type: 'SET_APPEARANCE'; key: keyof Appearance; value: Appearance[keyof Appearance] }
  | { type: 'SET_SIDEBAR'; key: keyof AppearanceSidebar; value: AppearanceSidebar[keyof AppearanceSidebar] }
  | { type: 'TOGGLE_CARD_SHADOW' }
  | { type: 'TOGGLE_LAYOUT' }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'TOGGLE_MOBILE_SIDEBAR' };

export const initialAppearanceState: Appearance = appearanceInitialValue;

export function appearanceReducer(state: Appearance, action: AppearanceAction): Appearance {
  switch (action.type) {
    case 'HOVER_SIDEBAR':
      return { ...state, sidebar: { ...state.sidebar, isHover: action.payload } };
    case 'RESET':
      return initialAppearanceState;
    case 'SET_APPEARANCE':
      return { ...state, [action.key]: action.value };
    case 'SET_SIDEBAR':
      return { ...state, sidebar: { ...state.sidebar, [action.key]: action.value } };
    case 'TOGGLE_CARD_SHADOW':
      return { ...state, isCardShadow: !state.isCardShadow };
    case 'TOGGLE_LAYOUT':
      return { ...state, isContainerFull: !state.isContainerFull };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebar: { ...state.sidebar, isCollapse: !state.sidebar.isCollapse } };
    case 'TOGGLE_MOBILE_SIDEBAR':
      return { ...state, sidebar: { ...state.sidebar, isMobile: !state.sidebar.isMobile } };
    default:
      return state;
  }
}
