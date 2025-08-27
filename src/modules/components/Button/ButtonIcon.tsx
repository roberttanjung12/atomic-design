import { Add, Download, Send } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { Button } from '@/@dront/components';

const ButtonIcon = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Button startIcon={<Download />}>Download</Button>
        <Button startIcon={<Send />} variant="outline">
          Send Message
        </Button>
        <Button endIcon={<Add />} variant="text">
          Add Item
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button startIcon={<Download />} size="sm">
          Small
        </Button>
        <Button startIcon={<Download />} size="lg">
          Large
        </Button>
      </Stack>
    </Stack>
  );
};

export default ButtonIcon;
