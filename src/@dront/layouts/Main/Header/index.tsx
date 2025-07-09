import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from '@/store/hooks';
import type { ApplicationState } from '@/store/store';
import Language from './Language';
import Mode from './Mode';
import Notifications from './Notification';
import Profile from './Profile';
import Search from './Search';
import SidebarToggle from './SidebarToggle';

const MainHeader = () => {
  const { headerHeight } = useSelector((state: ApplicationState) => state.appearance);

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: headerHeight
    }
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <SidebarToggle />
        <Search />
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Mode />
          <Language />
          <Notifications />
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default MainHeader;
