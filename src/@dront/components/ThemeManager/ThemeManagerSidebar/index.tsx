import type { ReactNode } from 'react';
import { Close } from '@mui/icons-material';
import { Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import SidebarContainer from './SidebarContainer';
import SidebarContent from './SidebarContent';

interface ThemeManagerSidebarProps {
  openSidebar: boolean;
  handleToggleSidebar: () => void;
  position: 'fixed' | 'static';
}

/**
 * Renders a sidebar for theme management that adapts its layout based on the viewport size.
 * - On medium screens and up, displays a fixed sidebar.
 * - On smaller screens, displays a drawer that can be toggled open or closed.
 *
 * @param openSidebar - Boolean indicating whether the sidebar drawer is open (for small screens).
 * @param handleToggleSidebar - Callback function to toggle the sidebar's open state.
 * @returns The sidebar component, either as a fixed sidebar or a drawer, depending on the screen size.
 */
const ThemeManagerSidebar = ({
  openSidebar,
  handleToggleSidebar,
  position
}: ThemeManagerSidebarProps): Readonly<ReactNode> => {
  const { breakpoints } = useTheme();
  const isUpMd = useMediaQuery(breakpoints.up('md'));

  if (isUpMd) {
    return (
      <SidebarContainer position={position}>
        <SidebarContent />
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

      <SidebarContent />
    </Drawer>
  );
};

export default ThemeManagerSidebar;
