import { useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import Appearance from '@/modules/main/Setting/Appearance';
import { resetAppearance } from '@/store/slice/appearance';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

jest.mock('@/modules/main/Setting/Appearance/BorderRadius', () => ({
  __esModule: true,
  default: () => <div data-testid="border-radius" />
}));
jest.mock('@/modules/main/Setting/Appearance/CardShadow', () => ({
  __esModule: true,
  default: () => <div data-testid="card-shadow" />
}));
jest.mock('@/modules/main/Setting/Appearance/Code', () => ({
  __esModule: true,
  default: () => <div data-testid="code" />
}));
jest.mock('@/modules/main/Setting/Appearance/Container', () => ({
  __esModule: true,
  default: () => <div data-testid="container" />
}));
jest.mock('@/modules/main/Setting/Appearance/Header', () => ({
  __esModule: true,
  default: () => <div data-testid="header" />
}));
jest.mock('@/modules/main/Setting/Appearance/Sidebar', () => ({
  __esModule: true,
  default: () => <div data-testid="sidebar" />
}));

jest.mock('@/store/slice/appearance', () => ({
  resetAppearance: jest.fn()
}));

const theme = createTheme({});

describe('Appearance Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as any).mockReturnValue(mockDispatch);
  });

  it('renders all child components and the Reset button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Appearance />
      </ThemeProvider>
    );

    expect(screen.getByTestId('paper')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('container')).toBeInTheDocument();
    expect(screen.getByTestId('card-shadow')).toBeInTheDocument();
    expect(screen.getByTestId('border-radius')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('code')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  });

  it('dispatches resetAppearance when Reset button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <Appearance />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /reset/i }));

    expect(resetAppearance).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(resetAppearance());
  });
});
