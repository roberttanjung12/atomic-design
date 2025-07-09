import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import ForgotPasswordLayout from '@/modules/authentication/ForgotPassword/ForgotPasswordLayout';

const theme = createTheme({
  palette: {
    error: {
      main: '#f44336'
    }
  }
});

jest.mock('@/@dront/components', () => ({
  Drogo: ({ variant, size, mode }: any) => (
    <div
      data-testid="mock-drogo"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: mode === 'dark' ? 'black' : 'white'
      }}
    >
      Mocked Drogo {variant}
    </div>
  )
}));

describe('ForgotPasswordLayout', () => {
  it('renders the layout with the Drogo logo and children content', () => {
    render(
      <ThemeProvider theme={theme}>
        <ForgotPasswordLayout>
          <div data-testid="mock-children">Child Component</div>
        </ForgotPasswordLayout>
      </ThemeProvider>
    );

    const drogoLogo = screen.getByTestId('mock-drogo');

    expect(drogoLogo).toBeInTheDocument();
    expect(drogoLogo).toHaveStyle({ width: '300px', height: '300px', backgroundColor: 'black' });

    expect(screen.getByText('Please enter the email address associated with your account.')).toBeInTheDocument();

    const childComponent = screen.getByTestId('mock-children');

    expect(childComponent).toBeInTheDocument();
    expect(childComponent).toHaveTextContent('Child Component');
  });
});
