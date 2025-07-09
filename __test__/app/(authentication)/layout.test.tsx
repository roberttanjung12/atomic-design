import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/(authentication)/layout';

jest.mock('@/@dront/authentication/AuthenticationGuard', () => ({
  __esModule: true,
  default: ({ protectionLevel, children }: { protectionLevel: string; children: React.ReactNode }) => (
    <div data-testid="auth-guard" data-protection-level={protectionLevel}>
      {children}
    </div>
  )
}));

describe('RootLayout Component', () => {
  test('renders children inside AuthenticationGuard', () => {
    const childrenContent = 'Child Content';

    render(<RootLayout>{childrenContent}</RootLayout>);

    const authGuard = screen.getByTestId('auth-guard');

    expect(authGuard).toBeInTheDocument();
    expect(authGuard).toHaveAttribute('data-protection-level', 'unauthenticated');

    expect(authGuard).toHaveTextContent(childrenContent);
  });
});
