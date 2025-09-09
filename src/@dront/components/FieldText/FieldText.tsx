'use client';

import FormControl, { type FormControlProps } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import TextField, { type TextFieldVariants, type TextFieldProps } from '@mui/material/TextField';
import FieldLabel from './FieldLabel';

/**
 * Props for the FieldText component, extends from `TextFieldProps`.
 */
export interface FieldTextProps<TVariant extends TextFieldVariants = TextFieldVariants> {
  /**
   * The visible label rendered above the field.
   */
  label: string;

  /**
   * The input name attribute. Also used as htmlFor on the label.
   */
  name: string;

  /**
   * Helper text displayed beneath the field when there is no error.
   */
  helperText?: TextFieldProps<TVariant>['helperText'];

  /**
   * Whether the field should take the full width of its container.
   * Defaults to true in the component implementation.
   * @default true
   */
  fullWidth?: FormControlProps['fullWidth'];

  /**
   * Visual style variant of the MUI TextField / FormControl.
   * @default 'outlined'
   */
  variant?: FormControlProps['variant'];

  /**
   * Error message. Presence of a value toggles error state.
   * When provided, overrides helperText.
   */
  errorMessage?: React.ReactNode;

  /**
   * Placeholder text shown when the input is empty.
   */
  placeholder?: TextFieldProps<TVariant>['placeholder'];

  /**
   * Slot props to customize internal subcomponents.
   */
  slotProps?: {
    /**
     * Props spread to MUI FormControl root.
     */
    root?: Omit<FormControlProps, 'error' | 'fullWidth'>;
    /**
     * Props spread to the underlying MUI TextField.
     */
    textField?: Omit<TextFieldProps<TVariant>, 'name' | 'error' | 'placeholder' | 'variant'>;
  };
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
const FieldText = <TVariant extends TextFieldVariants = TextFieldVariants>({
  errorMessage,
  fullWidth = true,
  helperText: initialHelperText,
  label,
  name,
  placeholder,
  slotProps,
  variant
}: FieldTextProps<TVariant>) => {
  const error = !!errorMessage;
  const helperText = errorMessage || initialHelperText;

  return (
    <FormControl fullWidth={fullWidth} error={error} {...slotProps?.root}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <TextFieldStyled
        name={name}
        error={error}
        placeholder={placeholder}
        variant={variant}
        {...slotProps?.textField}
      />
      <FormHelperText>{helperText ?? ' '}</FormHelperText>
    </FormControl>
  );
};

export default FieldText;
