import type { ReactNode } from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import { Drogo } from '@/@dront/components';

const ForgotPasswordLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      position="relative"
      bgcolor="#000000"
      sx={{
        '&:before': {
          content: '""',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: '0.3'
        }
      }}
    >
      <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={{
            xs: 12,
            sm: 12,
            lg: 5,
            xl: 5
          }}
        >
          <Card elevation={9} sx={{ py: 8, px: 5, zIndex: 1, width: '100%', maxWidth: '500px' }}>
            <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
              <Drogo variant="full" size={300} mode="dark" />
            </Box>
            <Typography textAlign="center" variant="subtitle2" fontWeight="400">
              Please enter the email address associated with your account.
            </Typography>
            {children}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForgotPasswordLayout;
