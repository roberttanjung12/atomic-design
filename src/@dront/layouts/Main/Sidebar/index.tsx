import { Box, Drawer, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { Drogo, MainScrollbar } from '@/@dront/components';
import { useAppearance, type AppearanceSidebar } from '@/@dront/context/AppearanceProvider';
import { sidebarActions, useSidebarStore } from '@/@dront/store';
import SidebarNavigation from './Navigation';
import SidebarNavigationCustom from './NavigationCustom';

const SidebarContent = ({
  variant,
  isCollapse,
  isHover
}: {
  variant: AppearanceSidebar['variant'];
  isCollapse: AppearanceSidebar['isCollapse'];
  isHover: AppearanceSidebar['isHover'];
}) => {
  return (
    <Box
      height="100%"
      className="sidebar__content"
      sx={{
        backgroundImage: 'url(/images/Abstract%20patern.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left',
        backgroundSize: 'contain',

        '@media (max-width: 1200px)': {
          height: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <Box px={4} display="flex" alignItems="center" justifyContent="center" height={130}>
        <Link href="/">
          <Drogo size={isCollapse && !isHover ? 50 : 180} variant={isCollapse && !isHover ? 'box' : 'full'} />
        </Link>
      </Box>

      <MainScrollbar sx={{ height: 'calc(100% - 130px)', pb: 5 }}>
        {variant === 'dront' ? <SidebarNavigation /> : <SidebarNavigationCustom />}
      </MainScrollbar>
    </Box>
  );
};

const MainSidebar = () => {
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));
  const { appearanceState } = useAppearance();
  const { miniWidth, variant, width } = appearanceState.sidebar;

  const [isCollapse] = useSidebarStore('isCollapse');
  const [isHover, setIsHover] = useSidebarStore('isHover');
  const [isMobile] = useSidebarStore('isMobile');
  const toggleWidth = isCollapse && !isHover ? miniWidth : width;

  const onHover = (isEntering: boolean) => {
    if (isCollapse) {
      setIsHover(isEntering);
    }
  };

  const toggleMobileSidebar = () => {
    sidebarActions.toggleMobileSidebar();
  };

  if (lgDown) {
    return (
      <Drawer
        anchor="left"
        open={isMobile}
        onClose={toggleMobileSidebar}
        variant="temporary"
        slotProps={{
          paper: {
            className: 'mobile-sidebar',
            sx: {
              width: width,
              border: '0 !important',
              boxShadow: theme => theme.shadows[8]
            }
          }
        }}
      >
        <SidebarContent variant={variant} isCollapse={isCollapse} isHover={isHover} />
      </Drawer>
    );
  }

  return (
    <Box
      zIndex={100}
      width={toggleWidth}
      flexShrink={0}
      className="desktop-sidebar"
      sx={{ ...(isCollapse && { position: 'absolute' }) }}
    >
      <Drawer
        anchor="left"
        open
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        variant="permanent"
        slotProps={{
          paper: {
            sx: {
              transition: theme => theme.transitions.create('width', { duration: theme.transitions.duration.shortest }),
              width: toggleWidth,
              boxSizing: 'border-box'
            }
          }
        }}
      >
        <SidebarContent variant={variant} isCollapse={isCollapse} isHover={isHover} />
      </Drawer>
    </Box>
  );
};

export default MainSidebar;
