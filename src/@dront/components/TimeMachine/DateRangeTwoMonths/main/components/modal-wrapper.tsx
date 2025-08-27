import type { ReactNode } from 'react';
import { Box, Card, CardContent, Modal, type SxProps } from '@mui/material';

interface ModalWrapper {
  open: boolean;
  sx?: SxProps;
  children: ReactNode;
  onClose: () => void;
}

const ModalWrapper = ({ open, sx, children, onClose }: ModalWrapper) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="parent-modal-title">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: 24,
          borderRadius: 4,
          minWidth: { xs: '94%', md: '800px' },
          ...sx
        }}
      >
        <Card sx={{ p: 0 }}>
          <CardContent sx={{ p: '0 !important' }}>{children}</CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default ModalWrapper;
