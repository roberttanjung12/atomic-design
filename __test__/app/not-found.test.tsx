import { render, screen, fireEvent } from '@testing-library/react';
import NotFound from '@/app/not-found';

describe('NotFound Component', () => {
  it('renders the correct 404 title and message', () => {
    render(<NotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();

    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });

  it('renders the "Go Back to Home" button with correct link', () => {
    render(<NotFound />);

    const button = screen.getByRole('link', { name: /Go Back to Home/i });

    expect(button).toBeInTheDocument();

    expect(button).toHaveAttribute('href', '/');
  });

  it('navigates to the home page when the button is clicked', () => {
    render(<NotFound />);

    const button = screen.getByRole('link', { name: /Go Back to Home/i });

    fireEvent.click(button);

    expect(window.location.pathname).toBe('/');
  });
});
