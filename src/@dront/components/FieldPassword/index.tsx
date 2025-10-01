'use client';

import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import type { TextFieldVariants } from '@mui/material/TextField';
import FieldText, { type FieldTextProps } from '../FieldText';

/**
 * Props for the `FieldPassword` component.
 *
 * Extends `FieldTextProps`, omitting `type` and `variant`, which are internally controlled.
 */
export type FieldPasswordProps<TVariant extends TextFieldVariants = TextFieldVariants> = Omit<
  FieldTextProps<TVariant>,
  'type' | 'inputMode'
>;

/**
 * `FieldPassword` is a password input field built on top of `FieldText`, with built-in visibility toggling.
 *
 * It includes:
 * - A password visibility toggle button (eye icon)
 * - ARIA-compliant labels for accessibility
 * - Support for all common text field props (label, placeholder, helperText, etc.)
 *
 * This component is ideal for secure password inputs in forms.
 *
 * @example
 * ```tsx
 * <FieldPassword
 *   name="password"
 *   label="Password"
 *   placeholder="Enter your password"
 * />
 * ```
 */
const FieldPassword = ({ label: initialLabel, slotProps, ...rest }: FieldPasswordProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const label = initialLabel?.toLowerCase() ?? '';
  const title = showPassword ? `Hide ${label}` : `Show ${label}`;
  const type: React.HTMLInputTypeAttribute = showPassword ? 'text' : 'password';

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const endAdornment = (
    <InputAdornment position="end">
      <IconButton edge="end" aria-label={title} title={title} onClick={handleShowPassword}>
        {showPassword ? <VisibilityIcon fontSize="small" /> : <VisibilityOffIcon fontSize="small" />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <FieldText
      {...rest}
      type={type}
      label={label}
      slotProps={{
        ...slotProps,
        textField: {
          ...slotProps?.textField,
          slotProps: {
            ...slotProps?.textField?.slotProps,
            input: {
              ...slotProps?.textField?.slotProps?.input,
              endAdornment
            }
          }
        }
      }}
    />
  );
};

export default FieldPassword;
