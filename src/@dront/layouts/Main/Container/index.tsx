import type { ReactNode } from 'react';
import { Box, Container, useMediaQuery, type Theme } from '@mui/material';
import { useMainLayout } from '@/context/MainLayoutProvider';
import { useSelector } from '@/store/hooks';
import type { ApplicationState } from '@/store/store';
import ContainerBreadcrumbs from './Breadcrumbs';

const MainContainer = ({ children }: { children: ReactNode }) => {
  const { isContainerFull } = useSelector((state: ApplicationState) => state.appearance);
  const { breadcrumbs } = useMainLayout();

  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return (
    <Container sx={{ maxWidth: isContainerFull ? '100%!important' : 'lg', pt: 5 }}>
      <Box minHeight="calc(100vh - 170px)" px={lgUp ? 3 : 1}>
        {breadcrumbs ? <ContainerBreadcrumbs title={breadcrumbs.title} routes={breadcrumbs.routes} /> : ''}
        {children}
      </Box>
    </Container>
  );
};

export default MainContainer;
