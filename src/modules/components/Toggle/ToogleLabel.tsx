import { type ChangeEvent, useState } from 'react';
import { Typography } from '@mui/material';
import Toogle from '@/@dront/components/Toogle';

const ToogleLabel = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Toogle checked={checked} handleChange={handleChange} label={<Typography>Label</Typography>} />;
};

export default ToogleLabel;
