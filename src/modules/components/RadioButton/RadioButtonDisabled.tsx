import { type ChangeEvent, useState } from 'react';
import RadioButton from '@/@dront/components/RadioButton';

const RadioButtonDisabled = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <RadioButton
      value={value}
      onChange={handleChange}
      options={[
        { label: 'Disabled Activated', value: '1', disabled: true },
        { label: 'Disabled', value: '2', disabled: true }
      ]}
    />
  );
};

export default RadioButtonDisabled;
