import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FieldText from '@/@dront/components/Field/FieldText';

const schema = yup.object().shape({
  email: yup.string().email('Must be a valid email').required('Email is required')
});

const TestForm = ({ autoFocus = false }) => {
  const methods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>
        <FieldText
          autoFocus={autoFocus}
          control={methods.control}
          label="Email"
          name="email"
          errors={methods.formState.errors}
        />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

describe('FieldText Component', () => {
  it('should show validation error when field is touched and not filled', async () => {
    render(<TestForm />);

    const inputElement = screen.getByPlaceholderText('Email');

    fireEvent.blur(inputElement);

    await waitFor(() => screen.getByText(/Email is required/i));

    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });

  it('should show validation error when field is touched and filled with invalid email', async () => {
    render(<TestForm autoFocus={true} />);

    const inputElement = screen.getByPlaceholderText('Email');

    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.blur(inputElement);

    await waitFor(() => screen.getByText(/Must be a valid email/i));

    expect(screen.getByText(/Must be a valid email/i)).toBeInTheDocument();
  });
});
