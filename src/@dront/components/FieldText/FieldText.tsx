'use client';

import FormControl, { type FormControlProps } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import TextField, { type TextFieldProps } from '@mui/material/TextField';
import FieldLabel from './FieldLabel';

/**
 * Props for the FieldText component, extends from `TextFieldProps`
 */
export interface FieldTextProps extends Omit<TextFieldProps, 'label'> {
  /**
   * The label for the text field.
   */
  label: string;

  /**
   * The name attribute for the text field.
   */
  name: string;

  /**
   * The error message to display if validation fails.
   */
  errorMessage?: string;

  FormControlProps?: FormControlProps;
}

/**
 * Styled TextField component with custom placeholder and disabled styles.
 */
const TextFieldStyled = styled(TextField)(({ theme: { palette } }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: palette.text.secondary,
    opacity: '0.8'
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: palette.text.secondary,
    opacity: '0.8'
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: palette.grey[200]
  }
}));

/**
 * FieldText component renders a text input field with a label, helper text, and error message.
 *
 * @param {FieldTextProps} props - The props for the FieldText component.
 * @returns {JSX.Element} The rendered FieldText component.
 */
const FieldText = ({
  label,
  name,
  errorMessage,
  helperText: initialHelperText,
  FormControlProps,
  ...rest
}: FieldTextProps) => {
  const error = !!errorMessage;
  const helperText = errorMessage || initialHelperText;

  return (
    <FormControl fullWidth error={error} {...FormControlProps}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <TextFieldStyled name={name} error={error} {...rest} />
      <FormHelperText>{helperText ?? ' '}</FormHelperText>
    </FormControl>
  );
};

export default FieldText;
