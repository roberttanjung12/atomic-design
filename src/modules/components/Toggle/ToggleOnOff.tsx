import { type ChangeEvent, useState } from 'react';
import Toogle from '@/@dront/components/Toogle';

const ToggleOnOff = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Toogle checked={checked} handleChange={handleChange} onOff />;
};

export default ToggleOnOff;
