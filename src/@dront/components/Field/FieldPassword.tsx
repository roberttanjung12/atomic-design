'use client';

import React, { useState } from 'react';
import { Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Controller } from 'react-hook-form';
import FieldError from './FieldError';
import FieldLabel from './FieldLabel';

interface FieldPasswordProps {
  autoFocus?: boolean;
  control: any;
  errors?: Record<string, any>;
  label: string;
  name: string;
  rules?: Record<string, any>;
}

const OutlinedInputStyled = styled(OutlinedInput)(({ theme }) => ({
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

const FieldPassword = ({ autoFocus = false, control, errors = {}, label, name, rules = {} }: FieldPasswordProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormControl fullWidth sx={{ mb: 0.6 }}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange, onBlur } }) => (
          <OutlinedInputStyled
            id={name}
            autoFocus={autoFocus}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            error={Boolean(errors[name])}
            placeholder={label}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label={showPassword ? `Hide ${label.toLocaleLowerCase()}` : `Show ${label.toLocaleLowerCase()}`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityIcon fontSize="small" /> : <VisibilityOffIcon fontSize="small" />}
                </IconButton>
              </InputAdornment>
            }
          />
        )}
      />
      <FieldError message={errors[name]?.message ?? ''} />
    </FormControl>
  );
};

export default React.memo(FieldPassword);
