import { Box, Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { Drogo, MainScrollbar } from '@/@dront/components';
import { useSelector, useDispatch } from '@/store/hooks';
import { hoverSidebar, toggleMobileSidebar } from '@/store/slice/appearance';
import type { Sidebar } from '@/store/slice/appearance/appearance-types';
import type { ApplicationState } from '@/store/store';
import SidebarNavigation from './Navigation';
import SidebarNavigationCustom from './NavigationCustom';

const SidebarContent = ({
  variant,
  isCollapse,
  isHover
}: {
  variant: Sidebar['variant'];
  isCollapse: Sidebar['isCollapse'];
  isHover: Sidebar['isHover'];
}) => (
  <Box
    height="100%"
    className="sidebar__content"
    sx={{
      backgroundImage: 'url(/images/Abstract%20patern.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom left',
      backgroundSize: 'contain'
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

const MainSidebar = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));

  const { isCollapse, isMobile, isHover, miniWidth, variant, width } = useSelector(
    (state: ApplicationState) => state.appearance.sidebar
  );

  const dispatch = useDispatch();

  const theme = useTheme();

  const toggleWidth = isCollapse && !isHover ? miniWidth : width;

  const onHover = (isEntering: boolean) => {
    if (isCollapse) {
      dispatch(hoverSidebar(isEntering));
    }
  };

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isMobile}
        onClose={() => dispatch(toggleMobileSidebar())}
        variant="temporary"
        PaperProps={{
          sx: {
            width: width,
            border: '0 !important',
            boxShadow: theme => theme.shadows[8]
          }
        }}
      >
        <SidebarContent variant={variant} isCollapse={isCollapse} isHover={isHover} />
      </Drawer>
    );
  }

  return (
    <Box zIndex={100} width={toggleWidth} flexShrink={0} sx={{ ...(isCollapse && { position: 'absolute' }) }}>
      <Drawer
        anchor="left"
        open
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        variant="permanent"
        PaperProps={{
          sx: {
            transition: theme.transitions.create('width', { duration: theme.transitions.duration.shortest }),
            width: toggleWidth,
            boxSizing: 'border-box'
          }
        }}
      >
        <SidebarContent variant={variant} isCollapse={isCollapse} isHover={isHover} />
      </Drawer>
    </Box>
  );
};

export default MainSidebar;
