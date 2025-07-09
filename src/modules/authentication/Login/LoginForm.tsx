import { useCallback, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, FormGroup, FormControlLabel, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { DynamicAlert, Field } from '@/@dront/components';
import environment from '@/configurations/environment';
import { useAuthentication } from '@/context/AuthenticationProvider';

const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email address').required('Email is required'),
  password: yup.string().required('Password is required')
});

interface LoginFormInterface {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  const handleRememberMe = useCallback(() => {
    setRememberMe(prevRememberMe => !prevRememberMe);
  }, []);

  const router = useRouter();

  const { FieldPassword, FieldText } = Field;

  const { error, loading, login, user } = useAuthentication();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInterface>({
    defaultValues: {
      email: environment.development.email,
      password: environment.development.password
    },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: LoginFormInterface) => {
    await login({ ...data, rememberMe });

    if (user) {
      router.push(`/dashboard/overview`);
    }
  };

  return (
    <Stack>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <DynamicAlert message={error} />

        <FieldText control={control} errors={errors} label="Email" name="email" rules={{ required: true }} />

        <FieldPassword control={control} errors={errors} label="Password" name="password" rules={{ required: true }} />

        <Stack justifyContent="space-between" direction="row" alignItems="center" mb={3}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={rememberMe} onChange={handleRememberMe} />}
              label="Remember Me"
            />
          </FormGroup>

          <Typography
            component={Link}
            href="/forgot-password"
            fontWeight="500"
            sx={{ textDecoration: 'none', color: 'primary.main' }}
          >
            Forgot Password ?
          </Typography>
        </Stack>

        <Button color="primary" variant="contained" size="large" fullWidth type="submit" loading={loading}>
          Login
        </Button>
      </form>
    </Stack>
  );
};

export default LoginForm;
