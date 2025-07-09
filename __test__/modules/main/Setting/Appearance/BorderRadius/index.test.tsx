import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import BorderRadius from '@/modules/main/Setting/Appearance/BorderRadius';
import { useSelector, useDispatch } from '@/store/hooks';
import { setAppearance } from '@/store/slice/appearance';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn()
}));

jest.mock('@/store/hooks', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

const theme = createTheme({});

describe('BorderRadius Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as jest.Mock).mockReturnValue({ borderRadius: 7 });
    (useMediaQuery as jest.Mock).mockReturnValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the slider and label correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <BorderRadius />
      </ThemeProvider>
    );

    expect(screen.getByRole('slider')).toBeInTheDocument();
    expect(screen.getByText('Border Radius')).toBeInTheDocument();
  });

  it('dispatches setAppearance action on slider change', async () => {
    render(
      <ThemeProvider theme={theme}>
        <BorderRadius />
      </ThemeProvider>
    );

    const slider = screen.getByRole('slider');

    fireEvent.change(slider, { target: { value: 10 } });

    expect(mockDispatch).toHaveBeenCalledWith(setAppearance('borderRadius', 10));
  });

  it('renders with correct initial value from store', () => {
    (useSelector as jest.Mock).mockReturnValue({ borderRadius: 12 });

    render(
      <ThemeProvider theme={theme}>
        <BorderRadius />
      </ThemeProvider>
    );

    const slider = screen.getByRole('slider');

    expect(slider).toHaveValue('12');
  });

  it('renders correctly with lgUp false', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    render(
      <ThemeProvider theme={theme}>
        <BorderRadius />
      </ThemeProvider>
    );

    expect(screen.getByRole('slider')).toBeInTheDocument();
  });
});
