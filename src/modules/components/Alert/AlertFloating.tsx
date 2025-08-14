import { Box, Button } from '@mui/material';
import callAlert from '@/@dront/components/Alert/CallAlert.action';

const AlertFloating = () => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          callAlert.open({
            severity: 'info',
            title: 'Floating Alert',
            message: 'This is a floating alert'
          });
        }}
      >
        Show Floating Alert
      </Button>

      <Box mb={2} />

      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          callAlert.open({
            severity: 'success',
            title: 'Floating Alert',
            message: 'This is a floating alert with 3 seconds duration',

            duration: 3000, // 3 seconds of duration,
            position: 'top-left', // Position of the alert,
            offset: {
              // You can fine-tune the alert's position
              left: '16px',
              top: '16px'
            }
          });
        }}
      >
        Show Floating Alert with Duration
      </Button>
    </>
  );
};

export default AlertFloating;
