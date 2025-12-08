import { alertFloating } from '@dront/ui/Alert';
import { Button, Grid } from '@mui/material';

const FloatingAlertPositioningExample = () => {
  const showAlert = (
    position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  ) => {
    alertFloating.open({
      position,
      severity: 'info',
      title: `Position: ${position}`,
      message: 'This alert is shown at a custom position.',
      duration: 3000
    });
  };

  return (
    <Grid container spacing={2} justifyContent="space-between">
      <Grid size={{ xs: 12, md: 4 }}>
        <Button fullWidth variant="outlined" onClick={() => showAlert('top-left')}>
          Top Left
        </Button>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Button fullWidth variant="outlined" onClick={() => showAlert('top-center')}>
          Top Center
        </Button>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Button fullWidth variant="outlined" onClick={() => showAlert('top-right')}>
          Top Right
        </Button>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Button fullWidth variant="outlined" onClick={() => showAlert('bottom-left')}>
          Bottom Left
        </Button>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Button fullWidth variant="outlined" onClick={() => showAlert('bottom-center')}>
          Bottom Center
        </Button>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Button fullWidth variant="outlined" onClick={() => showAlert('bottom-right')}>
          Bottom Right
        </Button>
      </Grid>
    </Grid>
  );
};

export default FloatingAlertPositioningExample;
