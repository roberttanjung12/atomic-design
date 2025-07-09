import { useForm, type Control } from 'react-hook-form';
import { render, screen, fireEvent } from '@testing-library/react';
import FieldPassword from '@/@dront/components/Field/FieldPassword';

interface TestFormValues {
  password: string;
}

const renderWithForm = (defaultValues = { password: '' }, errors = {}) => {
  const Wrapper = () => {
    const { control } = useForm<TestFormValues>({
      defaultValues
    });

    return <FieldPassword name="password" label="Password" control={control as Control<any>} errors={errors} />;
  };

  return render(<Wrapper />);
};

describe('FieldPassword Component', () => {
  test('renders with label and placeholder', () => {
    renderWithForm();

    expect(screen.getByText(/password/i)).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText(/password/i);

    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('placeholder', 'Password');
  });

  test('toggles password visibility when the icon button is clicked', () => {
    renderWithForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    const toggleButton = screen.getByRole('button', { name: /show password/i });

    expect(passwordInput).toHaveAttribute('type', 'password');

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('displays the error message when errors are present', () => {
    const errors = { password: { message: 'Password is required' } };

    renderWithForm(undefined, errors);

    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });

  test('does not display an error message if no errors are provided', () => {
    renderWithForm();

    expect(screen.queryByText(/password is required/i)).not.toBeInTheDocument();
  });

  test('handles value changes correctly', () => {
    renderWithForm();

    const passwordInput = screen.getByPlaceholderText(/password/i);

    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    expect(passwordInput).toHaveValue('test123');
  });

  test('renders custom aria-label based on the label prop', () => {
    renderWithForm();

    const toggleButton = screen.getByRole('button', { name: /show password/i });

    expect(toggleButton).toHaveAttribute('aria-label', 'Show password');

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-label', 'Hide password');
  });

  test('automatically focuses the input field when autoFocus is true', () => {
    const Wrapper = () => {
      const { control } = useForm<TestFormValues>({
        defaultValues: { password: '' }
      });

      return <FieldPassword name="password" label="Password" control={control as Control<any>} autoFocus={true} />;
    };

    render(<Wrapper />);

    const passwordInput = screen.getByPlaceholderText(/password/i);

    expect(passwordInput).toHaveFocus();
  });

  test('does not focus the input field when autoFocus is false or not provided', () => {
    const Wrapper = () => {
      const { control } = useForm<TestFormValues>({
        defaultValues: { password: '' }
      });

      return <FieldPassword name="password" label="Password" control={control as Control<any>} autoFocus={false} />;
    };

    render(<Wrapper />);

    const passwordInput = screen.getByPlaceholderText(/password/i);

    expect(passwordInput).not.toHaveFocus();
  });
});
