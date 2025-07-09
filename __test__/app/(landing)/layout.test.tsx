import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingLayout from '@/@dront/layouts/Landing';
import RootLayout from '@/app/(landing)/layout';

jest.mock('@/@dront/layouts/Landing', () => {
  return jest.fn(({ children }) => <div data-testid="mock-landing-layout">{children}</div>);
});

jest.mock('@/@dront/authentication/AuthenticationGuard', () => {
  return jest.fn(({ children }) => <div data-testid="mock-auth-guard">{children}</div>);
});

describe('RootLayout Component', () => {
  it('renders the LandingLayout within the AuthenticationGuard', () => {
    render(<RootLayout children={<div>Test Child</div>} />);

    expect(screen.getByTestId('mock-auth-guard')).toBeInTheDocument();
    expect(screen.getByTestId('mock-landing-layout')).toBeInTheDocument();
  });

  it('passes children to the LandingLayout', () => {
    render(<RootLayout children={<span>Test Children</span>} />);

    expect(screen.getByText('Test Children')).toBeInTheDocument();

    expect(LandingLayout).toHaveBeenCalledWith(
      expect.objectContaining({ children: <span>Test Children</span> }),
      undefined
    );
  });
});
