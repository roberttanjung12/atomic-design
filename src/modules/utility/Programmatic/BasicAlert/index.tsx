'use client';

import { Button } from '@mui/material';
import myAlert from './myAlert';

const BasicAlert = () => {
  const handleOpenAlert = () => {
    myAlert.open({
      message: 'Success',
      onClose: () => {
        console.log('closed');
      }
    });
  };

  return <Button onClick={handleOpenAlert}>Open Alert</Button>;
};

export default BasicAlert;
