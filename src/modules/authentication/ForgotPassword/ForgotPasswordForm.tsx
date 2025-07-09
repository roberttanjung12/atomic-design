import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Field } from '@/@dront/components';

const schema = yup.object().shape({
  email: yup.string().email('Must be a valid email').required('Email is required')
});

interface ForgotPasswordFormInterface {
  email: string;
}

const ForgotPasswordForm = () => {
  const { FieldText } = Field;

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordFormInterface>({
    defaultValues: {
      email: ''
    },
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  });

  const router = useRouter();

  const onSubmit = (data: ForgotPasswordFormInterface) => {
    if (data) {
      router.push(`/dashboard/overview`);
    }
  };

  return (
    <Stack mt={4} spacing={2}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FieldText control={control} errors={errors} label="Email" name="email" rules={{ required: true }} />

        <Button color="primary" variant="contained" size="large" fullWidth type="submit" sx={{ mt: 2 }}>
          Forgot Password
        </Button>
      </form>

      <Button color="primary" size="large" fullWidth component={Link} href="/login">
        Back to Login
      </Button>
    </Stack>
  );
};

export default ForgotPasswordForm;
