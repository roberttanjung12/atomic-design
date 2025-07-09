import { render, screen } from '@testing-library/react';
import Drogo from '@/@dront/components/Drogo';

describe('Drogo', () => {
  it('renders full variant correctly', () => {
    render(<Drogo variant="full" size={500} mode="dark" />);
    const redCross = screen.getByRole('img', { name: /DRONT/i }).previousSibling as HTMLDivElement;
    const drontHead = screen.getByRole('img', { name: /DRONT/i });

    expect(redCross).toBeVisible();
    expect(drontHead).toBeVisible();
    expect(drontHead).toHaveAttribute('src', '/drac/dront-wolf-dark.svg');
    expect(drontHead.parentElement).toHaveStyle(`width: 500px`);
    expect(drontHead).toHaveStyle(`width: 500px`);
  });

  it('renders light mode correctly', () => {
    render(<Drogo variant="full" size={250} mode="light" />);
    const drontHead = screen.getByRole('img', { name: /DRONT/i });

    expect(drontHead).toHaveAttribute('src', '/drac/dront-wolf-light.svg');
  });

  it('renders dark mode correctly', () => {
    render(<Drogo variant="full" size={250} mode="dark" />);
    const drontHead = screen.getByRole('img', { name: /DRONT/i });

    expect(drontHead).toHaveAttribute('src', '/drac/dront-wolf-dark.svg');
  });

  it('applies correct animation to RedCross', () => {
    render(<Drogo variant="box" size={250} />);
  });

  it('defaults to light mode if mode prop is not provided', () => {
    render(<Drogo variant="full" size={250} />);
    const drontHead = screen.getByRole('img', { name: /DRONT/i });

    expect(drontHead).toHaveAttribute('src', '/drac/dront-wolf-light.svg');
  });
});
