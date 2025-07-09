import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import ForgotPasswordForm from '@/modules/authentication/ForgotPassword/ForgotPasswordForm';

const theme = createTheme({
  palette: {
    error: {
      main: '#f44336'
    }
  }
});

jest.mock('@/@dront/components', () => ({
  Field: {
    FieldText: ({ errors, label, name }: any) => (
      <div>
        <input name={name} aria-label={label} />
        {errors[name] && <span>{errors[name].message}</span>}
      </div>
    )
  }
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  }))
}));

describe('ForgotPasswordForm', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.mock('next/navigation', () => ({
      useRouter: jest.fn(() => ({
        push: mockPush
      }))
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders the form with input fields and buttons', () => {
    render(
      <ThemeProvider theme={theme}>
        <ForgotPasswordForm />
      </ThemeProvider>
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Forgot Password' })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Back to Login' })).toBeInTheDocument();
  });

  it('navigates to login page when "Back to Login" is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <ForgotPasswordForm />
      </ThemeProvider>
    );

    const backToLoginButton = screen.getByRole('link', { name: 'Back to Login' });

    fireEvent.click(backToLoginButton);

    expect(backToLoginButton).toHaveAttribute('href', '/login');
  });
});
