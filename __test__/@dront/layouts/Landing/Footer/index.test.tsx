import { render, screen } from '@testing-library/react';
import Footer from '@/@dront/layouts/Landing/Footer';

jest.mock('@mui/material', () => {
  const originalModule = jest.requireActual('@mui/material');

  return {
    ...originalModule,
    Box: ({ children, ...props }: any) => <div {...props}>{children}</div>
  };
});

describe('Footer Component', () => {
  it('renders the logo correctly', () => {
    render(<Footer />);
    const logo = screen.getByAltText('DRONT V5');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo/dront.svg');
  });

  it('renders the correct year dynamically', () => {
    const currentYear = new Date().getFullYear();

    render(<Footer />);
    const yearText = screen.getByText(`@ ${currentYear} DRAC`);

    expect(yearText).toBeInTheDocument();
  });
});
