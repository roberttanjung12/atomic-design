import { MenuOpen as MenuOpenIcon } from '@mui/icons-material';
import { IconButton, useMediaQuery } from '@mui/material';
import { useSidebarStore, sidebarActions } from '@/@dront/store';

const SidebarToggle = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));

  const [isCollapse] = useSidebarStore('isCollapse');

  const toggleSidebar = () => {
    sidebarActions.toggleSidebar();
  };

  const toggleMobileSidebar = () => {
    sidebarActions.toggleMobileSidebar();
  };

  const onClick = lgUp ? () => toggleSidebar() : () => toggleMobileSidebar();

  return (
    <IconButton color="inherit" aria-label="menu" onClick={onClick}>
      <MenuOpenIcon sx={{ rotate: isCollapse ? '180deg' : '0deg' }} />
    </IconButton>
  );
};

export default SidebarToggle;
