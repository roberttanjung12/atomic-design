'use client';

import type { ProgrammaticComponentProps } from '@dront/ui/programmatic';
import { Box, Modal, Typography } from '@mui/material';

interface TheModalProps extends ProgrammaticComponentProps {
  message: string;
}

const TheModal = ({ open, message, timeoutLeft }: TheModalProps) => {
  return (
    <Modal open={open}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4
        }}
      >
        <Typography variant="h6" component="h2">
          {message.replace('{{timeoutLeft}}', String(timeoutLeft))}
        </Typography>
      </Box>
    </Modal>
  );
};

export default TheModal;
