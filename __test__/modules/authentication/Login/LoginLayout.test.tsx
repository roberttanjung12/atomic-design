import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import LoginLayout from '@/modules/authentication/Login/LoginLayout';

const theme = createTheme({
  palette: {
    error: {
      main: '#f44336'
    }
  }
});

type DrogoProps = {
  variant: string;
  size: number;
};

jest.mock('@/@dront/components', () => ({
  Drogo: ({ variant, size }: DrogoProps) => (
    <div data-testid="drogo" data-variant={variant} data-size={size}>
      Drogo Component
    </div>
  )
}));

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn()
}));

describe('LoginLayout', () => {
  it('renders children correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginLayout>
          <div>Test Child</div>
        </LoginLayout>
      </ThemeProvider>
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('renders the mocked Drogo logo on small screens', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <LoginLayout>
          <div>Test Child</div>
        </LoginLayout>
      </ThemeProvider>
    );

    const drogo = screen.getByTestId('drogo');

    expect(drogo).toHaveAttribute('data-variant', 'full');
    expect(drogo).toHaveAttribute('data-size', '300');
  });

  it('renders the mocked Drogo logo on large screens', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    render(
      <ThemeProvider theme={theme}>
        <LoginLayout>
          <div>Test Child</div>
        </LoginLayout>
      </ThemeProvider>
    );

    const drogo = screen.getByTestId('drogo');

    expect(drogo).toHaveAttribute('data-variant', 'full');
    expect(drogo).toHaveAttribute('data-size', '600');
  });
});
