import { alertFloating } from '@dront/ui';
import { Button, Stack } from '@mui/material';

const FloatingAlertProgrammaticExample = () => {
  const showSuccessAlert = () => {
    alertFloating.open({
      severity: 'success',
      title: 'Action Successful',
      message: 'The operation completed without any issues.',
      duration: 5000 // Auto-close after 5 seconds
    });
  };

  const showErrorAlert = () => {
    alertFloating.open({
      severity: 'error',
      title: 'Action Failed',
      message: 'An unexpected error occurred. Please contact support.',
      duration: 0 // Will not auto-close, requires manual dismissal
    });
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success" onClick={showSuccessAlert}>
        Show Success
      </Button>
      <Button variant="contained" color="error" onClick={showErrorAlert}>
        Show Error
      </Button>
    </Stack>
  );
};

export default FloatingAlertProgrammaticExample;
