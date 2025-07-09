import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import environment from '@/configurations/environment';
import { useAuthentication } from '@/context/AuthenticationProvider';
import LoginForm from '@/modules/authentication/Login/LoginForm';

jest.mock('@/context/AuthenticationProvider', () => ({
  useAuthentication: jest.fn()
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  }))
}));

describe('LoginForm Component', () => {
  const mockLogin = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    (useAuthentication as jest.Mock).mockReturnValue({
      error: null,
      loading: false,
      login: mockLogin,
      user: null
    });

    jest.mock('next/navigation', () => ({
      useRouter: jest.fn(() => ({
        push: mockPush
      }))
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form correctly', () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /remember me/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /forgot password/i })).toBeInTheDocument();
  });

  it('calls login with correct data when form is submitted', async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/^password$/i);

    fireEvent.change(emailInput, { target: { value: environment.development.email } });
    fireEvent.change(passwordInput, { target: { value: environment.development.password } });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({
        email: environment.development.email,
        password: environment.development.password,
        rememberMe: true
      });
    });
  });

  it('toggles "Remember Me" checkbox', () => {
    render(<LoginForm />);

    const rememberMeCheckbox = screen.getByLabelText(/remember me/i);

    expect(rememberMeCheckbox).toBeChecked();

    fireEvent.click(rememberMeCheckbox);
    expect(rememberMeCheckbox).not.toBeChecked();

    fireEvent.click(rememberMeCheckbox);
    expect(rememberMeCheckbox).toBeChecked();
  });

  it('displays error message from the authentication context', () => {
    (useAuthentication as jest.Mock).mockReturnValue({
      error: 'Invalid credentials',
      loading: false,
      login: mockLogin,
      user: null
    });

    render(<LoginForm />);

    expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
  });
});
