'use client';

import FieldTextValidation from '@dront/ui/FieldTextValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import { FormProvider, useForm, type DefaultValues, type SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

// Define the validation schema using yup
const validationSchema = yup.object({
  field: yup.string().required('Field is required')
});

// Define FormValues
type FormValues = yup.InferType<typeof validationSchema>;

// Define the default values
const defaultValues = (): DefaultValues<FormValues> => ({
  field: ''
});

// The nested component.
const TheField = () => {
  return <FieldTextValidation<FormValues> name="field" label="Label" placeholder="Placeholder" />;
};

const FieldTextValidationWithProvider = () => {
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
        <TheField />

        <Button type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default FieldTextValidationWithProvider;
