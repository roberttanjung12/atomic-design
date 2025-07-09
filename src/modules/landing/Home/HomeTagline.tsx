'use client';

import { Box, Typography } from '@mui/material';

const HomeTagline = () => (
  <Box
    alignItems="center"
    display="flex"
    flexDirection="column"
    height={350}
    justifyContent="center"
    px={5}
    bgcolor="#fff"
  >
    <Typography component="h1" fontSize="2rem" letterSpacing={1} textAlign="center" lineHeight={1.5} fontWeight={900}>
      The Ultimate SPE Front End Department Boilerplate
    </Typography>
    <Typography
      component="p"
      letterSpacing={1.5}
      textAlign="center"
      lineHeight={1}
      fontWeight={900}
      color="#ec255a"
      fontSize="1.3rem"
      mt={2}
    >
      With Latest Version of Next.JS
    </Typography>
  </Box>
);

export default HomeTagline;
