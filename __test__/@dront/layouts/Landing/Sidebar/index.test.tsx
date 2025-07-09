import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '@/@dront/layouts/Landing/Sidebar';

jest.mock('@mui/material', () => {
  const originalModule = jest.requireActual('@mui/material');

  return {
    ...originalModule,
    Drawer: ({ children, open, onClose, sx, ...props }: any) =>
      open ? (
        <div data-testid="mock-drawer" style={{ ...(sx || {}) }} onClick={onClose} {...props}>
          {children}
        </div>
      ) : null
  };
});

describe('Sidebar Component', () => {
  const handleToggleMock = jest.fn();

  it('renders navigation links correctly', () => {
    render(<Sidebar collapse={true} handleToggle={handleToggleMock} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('applies correct styles to the mocked Drawer and buttons', () => {
    render(<Sidebar collapse={true} handleToggle={handleToggleMock} />);

    const loginButton = screen.getByText('Login');

    expect(loginButton).toHaveStyle({
      textTransform: 'uppercase',
      letterSpacing: '3px',
      color: '#FFF'
    });
  });

  it('calls handleToggle when closing the mocked Drawer', () => {
    render(<Sidebar collapse={true} handleToggle={handleToggleMock} />);

    const mockDrawer = screen.getByTestId('mock-drawer');

    fireEvent.click(mockDrawer);

    expect(handleToggleMock).toHaveBeenCalled();
  });

  it('does not render the mocked Drawer when collapse is false', () => {
    render(<Sidebar collapse={false} handleToggle={handleToggleMock} />);

    expect(screen.queryByTestId('mock-drawer')).not.toBeInTheDocument();
  });
});
