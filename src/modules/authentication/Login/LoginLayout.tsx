import type { ReactNode } from 'react';
import { Box, Grid, useMediaQuery, type Theme } from '@mui/material';
import Link from 'next/link';
import { Drogo } from '@/@dront/components';

const LoginLayout = ({ children }: { children: ReactNode }) => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return (
    <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
      <Grid
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3'
          }
        }}
        size={{
          xs: 12,
          sm: 12,
          lg: 7,
          xl: 8
        }}
      >
        <Box position="relative" bgcolor="#000000">
          <Box alignItems="center" justifyContent="center" height="100vh" sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Link href="/">
              <Drogo variant="full" size={lgUp ? 600 : 300} mode="light" />
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        size={{
          xs: 12,
          sm: 12,
          lg: 5,
          xl: 4
        }}
      >
        <Box py={10} px={4} width={400}>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginLayout;
