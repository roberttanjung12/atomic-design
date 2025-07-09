import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from '@/store/hooks';
import type { ApplicationState } from '@/store/store';
import MainContainer from './Container';
import MainHeader from './Header';
import MainSidebar from './Sidebar';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { sidebar } = useSelector((state: ApplicationState) => state.appearance);

  const theme = useTheme();

  return (
    <Box display="flex" minHeight="100vh" width="100%">
      <MainSidebar />

      <Box
        display="flex"
        flexGrow={1}
        flexDirection="column"
        paddingBottom="60px"
        zIndex={1}
        width="100%"
        bgcolor="transparent"
        sx={{
          ...(sidebar.isCollapse && { [theme.breakpoints.up('lg')]: { ml: `${sidebar.miniWidth}px` } })
        }}
      >
        <MainHeader />

        <MainContainer>{children}</MainContainer>
      </Box>
    </Box>
  );
};

export default MainLayout;
