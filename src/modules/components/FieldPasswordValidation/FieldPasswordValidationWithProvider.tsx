'use client';

import FieldPasswordValidation from '@dront/ui/FieldPasswordValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import { FormProvider, useForm, type DefaultValues, type SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

// Define the validation schema using yup
const validationSchema = yup.object({
  password: yup.string().required('Password is required').min(8, 'Minimum 8 characters')
});

// Define FormValues
type FormValues = yup.InferType<typeof validationSchema>;

// Define the default values
const defaultValues = (): DefaultValues<FormValues> => ({
  password: ''
});

// The nested component.
const PasswordField = () => {
  return <FieldPasswordValidation<FormValues> name="password" />;
};

const FieldPasswordValidationWithProvider = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues()
  });

  const { handleSubmit } = methods;

  const handleOnSubmit: SubmitHandler<FormValues> = values => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(handleOnSubmit)}>
        <PasswordField />

        <Button type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default FieldPasswordValidationWithProvider;
