import { Alert } from '@dront/ui';
import { Stack } from '@mui/material';

const AlertBasicExample = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="success" title="Success" message="This is a success alert — check it out!" />
      <Alert severity="info" title="Info" message="This is an info alert — check it out!" />
      <Alert severity="warning" title="Warning" message="This is a warning alert — check it out!" />
      <Alert severity="error" title="Error" message="This is an error alert — check it out!" />
    </Stack>
  );
};

export default AlertBasicExample;
