'use client';

import FieldTextValidation from '@dront/ui/FieldTextValidation';
import Button from '@mui/material/Button';
import { useForm, type SubmitHandler } from 'react-hook-form';

// Define FormValues
type FormValues = {
  field: string;
};

const FieldTextValidationBasic = () => {
  const { control, handleSubmit } = useForm<FormValues>();

  const handleOnSubmit: SubmitHandler<FormValues> = values => {
    console.log(values);
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleOnSubmit)}>
      <FieldTextValidation
        name="field"
        label="Label"
        placeholder="Placeholder"
        control={control}
        defaultValue=""
        rules={{
          required: 'Field is required'
        }}
      />

      <Button type="submit" sx={{ mt: 2 }}>
        Submit
      </Button>
    </form>
  );
};

export default FieldTextValidationBasic;
