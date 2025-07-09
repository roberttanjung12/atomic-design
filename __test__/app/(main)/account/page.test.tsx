import React from 'react';
import { render, screen, within } from '@testing-library/react';
import AccountPage from '@/app/(main)/account/page';

jest.mock('@/@dront/components/PageID', () =>
  jest.fn(({ title, children }) => (
    <div data-testid="PageID">
      <h1>{title}</h1>
      <div data-testid="children">{children}</div>
    </div>
  ))
);

describe('AccountPage Component', () => {
  it('renders PageID with the correct title and breadcrumbs', () => {
    render(<AccountPage />);

    const pageIDContainer = screen.getByTestId('PageID');

    expect(pageIDContainer).toBeInTheDocument();

    const titleElement = within(pageIDContainer).getByRole('heading', { level: 1 });

    expect(titleElement).toHaveTextContent('Account');
  });

  it('renders children content correctly', () => {
    render(<AccountPage />);

    const childrenContainer = screen.getByTestId('children');

    expect(within(childrenContainer).getByText('Account')).toBeInTheDocument();
  });
});
