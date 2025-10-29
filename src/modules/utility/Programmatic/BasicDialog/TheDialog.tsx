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

const TheDialog = ({ open, title, description, onAgree, onDisagree, onCancel, close }: TheDialogProps) => {
  const [loading, setLoading] = useState(false);

  const handleClose = (callback: () => void | Promise<void>) => async () => {
    if (loading) {
      return;
    }

    await callback();
    close();
  };

  const handleOnAgree = handleClose(async () => {
    setLoading(true);

    await onAgree?.();

    setLoading(false);
  });

  const handleOnDisagree = handleClose(() => {
    onDisagree?.();
  });

  const handleOnCancel = handleClose(() => {
    onCancel?.();
  });

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
