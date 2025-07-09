'use client';

import { Alert } from '@mui/material';

const DynamicAlert = ({ message }: { message?: string }) => {
  if (!message) {
    return null;
  }

  return (
    <Alert severity="error" variant="filled" sx={{ mb: 4, '& .MuiAlert-message': { lineHeight: 1.6 } }}>
      {message}
    </Alert>
  );
};

export default DynamicAlert;
