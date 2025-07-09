import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import ForgotPassword from '@/modules/authentication/ForgotPassword';

const theme = createTheme({
  palette: {
    error: {
      main: '#f44336'
    }
  }
});

jest.mock('@/modules/authentication/ForgotPassword/ForgotPasswordLayout', () => ({ children }: any) => (
  <div data-testid="mock-layout">{children}</div>
));

jest.mock('@/modules/authentication/ForgotPassword/ForgotPasswordForm', () => () => (
  <div data-testid="mock-form">Forgot Password Form</div>
));

describe('ForgotPassword', () => {
  it('renders the ForgotPasswordLayout and ForgotPasswordForm components', () => {
    render(
      <ThemeProvider theme={theme}>
        <ForgotPassword />
      </ThemeProvider>
    );

    const layout = screen.getByTestId('mock-layout');

    expect(layout).toBeInTheDocument();

    const form = screen.getByTestId('mock-form');

    expect(form).toBeInTheDocument();
    expect(layout).toContainElement(form);
  });
});
