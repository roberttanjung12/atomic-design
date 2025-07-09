'use client';

import { Box, useMediaQuery, type Theme } from '@mui/material';
import { Drogo } from '@/@dront/components';

const HomeBanner = () => {
  const isMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Box
      position="relative"
      alignItems="center"
      display="flex"
      height={`calc(100vh - ${isMediumScreen ? '100px' : '80px'})`}
      justifyContent="center"
      width="100%"
      bgcolor="#000"
    >
      <Box left={0} position="absolute" width="5%" sx={{ img: { width: '100%' } }}>
        <img src="/images/landing/home/stripes-left.svg" alt="DRONT V5" />
      </Box>
      <Drogo variant="full" size={isMediumScreen ? 700 : 300} />
      <Box right={0} position="absolute" width="5%" sx={{ img: { width: '100%' } }}>
        <img src="/images/landing/home/stripes-right.svg" alt="DRONT V5" />
      </Box>
    </Box>
  );
};

export default HomeBanner;
