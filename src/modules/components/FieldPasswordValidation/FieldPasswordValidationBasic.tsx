'use client';

import FieldPasswordValidation from '@dront/ui/FieldPasswordValidation';
import Button from '@mui/material/Button';
import { useForm, type SubmitHandler } from 'react-hook-form';

// Define FormValues
type FormValues = {
  password: string;
};

const FieldPasswordValidationBasic = () => {
  const { control, handleSubmit } = useForm<FormValues>();

  const handleOnSubmit: SubmitHandler<FormValues> = values => {
    console.log(values);
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleOnSubmit)}>
      <FieldPasswordValidation
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Minimum 8 characters'
          }
        }}
      />

      <Button type="submit" sx={{ mt: 2 }}>
        Submit
      </Button>
    </form>
  );
};

export default FieldPasswordValidationBasic;
