import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import LayoutLanding from '@/@dront/layouts/Landing';
import '@testing-library/jest-dom';

jest.mock('@/@dront/layouts/Landing/Header', () => () => <div data-testid="mock-header">Header</div>);
jest.mock('@/@dront/layouts/Landing/Sidebar', () => () => <div data-testid="mock-sidebar">Sidebar</div>);
jest.mock('@/@dront/layouts/Landing/Footer', () => () => <div data-testid="mock-footer">Footer</div>);

// Helper to mock matchMedia
const setupMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });
};

describe('LayoutLanding', () => {
  const theme = createTheme();

  const renderWithProviders = (ui: React.ReactNode) => {
    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  it('correctly adjusts the padding for large screens', () => {
    setupMatchMedia(true);

    renderWithProviders(
      <LayoutLanding>
        <div>Content</div>
      </LayoutLanding>
    );

    const mainContent = screen.getByRole('main');

    expect(mainContent).toHaveStyle('padding-top: 100px');
  });

  it('correctly adjusts the padding for small screens', () => {
    setupMatchMedia(false);

    renderWithProviders(
      <LayoutLanding>
        <div>Content</div>
      </LayoutLanding>
    );

    const mainContent = screen.getByRole('main');

    expect(mainContent).toHaveStyle('padding-top: 80px');
  });

  it('renders header, sidebar, footer, and content correctly', () => {
    setupMatchMedia(true);
    renderWithProviders(
      <LayoutLanding>
        <div>Content</div>
      </LayoutLanding>
    );

    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
