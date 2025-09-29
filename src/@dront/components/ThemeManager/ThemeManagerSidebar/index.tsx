import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { Close } from '@mui/icons-material';
import { Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import SidebarContainer from './SidebarContainer';
import SidebarContent from './SidebarContent';

interface ThemeManagerSidebarProps {
  openSidebar: boolean;
  handleToggleSidebar: () => void;
  position: 'fixed' | 'static';
  focusSidebar: string;
  setFocusSidebar: Dispatch<SetStateAction<string>>;
}

/**
 * Renders a responsive sidebar for theme management.
 *
 * - On medium and larger screens, displays a persistent sidebar.
 * - On smaller screens, displays a Drawer with a close button.
 *
 * @param focusSidebar - Indicates whether the sidebar is focused.
 * @param handleToggleSidebar - Callback to toggle the sidebar open/close state.
 * @param openSidebar - Boolean indicating if the sidebar is open (for Drawer).
 * @param position - The position of the sidebar (used for SidebarContainer).
 * @param setFocusSidebar - Callback to set the focus state of the sidebar.
 * @returns A readonly ReactNode representing the sidebar UI.
 */
const ThemeManagerSidebar = ({
  focusSidebar,
  handleToggleSidebar,
  openSidebar,
  position,
  setFocusSidebar
}: ThemeManagerSidebarProps): Readonly<ReactNode> => {
  const { breakpoints } = useTheme();
  const isUpMd = useMediaQuery(breakpoints.up('md'));

  if (isUpMd) {
    return (
      <SidebarContainer position={position}>
        <SidebarContent focusSidebar={focusSidebar} setFocusSidebar={setFocusSidebar} />
      </SidebarContainer>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={openSidebar}
      style={{ position: 'absolute', zIndex: 99999 }}
      onClose={handleToggleSidebar}
    >
      <IconButton sx={{ position: 'absolute', right: 2, top: 2 }} onClick={handleToggleSidebar}>
        <Close />
      </IconButton>

      <SidebarContent focusSidebar={focusSidebar} setFocusSidebar={setFocusSidebar} />
    </Drawer>
  );
};

export default ThemeManagerSidebar;
