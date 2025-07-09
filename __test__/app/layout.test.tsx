import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';

jest.mock('@/context/AuthenticationProvider', () => ({
  AuthenticationProvider: ({ children }: { children: ReactNode }) => (
    <div data-testid="authentication-provider">{children}</div>
  )
}));

jest.mock('@/store/providers', () => ({
  Providers: ({ children }: { children: ReactNode }) => <div data-testid="providers">{children}</div>
}));

jest.mock('@/app/app', () => ({
  __esModule: true,
  default: ({ children }: { children: ReactNode }) => <div data-testid="dront-application">{children}</div>
}));

jest.mock('nextjs-toploader', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="next-top-loader" />)
}));

describe('RootLayout Component', () => {
  it('renders children within correct providers and includes NextTopLoader', () => {
    const mockChild = <div>Mock Child Content</div>;

    render(<RootLayout children={mockChild} />);

    expect(screen.getByTestId('providers')).toBeInTheDocument();
    expect(screen.getByTestId('authentication-provider')).toBeInTheDocument();
    expect(screen.getByTestId('dront-application')).toBeInTheDocument();
    expect(screen.getByText('Mock Child Content')).toBeInTheDocument();

    expect(screen.getByTestId('next-top-loader')).toBeInTheDocument();
  });

  it('renders basic HTML structure correctly', () => {
    render(<RootLayout children={<div />} />);

    expect(document.documentElement).toBeInTheDocument();
    expect(document.body).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('lang', 'en');
  });
});
