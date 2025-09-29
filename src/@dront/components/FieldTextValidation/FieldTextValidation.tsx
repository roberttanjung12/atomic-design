'use client';

import {
  Controller,
  useFormContext,
  type PathValue,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form';
import FieldText, { type FieldTextProps } from '../FieldText';

/**
 * Props for the FieldTextValidation component, extending FieldTextProps.
 */
interface FieldTextValidationProps<FieldTextValidationValues extends FieldValues> extends FieldTextProps {
  name: Path<FieldTextValidationValues>;

  /**
   * Validation rules for the field using react-hook-form.
   */
  rules?: Omit<
    RegisterOptions<FieldTextValidationValues, Path<FieldTextValidationValues>>,
    'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;

  /**
   * Default value for the field.
   */
  defaultValue?: PathValue<FieldTextValidationValues, Path<FieldTextValidationValues>>;

  /**
   * Optional react-hook-form control.
   * Required only when not used within a FormProvider.
   */
  control?: Control<FieldTextValidationValues>;
}

/**
 * Shared logic for rendering the field using react-hook-form's Controller.
 *
 * @param control - The control instance from useForm or FormProvider.
 * @param props - Props for the field component.
 * @returns JSX.Element
 */
const renderField = <T extends FieldValues>(control: Control<T>, props: FieldTextValidationProps<T>) => {
  const { name, rules, defaultValue, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => <FieldText errorMessage={error?.message} {...field} {...rest} />}
    />
  );
};

/**
 * Renders the field using control from useFormContext (FormProvider).
 */
const FieldTextValidationWithProvider = <T extends FieldValues>(props: FieldTextValidationProps<T>) => {
  const context = useFormContext<T>();

  return renderField(context.control, props);
};

/**
 * Renders the field using control passed as a prop.
 * Throws an error if control is not provided.
 */
const FieldTextValidationWithoutProvider = <T extends FieldValues>(props: FieldTextValidationProps<T>) => {
  if (!props.control) {
    throw new Error(`FieldTextValidation: 'control' prop is required when not using FormProvider`);
  }

  return renderField(props.control, props);
};

/**
 * A flexible FieldTextValidation component that integrates `FieldText`
 * with react-hook-form's Controller. It supports usage both within and outside
 * a FormProvider.
 *
 * @example
 * // With FormProvider
 * <FormProvider {...methods}>
 *   <FieldTextValidation name="email" label="Email" />
 * </FormProvider>
 *
 * // Without FormProvider
 * const { control } = useForm();
 * <FieldTextValidation name="email" label="Email" control={control} />
 */
const FieldTextValidation = <FieldTextValidationValues extends FieldValues = FieldValues>(
  props: FieldTextValidationProps<FieldTextValidationValues>
) => {
  if (props.control) {
    return <FieldTextValidationWithoutProvider {...props} />;
  }

  return <FieldTextValidationWithProvider {...props} />;
};

export default FieldTextValidation;
