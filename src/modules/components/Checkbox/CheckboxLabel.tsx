import { type ChangeEvent, useState } from 'react';
import { Typography } from '@mui/material';
import Checkboxes from '@/@dront/components/CheckBoxes';

const CheckboxLabel = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Checkboxes onChange={handleChange} checked={checked} label={<Typography>Label</Typography>} />;
};

export default CheckboxLabel;
