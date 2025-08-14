import { Stack } from '@mui/material';
import { StatusIndicator } from '@/@dront/components';

const StatusVariant = () => {
  return (
    <Stack spacing={2} direction={'row'}>
      <StatusIndicator label="Text" color="success" variant="text" />
      <StatusIndicator label="Outlined" color="success" variant="outlined" />
      <StatusIndicator label="Contained" color="success" variant="contained" />
    </Stack>
  );
};

export default StatusVariant;
