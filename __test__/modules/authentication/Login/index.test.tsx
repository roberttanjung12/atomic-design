import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import Login from '@/modules/authentication/Login';

const theme = createTheme({
  palette: {
    error: {
      main: '#f44336'
    }
  }
});

jest.mock('@/modules/authentication/Login/LoginForm', () => () => <div data-testid="mock-login-form">Login Form</div>);
jest.mock('@/modules/authentication/Login/LoginLayout', () => ({ children }: { children: React.ReactNode }) => (
  <div data-testid="mock-login-layout">{children}</div>
));

describe('Login', () => {
  it('renders LoginLayout and LoginForm correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );

    const layoutElement = screen.getByTestId('mock-login-layout');

    expect(layoutElement).toBeInTheDocument();

    const formElement = screen.getByTestId('mock-login-form');

    expect(formElement).toBeInTheDocument();

    expect(layoutElement).toContainElement(formElement);
  });

  it('renders LoginForm with correct content', () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );

    const formElement = screen.getByTestId('mock-login-form');

    expect(formElement).toHaveTextContent('Login Form');
  });
});
