import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import CardShadow from '@/modules/main/Setting/Appearance/CardShadow';
import { useSelector, useDispatch } from '@/store/hooks';
import { toggleCardShadow } from '@/store/slice/appearance';

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
  toggleCardShadow: jest.fn()
}));

describe('CardShadow Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useMediaQuery as jest.Mock).mockReturnValue(true);
  });

  it('renders the component with correct title', () => {
    (useSelector as jest.Mock).mockReturnValue({ isCardShadow: true });
    render(
      <ThemeProvider theme={theme}>
        <CardShadow />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /Card Shadow/i, level: 6 })).toBeInTheDocument();
  });

  it('renders ToggleButtonGroup with correct initial value and dispatches action on change', () => {
    (useSelector as jest.Mock).mockReturnValue({ isCardShadow: false });
    render(
      <ThemeProvider theme={theme}>
        <CardShadow />
      </ThemeProvider>
    );

    const toggleButtons = screen.getAllByRole('button');

    expect(toggleButtons[1]).toHaveAttribute('aria-pressed', 'true');
    expect(toggleButtons[0]).toHaveAttribute('aria-pressed', 'false');

    fireEvent.click(toggleButtons[0]);

    expect(mockDispatch).toHaveBeenCalledWith(toggleCardShadow());
  });

  it('renders correctly with lgUp as false', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    (useSelector as jest.Mock).mockReturnValue({ isCardShadow: true });

    render(
      <ThemeProvider theme={theme}>
        <CardShadow />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /Card Shadow/i, level: 6 })).toBeInTheDocument();
  });
});
