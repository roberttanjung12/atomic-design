import Alert from '@dront/ui/Alert';
import { Stack } from '@mui/material';

const AlertSnackbarExample = () => {
  return (
    <Stack spacing={2}>
      <Alert
        variant="snackbar"
        severity="success"
        title="Success"
        message="Your profile has been updated successfully."
      />
      <Alert variant="snackbar" severity="error" title="Error" message="Could not save changes. Please try again." />
    </Stack>
  );
};

export default AlertSnackbarExample;
