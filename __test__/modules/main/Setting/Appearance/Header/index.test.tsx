import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/modules/main/Setting/Appearance/Header';
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

describe('Header Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as jest.Mock).mockReturnValue({ headerHeight: 75 });
    (useMediaQuery as jest.Mock).mockReturnValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the header height slider and label', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByRole('slider')).toBeInTheDocument();
    expect(screen.getByText('Header Height')).toBeInTheDocument();
  });

  it('dispatches setAppearance action on slider change', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const slider = screen.getByRole('slider');

    fireEvent.change(slider, { target: { value: 80 } });

    expect(mockDispatch).toHaveBeenCalledWith(setAppearance('headerHeight', 80));
  });

  it('renders with correct initial value from store', () => {
    (useSelector as jest.Mock).mockReturnValue({ headerHeight: 60 });

    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const slider = screen.getByRole('slider');

    expect(slider).toHaveValue('60');
  });

  it('renders correctly with lgUp false', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByRole('slider')).toBeInTheDocument();
  });
});
