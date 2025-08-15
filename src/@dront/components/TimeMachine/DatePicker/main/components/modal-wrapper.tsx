import type { FC, ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Card, CardContent, CardHeader, IconButton, Modal, type SxProps } from '@mui/material';

interface ModalWrapper {
  open: boolean;
  title?: any;
  subheader?: any;
  sx?: SxProps;
  children: ReactNode;
  onClose: () => void;
}

const ModalWrapper: FC<ModalWrapper> = ({ open, title, subheader, sx, children, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="parent-modal-title">
      <Box
        sx={{
          minWidth: '480px',
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
