import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import MainContainer from '@/@dront/layouts/Main/Container';
import { useMainLayout } from '@/context/MainLayoutProvider';
import { useSelector } from '@/store/hooks';

jest.mock('@/context/MainLayoutProvider');
jest.mock('@/store/hooks');
jest.mock('@mui/material/useMediaQuery');

describe('MainContainer', () => {
  const theme = createTheme();

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({ isContainerFull: false });
    (useMediaQuery as jest.Mock).mockReturnValue(true);
  });

  it('renders children', () => {
    (useMainLayout as jest.Mock).mockReturnValue({ breadcrumbs: undefined });

    render(
      <ThemeProvider theme={theme}>
        <MainContainer>
          <div>Test Child</div>
        </MainContainer>
      </ThemeProvider>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('renders breadcrumbs when available', () => {
    (useMainLayout as jest.Mock).mockReturnValue({
      breadcrumbs: { title: 'Test Title', routes: [{ label: 'Home', href: '/' }] }
    });

    render(
      <ThemeProvider theme={theme}>
        <MainContainer>
          <div>Test Child</div>
        </MainContainer>
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('does not render breadcrumbs when not available', () => {
    (useMainLayout as jest.Mock).mockReturnValue({ breadcrumbs: undefined });

    render(
      <ThemeProvider theme={theme}>
        <MainContainer>
          <div>Test Child</div>
        </MainContainer>
      </ThemeProvider>
    );
  });

  it('sets max width to 100% when isContainerFull is true', () => {
    (useSelector as jest.Mock).mockReturnValue({ isContainerFull: true });

    render(
      <ThemeProvider theme={theme}>
        <MainContainer>
          <div>Test Child</div>
        </MainContainer>
      </ThemeProvider>
    );
  });
});
