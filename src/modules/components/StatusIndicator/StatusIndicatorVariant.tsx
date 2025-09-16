import { StatusIndicator } from '@dront/ui';
import { Stack } from '@mui/material';

const StatusVariant = () => {
  return (
    <Stack spacing={2} direction="row">
      <StatusIndicator label="Text" color="success" variant="text" />
      <StatusIndicator label="Outlined" color="success" variant="outlined" />
      <StatusIndicator label="Contained" color="success" variant="contained" />
    </Stack>
  );
};

export default StatusVariant;
