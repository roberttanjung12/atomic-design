import { type ChangeEvent, useState } from 'react';
import { FormGroup, Typography } from '@mui/material';
import Toggle from '@/@dront/components/Toggle';

const TogglePlacement = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormGroup aria-label="position" row>
      <Toggle
        checked={checked}
        onChange={handleChange}
        label={<Typography>End</Typography>}
        slotProps={{
          root: {
            labelPlacement: 'end'
          }
        }}
      />
      <Toggle
        checked={checked}
        onChange={handleChange}
        label={<Typography>Start</Typography>}
        slotProps={{
          root: {
            labelPlacement: 'start'
          }
        }}
      />
      <Toggle
        checked={checked}
        onChange={handleChange}
        label={<Typography>Top</Typography>}
        slotProps={{
          root: {
            labelPlacement: 'top'
          }
        }}
      />
      <Toggle
        checked={checked}
        onChange={handleChange}
        label={<Typography>Bottom</Typography>}
        slotProps={{
          root: {
            labelPlacement: 'bottom'
          }
        }}
      />
    </FormGroup>
  );
};

export default TogglePlacement;
