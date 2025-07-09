import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Profile from '@/@dront/layouts/Main/Header/Profile';
import { useAuthentication } from '@/context/AuthenticationProvider';

jest.mock('@/context/AuthenticationProvider', () => ({
  useAuthentication: jest.fn()
}));

describe('Profile Component', () => {
  const mockLogout = jest.fn();

  beforeEach(() => {
    (useAuthentication as jest.Mock).mockReturnValue({
      logout: mockLogout,
      user: {
        name: 'John Doe',
        title: 'Software Engineer',
        avatarUrl: 'https://example.com/avatar.jpg'
      }
    });
  });

  test('renders profile component', () => {
    render(<Profile />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  test('opens profile menu on icon button click', async () => {
    render(<Profile />);

    fireEvent.click(screen.getByLabelText('profile'));

    await waitFor(() => screen.getByText('John Doe'));

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  test('logs out when clicking logout button', async () => {
    render(<Profile />);

    fireEvent.click(screen.getByLabelText('profile'));

    fireEvent.click(screen.getByRole('button', { name: /logout/i }));

    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
