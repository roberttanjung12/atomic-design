'use client';

import type { AlertProps } from '@dront/ui/Alert';
import type { ProgrammaticComponentProps } from '@dront/ui/programmatic';
import { Alert } from '@mui/material';

interface TheAlertProps extends ProgrammaticComponentProps {
  message: string;
  severity?: AlertProps['severity'];
}

const TheAlert = ({ open, message, severity = 'success', close }: TheAlertProps) => {
  if (!open) {
    return null;
  }

  return (
    <Alert
      severity={severity}
      onClose={close}
      sx={{
        position: 'fixed',
        top: 100,
        right: 150,
        zIndex: 1300
      }}
    >
      {message}
    </Alert>
  );
};

export default TheAlert;
