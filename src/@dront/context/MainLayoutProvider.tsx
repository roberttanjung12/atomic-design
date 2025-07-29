import { createContext, useContext, useMemo, useReducer, type ReactNode } from 'react';
import type { BreadcrumbsInterface } from '@/@dront/components/PageID/page-id-types';
import type { NavigationItem } from '../layouts/Main/Sidebar/Navigation/navigation-types';

interface MainLayoutInterface {
  navigations?: NavigationItem[];
  breadcrumbs?: BreadcrumbsInterface;
  setBreadcrumbs: (breadcrumbs: BreadcrumbsInterface | undefined) => void;
}

interface MainLayoutProviderProps {
  children: ReactNode;
  navigations?: NavigationItem[];
}

type MainLayoutAction = { type: 'SET_BREADCRUMBS'; payload: BreadcrumbsInterface | undefined };

const mainLayoutReducer = (state: MainLayoutInterface, action: MainLayoutAction): MainLayoutInterface => {
  if (action.type === 'SET_BREADCRUMBS') {
    return { ...state, breadcrumbs: action.payload };
  } else {
    return state;
  }
};

const initialState: MainLayoutInterface = {
  breadcrumbs: undefined,
  navigations: undefined,
  setBreadcrumbs: () => {}
};

const MainLayoutContext = createContext<MainLayoutInterface>(initialState);

export const useMainLayout = () => useContext(MainLayoutContext);

const MainLayoutProvider = ({ children, navigations }: Readonly<MainLayoutProviderProps>) => {
  const [state, dispatch] = useReducer(mainLayoutReducer, initialState);

  const setBreadcrumbs = (breadcrumbs: BreadcrumbsInterface | undefined) => {
    return dispatch({ type: 'SET_BREADCRUMBS', payload: breadcrumbs });
  };

  const value = useMemo(
    () => ({
      ...state,
      navigations,
      setBreadcrumbs
    }),
    [state, navigations]
  );

  return <MainLayoutContext.Provider value={value}>{children}</MainLayoutContext.Provider>;
};

export default MainLayoutProvider;
