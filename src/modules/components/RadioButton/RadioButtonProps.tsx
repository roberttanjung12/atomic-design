import { type ChangeEvent, useState } from 'react';
import { pink } from '@mui/material/colors';
import RadioButton from '@/@dront/components/RadioButton';

const RadioButtonProps = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <RadioButton
      value={value}
      handleChange={handleChange}
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
      ]}
      slotProps={{
        root: { row: true },
        radio: {
          sx: [
            {
              color: pink[800],
              '&:hover .MuiSvgIcon-root': {
                color: pink[200]
              },
              '&.Mui-checked': {
                color: pink[600]
              }
            }
          ]
        }
      }}
    />
  );
};

export default RadioButtonProps;
