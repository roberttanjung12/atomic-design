import { type ChangeEvent, useState } from 'react';
import { FormControl, Typography } from '@mui/material';
import Checkboxes from '@/@dront/components/CheckBoxes';

const CheckboxDisabled = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <Checkboxes
        onChange={handleChange}
        checked={checked}
        label={<Typography>Disabled Activated</Typography>}
        disabled
      />
      <Checkboxes onChange={handleChange} checked={!checked} label={<Typography>Disabled</Typography>} disabled />
    </FormControl>
  );
};

export default CheckboxDisabled;
