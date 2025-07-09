import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import Container from '@/modules/main/Setting/Appearance/Container';
import { useSelector, useDispatch } from '@/store/hooks';
import { toggleLayout } from '@/store/slice/appearance';

const theme = createTheme({});

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn()
}));

jest.mock('@/store/hooks', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

jest.mock('@/store/slice/appearance', () => ({
  toggleLayout: jest.fn()
}));

describe('Container Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useMediaQuery as jest.Mock).mockReturnValue(true);
  });

  it('renders the component with the correct title', () => {
    (useSelector as jest.Mock).mockReturnValue({ appearance: { isContainerFull: true } });
    render(
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /Container/i, level: 6 })).toBeInTheDocument();
  });

  it('renders ToggleButtonGroup with correct initial value and dispatches action on change', () => {
    (useSelector as jest.Mock).mockReturnValue({ appearance: { isContainerFull: false } });

    render(
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    );

    const toggleButtons = screen.getAllByRole('button');

    expect(toggleButtons[1]).toHaveAttribute('aria-pressed', 'false');
    expect(toggleButtons[0]).toHaveAttribute('aria-pressed', 'false');

    fireEvent.click(toggleButtons[0]);

    expect(mockDispatch).toHaveBeenCalledWith(toggleLayout());
  });

  it('renders correctly with lgUp as false', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    (useSelector as jest.Mock).mockReturnValue({ appearance: { isContainerFull: true } });
    render(
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /Container/i, level: 6 })).toBeInTheDocument();
  });
});
