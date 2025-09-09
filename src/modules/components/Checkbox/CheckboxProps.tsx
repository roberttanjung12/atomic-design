import { type ChangeEvent, useState } from 'react';
import { pink } from '@mui/material/colors';
import Checkboxes from '@/@dront/components/CheckBoxes';

const CheckboxProps = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkboxes
      handleChange={handleChange}
      checked={checked}
      label="label"
      slotProps={{
        checkBox: {
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

export default CheckboxProps;
