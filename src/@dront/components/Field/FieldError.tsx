'use client';

import { Box, FormHelperText } from '@mui/material';

const FieldError = ({ message }: { message?: string }) => {
  if (!message) {
    return <Box height={23} width="100%" />;
  }

  return <FormHelperText sx={{ color: 'error.main' }}>{message}</FormHelperText>;
};

export default FieldError;
