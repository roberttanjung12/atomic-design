import { MenuOpen as MenuOpenIcon } from '@mui/icons-material';
import { IconButton, useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from '@/store/hooks';
import { toggleSidebar, toggleMobileSidebar } from '@/store/slice/appearance';
import type { ApplicationState } from '@/store/store';

const SidebarToggle = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));

  const { isCollapse } = useSelector((state: ApplicationState) => state.appearance.sidebar);

  const dispatch = useDispatch();

  const onClick = lgUp ? () => dispatch(toggleSidebar()) : () => dispatch(toggleMobileSidebar());

  return (
    <IconButton color="inherit" aria-label="menu" onClick={onClick}>
      <MenuOpenIcon sx={{ rotate: isCollapse ? '180deg' : '0deg' }} />
    </IconButton>
  );
};

export default SidebarToggle;
