'use client';

import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import myDialog from './myDialog';

const BasicDialog = () => {
  const [response, setResponse] = useState('');

  const handleOpenAlert = () => {
    myDialog.open({
      title: `Use Google's location service?`,
      description:
        'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.',
      onAgree: async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));

        setResponse(`You agree with Google's location service`);
      },
      onDisagree: () => {
        setResponse(`You disagree with Google's location service`);
      },
      onCancel: () => {
        setResponse('');
      }
    });
  };

  return (
    <Box>
      <Button onClick={handleOpenAlert}>Open Dialog</Button>
      <Typography mt={2}>Response: {response}</Typography>
    </Box>
  );
};

export default BasicDialog;
