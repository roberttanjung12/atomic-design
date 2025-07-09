'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

const NotFound = () => (
  <Box
    display="flex"
    flexDirection="column"
    height="100vh"
    textAlign="center"
    justifyContent="center"
    bgcolor="#000000"
    color="#FFFFFF"
  >
    <Container maxWidth="md">
      <Typography align="center" variant="h1" mb={4} fontSize="5rem">
        404
      </Typography>
      <Typography align="center" variant="h2" mb={4}>
        Page not found
      </Typography>
      <Button color="primary" variant="contained" component={Link} href="/" disableElevation>
        Go Back to Home
      </Button>
    </Container>
  </Box>
);

export default NotFound;
