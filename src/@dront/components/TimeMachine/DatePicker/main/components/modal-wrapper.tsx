import type { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Card, CardContent, CardHeader, IconButton, Modal, type SxProps } from '@mui/material';

interface ModalWrapperProps {
  open: boolean;
  title?: any;
  subheader?: any;
  sx?: SxProps;
  children: ReactNode;
  onClose: () => void;
}

const ModalWrapper = ({ open, title, subheader, sx, children, onClose }: ModalWrapperProps) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="parent-modal-title">
      <Box
        sx={{
          minWidth: 'min(480px, calc(100% - 24px))',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: 24,
          borderRadius: 4,
          p: 0,
          ...sx
        }}
      >
        <Card>
          <IconButton sx={{ position: 'absolute', right: 4, top: 4, zIndex: 10 }} onClick={onClose}>
            <CloseIcon />
          </IconButton>

          {title && (
            <CardHeader sx={{ p: 1, pb: 1, boxShadow: 2, position: 'relative' }} title={title} subheader={subheader} />
          )}

          <CardContent sx={{ px: 1, py: 0 }}>{children}</CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default ModalWrapper;
