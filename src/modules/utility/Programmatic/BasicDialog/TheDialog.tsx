'use client';

import { useState } from 'react';
import type { ProgrammaticComponentProps } from '@dront/ui/programmatic';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

interface TheDialogProps extends ProgrammaticComponentProps {
  title: string;
  description: string;
  onAgree?: () => Promise<void>;
  onDisagree?: () => void;
  onCancel?: () => void;
}

const TheDialog = ({ open, title, description, onAgree, onDisagree, onCancel, onClose }: TheDialogProps) => {
  const [loading, setLoading] = useState(false);

  const handleOnAgree = async () => {
    setLoading(true);

    await onAgree?.();

    onClose?.();
    setLoading(false);
  };

  const handleOnDisagree = () => {
    onDisagree?.();
    onClose?.();
  };

  const handleOnCancel = () => {
    onCancel?.();
    onClose?.();
  };

  return (
    <Dialog
      open={open}
      onClose={handleOnCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnDisagree} color="error" variant="outlined" sx={{ minWidth: 100 }} disabled={loading}>
          Disagree
        </Button>
        <Button onClick={handleOnAgree} autoFocus sx={{ minWidth: 100 }} loading={loading}>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TheDialog;
