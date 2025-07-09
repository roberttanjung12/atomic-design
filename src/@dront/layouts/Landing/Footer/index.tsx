'use client';

import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      alignItems="center"
      borderRadius={0}
      display="flex"
      flexDirection="column"
      height="250px"
      pt={5}
      width="100%"
      sx={{ backgroundColor: '#202124' }}
    >
      <img src="/logo/dront.svg" alt="DRONT V5" width="150px" />
      <Typography component="span" mt={5} fontSize={13} letterSpacing={1} color="#FFF">
        @ {new Date().getFullYear()} DRAC
      </Typography>
    </Box>
  );
};

export default Footer;
