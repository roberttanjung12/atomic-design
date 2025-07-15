'use client';

import {
  Controller,
  useFormContext,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form';
import FieldPassword, { type FieldPasswordProps } from '../FieldPassword';

/**
 * Props for the FieldPasswordValidation component, extending FieldPasswordProps.
 */
interface FieldPasswordValidationProps<FieldPasswordValidationValues extends FieldValues> extends FieldPasswordProps {
  name: Path<FieldPasswordValidationValues>;

  /**
   * Validation rules for the field using react-hook-form.
   */
  rules?: Omit<
    RegisterOptions<FieldPasswordValidationValues, Path<FieldPasswordValidationValues>>,
    'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;

  /**
   * Default value for the field.
   */
  defaultValue?: any;

  /**
   * Optional react-hook-form control.
   * Required only when not used within a FormProvider.
   */
  control?: Control<FieldPasswordValidationValues>;
}

/**
 * Shared logic for rendering the field using react-hook-form's Controller.
 *
 * @param control - The control instance from useForm or FormProvider.
 * @param props - Props for the field component.
 * @returns JSX.Element
 */
const renderField = <T extends FieldValues>(control: Control<T>, props: FieldPasswordValidationProps<T>) => {
  const { name, rules, defaultValue, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <FieldPassword errorMessage={error?.message} {...field} {...rest} />
      )}
    />
  );
};

/**
 * Renders the field using control from useFormContext (FormProvider).
 */
const FieldPasswordValidationWithProvider = <T extends FieldValues>(props: FieldPasswordValidationProps<T>) => {
  const context = useFormContext<T>();

  return renderField(context.control, props);
};

/**
 * Renders the field using control passed as a prop.
 * Throws an error if control is not provided.
 */
const FieldPasswordValidationWithoutProvider = <T extends FieldValues>(props: FieldPasswordValidationProps<T>) => {
  if (!props.control) {
    throw new Error(`FieldPasswordValidation: 'control' prop is required when not using FormProvider`);
  }

  return renderField(props.control, props);
};

/**
 * A flexible FieldPasswordValidation component that integrates `FieldPassword`
 * with react-hook-form's Controller. It supports usage both within and outside
 * a FormProvider.
 *
 * @example
 * // With FormProvider
 * <FormProvider {...methods}>
 *   <FieldPasswordValidation name="password" label="Password" />
 * </FormProvider>
 *
 * // Without FormProvider
 * const { control } = useForm();
 * <FieldPasswordValidation name="password" label="Password" control={control} />
 */
const FieldPasswordValidation = <FieldPasswordValidationValues extends FieldValues = FieldValues>(
  props: FieldPasswordValidationProps<FieldPasswordValidationValues>
) => {
  if (props.control) {
    return <FieldPasswordValidationWithoutProvider {...props} />;
  }

  return <FieldPasswordValidationWithProvider {...props} />;
};

export default FieldPasswordValidation;
