import { Stack } from '@mui/material';
import Alert from '@/@dront/components/Alert';

const AlertStandard = () => {
  return (
    <Stack spacing={2}>
      <Alert
        severity="info"
        title="This is an alert"
        message="The alert component can be used to highlight certain parts of your page for higher content visibility."
      />

      <Alert
        severity="success"
        title="This is an alert"
        message="The alert component can be used to highlight certain parts of your page for higher content visibility."
      />

      <Alert
        severity="error"
        title="This is an alert"
        message="The alert component can be used to highlight certain parts of your page for higher content visibility."
      />

      <Alert
        severity="warning"
        title="This is an alert"
        message="The alert component can be used to highlight certain parts of your page for higher content visibility."
      />
    </Stack>
  );
};

export default AlertStandard;
