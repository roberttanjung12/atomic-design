import { Stack } from '@mui/material';
import { Button } from '@/@dront/components';

const ButtonDisabled = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button disabled>Disabled Solid</Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
      <Button variant="text" disabled>
        Disabled Text
      </Button>
    </Stack>
  );
};

export default ButtonDisabled;
