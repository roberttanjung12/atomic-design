'use client';

import { Button } from '@mui/material';
import myModal from './myModal';

const ModalWithAutoClose = () => {
  const handleOpenAlert = () => {
    myModal.open({
      message: `This modal will close in {{timeoutLeft}} seconds.`,
      duration: 3,
      onClose: () => {
        console.log('closed');
      }
    });
  };

  return <Button onClick={handleOpenAlert}>Open Modal</Button>;
};

export default ModalWithAutoClose;
