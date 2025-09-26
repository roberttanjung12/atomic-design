import type { ReactNode } from 'react';
import { Box } from '@mui/material';

interface SidebarContainerProps {
  /**
   * The content to be rendered inside the sidebar.
   */
  children: ReactNode;
  /**
   * The positioning type of the sidebar.
   * 'fixed' keeps it visible during scroll, while 'static' lets it scroll with the page.
   * @default 'fixed'
   */
  position?: 'fixed' | 'static';
}

/**
 * A container component for the application's sidebar.
 * It features a responsive width and a configurable position.
 * @param {SidebarContainerProps} props - The props for the component.
 * @returns {Readonly<ReactNode>} The rendered sidebar component.
 */
const SidebarContainer = ({ children, position = 'fixed' }: SidebarContainerProps): Readonly<ReactNode> => {
  return (
    <Box
      sx={{
        // --- Base styles applied to both 'fixed' and 'static' ---
        height: '100%',
        width: { xs: '180px', lg: '100%' },
        backgroundColor: 'common.white',
        overflowX: 'hidden',

        // --- Dynamically set the position property ---
        position: position,

        // --- Conditional styles applied only when position is 'fixed' ---
        ...(position === 'fixed' && {
          width: { xs: '180px', lg: '240px' },
          pt: 10,
          zIndex: 1,
          top: 0,
          left: 0,
          boxShadow: '0px 0px 8px #07626E1A'
        })
      }}
    >
      {children}
    </Box>
  );
};

export default SidebarContainer;
