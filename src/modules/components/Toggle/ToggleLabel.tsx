import { type ChangeEvent, useState } from 'react';
import { Typography } from '@mui/material';
import Toggle from '@/@dront/components/Toggle';

const ToggleLabel = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Toggle checked={checked} onChange={handleChange} label={<Typography>Label</Typography>} />;
};

export default ToggleLabel;
