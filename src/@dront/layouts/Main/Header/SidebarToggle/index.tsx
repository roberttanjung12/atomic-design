import { MenuOpen as MenuOpenIcon } from '@mui/icons-material';
import { IconButton, useMediaQuery } from '@mui/material';
import { toggleMobileSidebar, toggleSidebar, useAppearance } from '@/@dront/context/AppearanceProvider';

const SidebarToggle = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));

  const { appearanceState, appearanceDispatch } = useAppearance();

  const onClick = lgUp ? () => appearanceDispatch(toggleSidebar()) : () => appearanceDispatch(toggleMobileSidebar());

  return (
    <IconButton color="inherit" aria-label="menu" onClick={onClick}>
      <MenuOpenIcon sx={{ rotate: appearanceState.sidebar.isCollapse ? '180deg' : '0deg' }} />
    </IconButton>
  );
};

export default SidebarToggle;
