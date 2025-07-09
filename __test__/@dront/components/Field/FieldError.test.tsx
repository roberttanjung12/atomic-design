import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import FieldError from '@/@dront/components/Field/FieldError';

const theme = createTheme({
  palette: {
    error: {
      main: '#f44336'
    }
  }
});

jest.mock('@mui/material/Box', () => {
  return ({ children = null, ...rest }) => (
    <div data-testid="mock-box" {...rest}>
      {children}
    </div>
  );
});

describe('FieldError Component', () => {
  test('displays error message with the correct color when message is provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <FieldError message="This is an error" />
      </ThemeProvider>
    );

    const errorMessage = screen.getByText('This is an error');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveStyle('color: #f44336');
  });

  test('does not display error message when no message is provided and renders an empty box', () => {
    render(
      <ThemeProvider theme={theme}>
        <FieldError />
      </ThemeProvider>
    );

    const errorMessage = screen.queryByText('This is an error');

    expect(errorMessage).not.toBeInTheDocument();

    const boxElement = screen.getByTestId('mock-box');

    expect(boxElement).toBeInTheDocument();
  });

  test('applies the correct styles when an error message is passed', () => {
    render(
      <ThemeProvider theme={theme}>
        <FieldError message="Another error" />
      </ThemeProvider>
    );

    const errorMessage = screen.getByText('Another error');

    expect(errorMessage).toHaveStyle('color: #f44336');
  });

  test('renders without crashing when no props are passed', () => {
    render(
      <ThemeProvider theme={theme}>
        <FieldError />
      </ThemeProvider>
    );

    const errorMessage = screen.queryByText('This is an error');

    expect(errorMessage).not.toBeInTheDocument();
  });
});
