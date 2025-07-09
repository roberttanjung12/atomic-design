import { useMediaQuery } from '@mui/material';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/@dront/layouts/Landing/Header';
import { useAuthentication } from '@/context/AuthenticationProvider';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn()
}));

jest.mock('@/context/AuthenticationProvider', () => ({
  useAuthentication: jest.fn()
}));

describe('Header Component', () => {
  const mockHandleToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the logo correctly', () => {
    (useAuthentication as jest.Mock).mockReturnValue({ user: null });
    render(<Header handleToggle={mockHandleToggle} />);

    const logo = screen.getByAltText('DRONT V5');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo/dront.svg');
  });

  it('renders navigation links on large screens', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);
    (useAuthentication as jest.Mock).mockReturnValue({ user: null });

    render(<Header handleToggle={mockHandleToggle} />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  it('renders "Dashboard" link when user is authenticated', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);
    (useAuthentication as jest.Mock).mockReturnValue({ user: { name: 'Test User' } });

    render(<Header handleToggle={mockHandleToggle} />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.queryByText(/login/i)).not.toBeInTheDocument();
  });

  it('hides navigation links on small screens', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    render(<Header handleToggle={mockHandleToggle} />);
    expect(screen.queryByText(/home/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/about/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/login/i)).not.toBeInTheDocument();
  });

  it('calls handleToggle when the menu button is clicked', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    render(<Header handleToggle={mockHandleToggle} />);
    const menuButton = screen.getByRole('button', { name: /open drawer/i });

    fireEvent.click(menuButton);
    expect(mockHandleToggle).toHaveBeenCalledTimes(1);
  });
});
