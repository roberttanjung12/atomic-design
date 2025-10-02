import { type ChangeEvent, useState } from 'react';
import Toggle from '@/@dront/components/Toggle';

const ToggleBasic = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Toggle checked={checked} onChange={handleChange} />;
};

export default ToggleBasic;
