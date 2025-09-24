import { Button, Stack } from '@mui/material';
import callAlert from '@/@dront/components/Alert/CallAlert.action';

const FloatingAlertProgrammaticExample = () => {
  const showSuccessAlert = () => {
    callAlert.open({
      severity: 'success',
      title: 'Action Successful',
      message: 'The operation completed without any issues.',
      duration: 5000 // Auto-close after 5 seconds
    });
  };

  const showErrorAlert = () => {
    callAlert.open({
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
