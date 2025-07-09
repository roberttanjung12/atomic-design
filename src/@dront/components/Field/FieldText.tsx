'use client';

import { FormControl, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Controller } from 'react-hook-form';
import FieldError from './FieldError';
import FieldLabel from './FieldLabel';

interface FieldTextProps {
  autoFocus?: boolean;
  control: any;
  errors?: any;
  label: string;
  name: string;
  rules?: any;
}

const TextFieldStyled = styled((props: any) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8'
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8'
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200]
  }
}));

const FieldText = ({ autoFocus = false, control, errors, label, name, rules }: FieldTextProps) => {
  return (
    <FormControl fullWidth sx={{ mb: 0.6 }}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextFieldStyled
            id={name}
            autoFocus={autoFocus}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            error={Boolean(errors[name])}
            placeholder={label}
          />
        )}
      />
      <FieldError message={errors[name]?.message} />
    </FormControl>
  );
};

export default FieldText;
