'use client';

import { useState } from 'react';
import { Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FieldText, { type FieldTextProps } from '../FieldText';

/**
 * Props for the `FieldPassword` component.
 *
 * Extends `FieldTextProps`, omitting `type` and `variant`, which are internally controlled.
 */
export type FieldPasswordProps = Omit<FieldTextProps, 'type' | 'variant'>;

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
const FieldPassword = (props: FieldPasswordProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const label = props.label?.toLowerCase() ?? '';
  const title = showPassword ? `Hide ${label}` : `Show ${label}`;
  const type = showPassword ? 'text' : 'password';

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <FieldText
      type={type}
      variant="outlined"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" aria-label={title} title={title} onClick={handleShowPassword}>
                {showPassword ? <VisibilityIcon fontSize="small" /> : <VisibilityOffIcon fontSize="small" />}
              </IconButton>
            </InputAdornment>
          )
        }
      }}
      {...props}
    />
  );
};

export default FieldPassword;
