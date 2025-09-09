import { type ChangeEvent, useState } from 'react';
import Checkboxes from '@/@dront/components/CheckBoxes';

const CheckboxBasic = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Checkboxes handleChange={handleChange} checked={checked} />;
};

export default CheckboxBasic;
