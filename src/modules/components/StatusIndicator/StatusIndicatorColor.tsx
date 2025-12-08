import StatusIndicator from '@dront/ui/StatusIndicator';
import { Stack } from '@mui/material';

const StatusColor = () => {
  return (
    <Stack spacing={2} direction="row">
      <StatusIndicator label="Success" color="success" />
      <StatusIndicator label="Error" color="error" />
      <StatusIndicator label="Warning" color="warning" />
      <StatusIndicator label="Info" color="info" />
      <StatusIndicator label="Secondary" color="secondary" />
    </Stack>
  );
};

export default StatusColor;
