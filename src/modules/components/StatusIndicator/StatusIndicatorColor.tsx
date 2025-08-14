import { Stack } from '@mui/material';
import { StatusIndicator } from '@/@dront/components';

const StatusBasic = () => {
  return (
    <Stack spacing={2} direction={'row'}>
      <StatusIndicator label="Success" color="success" />
      <StatusIndicator label="Error" color="error" />
      <StatusIndicator label="Warning" color="warning" />
      <StatusIndicator label="Info" color="info" />
      <StatusIndicator label="Secondary" color="secondary" />
    </Stack>
  );
};

export default StatusBasic;
