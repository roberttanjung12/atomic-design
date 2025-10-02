import { type ChangeEvent, useState } from 'react';
import { useTheme } from '@mui/material';
import Toggle from '@/@dront/components/Toggle';

const ToggleOnOff = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Toggle
      checked={checked}
      onChange={handleChange}
      activeLabel="ON"
      inactiveLabel="OFF"
      activeColor={theme.palette.success.main}
      inactiveColor={theme.palette.error.main}
    />
  );
};

export default ToggleOnOff;
