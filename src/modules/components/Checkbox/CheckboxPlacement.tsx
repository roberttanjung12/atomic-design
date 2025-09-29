import { type ChangeEvent, useState } from 'react';
import { FormGroup } from '@mui/material';
import Checkboxes from '@/@dront/components/CheckBoxes';

const CheckboxPlacement = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormGroup aria-label="position" row>
      <Checkboxes
        handleChange={handleChange}
        checked={checked}
        label="End"
        slotProps={{
          root: {
            labelPlacement: 'end'
          }
        }}
      />
      <Checkboxes
        handleChange={handleChange}
        checked={checked}
        label="Start"
        slotProps={{
          root: {
            labelPlacement: 'start'
          }
        }}
      />
      <Checkboxes
        handleChange={handleChange}
        checked={checked}
        label="Top"
        slotProps={{
          root: {
            labelPlacement: 'top'
          }
        }}
      />
      <Checkboxes
        handleChange={handleChange}
        checked={checked}
        label="Bottom"
        slotProps={{
          root: {
            labelPlacement: 'bottom'
          }
        }}
      />
    </FormGroup>
  );
};

export default CheckboxPlacement;
