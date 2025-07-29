import { createStore, createStoreActions, createStoreHook } from '@/@dront/lib';

interface SidebarStore {
  isCollapse: boolean;
  isMobile: boolean;
  isHover: boolean;
}

const store = createStore<SidebarStore>(
  {
    isCollapse: false,
    isHover: false,
    isMobile: false
  },
  { persistKey: 'sidebar-store' }
);

export const sidebarActions = createStoreActions(store, {
  toggleSidebar: state => ({ isCollapse: !state.isCollapse }),
  toggleMobileSidebar: state => ({ isMobile: !state.isMobile })
});

export const useSidebarStore = createStoreHook(store);
