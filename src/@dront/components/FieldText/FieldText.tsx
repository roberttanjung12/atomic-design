'use client';

import FormControl, { type FormControlProps } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import TextField, { type TextFieldVariants, type TextFieldProps } from '@mui/material/TextField';
import FieldLabel from './FieldLabel';

/**
 * Subset of keys from `TextFieldProps` that are directly exposed through
 * `FieldTextProps`. This ensures a controlled and predictable API surface.
 */
type TextFieldPropsSubset =
  | 'error'
  | 'helperText'
  | 'id'
  | 'inputMode'
  | 'name'
  | 'placeholder'
  | 'ref'
  | 'size'
  | 'sx'
  | 'type'
  | 'variant';

/**
 * Utility type that picks only the selected props from MUI's `TextFieldProps`,
 * based on `TextFieldPropsSubset`.
 *
 * @template TVariant - Restricts the type to valid Material UI `TextField` variants.
 */
type PickTextFieldProps<TVariant extends TextFieldVariants> = Pick<TextFieldProps<TVariant>, TextFieldPropsSubset>;

/**
 * Utility type that picks only the `fullWidth` prop from MUI's `FormControlProps`.
 * Used to selectively expose layout-related props.
 */
type PickFormControlProps = Pick<FormControlProps, 'fullWidth'>;

/**
 * Props for the FieldText component, extends from `TextFieldProps`.
 */
export type FieldTextProps<TVariant extends TextFieldVariants = TextFieldVariants> = PickTextFieldProps<TVariant> &
  PickFormControlProps & {
    /**
     * The visible label rendered above the field.
     */
    label: string;

    /**
     * The input name attribute. Also used as htmlFor on the label.
     */
    name: string;

    /**
     * Error message. Presence of a value toggles error state.
     * When provided, overrides helperText.
     */
    errorMessage?: React.ReactNode;

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
      textField?: Omit<TextFieldProps<TVariant>, TextFieldPropsSubset>;
    };
  };

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
 * @template TVariant - Restricts the type to valid Material UI `TextField` variants.
 * @param {FieldTextProps} props - The props for the FieldText component.
 * @returns {JSX.Element} The rendered FieldText component.
 *
 * @example
 * ```tsx
 * <FieldText
 *   name="email"
 *   label="Email Address"
 *   placeholder="Enter your email"
 *   helperText="We'll never share your email."
 *   type="email"
 * />
 * ```
 */
const FieldText = <TVariant extends TextFieldVariants = TextFieldVariants>({
  errorMessage,
  fullWidth = true,
  helperText: initialHelperText,
  inputMode,
  label,
  name,
  placeholder,
  slotProps,
  type,
  variant
}: FieldTextProps<TVariant>) => {
  const error = !!errorMessage;
  const helperText = errorMessage || initialHelperText;

  return (
    <FormControl {...slotProps?.root} fullWidth={fullWidth} error={error}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <TextFieldStyled
        {...slotProps?.textField}
        name={name}
        error={error}
        placeholder={placeholder}
        variant={variant}
        type={type}
        inputMode={inputMode}
      />
      <FormHelperText>{helperText ?? ' '}</FormHelperText>
    </FormControl>
  );
};

export default FieldText;
