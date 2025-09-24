import { Button, Stack } from '@mui/material';
import Alert from '@/@dront/components/Alert';

const AlertActionExample = () => {
  const handleUndo = () => {
    console.log('Undo clicked!');
  };

  return (
    <Stack spacing={2}>
      <Alert
        severity="info"
        title="File Deleted"
        message="The item was successfully removed from your list."
        slotProps={{
          alert: {
            action: (
              <Button color="inherit" size="small" onClick={handleUndo}>
                UNDO
              </Button>
            )
          }
        }}
      />
    </Stack>
  );
};

export default AlertActionExample;
