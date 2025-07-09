import React from 'react';
import { render, screen, within } from '@testing-library/react';
import MenuPage from '@/app/(main)/setting/access-control/menu/page';

jest.mock('@/@dront/components/PageID', () =>
  jest.fn(({ title, breadcrumbs, children }) => (
    <div data-testid="PageID">
      <h1>{title}</h1>
      <nav>
        {breadcrumbs?.routes.map((route: { href: string; label: string }, index: number) => (
          <a key={index} href={route.href} data-testid="breadcrumb-link">
            {route.label}
          </a>
        ))}
      </nav>
      <div data-testid="children">{children}</div>
    </div>
  ))
);

describe('MenuPage Component', () => {
  it('renders PageID with the correct title and breadcrumbs', () => {
    render(<MenuPage />);

    const pageIDContainer = screen.getByTestId('PageID');

    expect(pageIDContainer).toBeInTheDocument();

    const titleElement = within(pageIDContainer).getByRole('heading', { level: 1 });

    expect(titleElement).toHaveTextContent('Menu');

    const breadcrumbLinks = within(pageIDContainer).getAllByTestId('breadcrumb-link');

    expect(breadcrumbLinks).toHaveLength(3);
    expect(breadcrumbLinks[0]).toHaveTextContent('Settings');
    expect(breadcrumbLinks[0]).toHaveAttribute('href', '#');
    expect(breadcrumbLinks[1]).toHaveTextContent('Access Control');
    expect(breadcrumbLinks[1]).toHaveAttribute('href', '#');
    expect(breadcrumbLinks[2]).toHaveTextContent('Menu');
    expect(breadcrumbLinks[2]).toHaveAttribute('href', '#');
  });

  it('renders children content correctly', () => {
    render(<MenuPage />);

    const childrenContainer = screen.getByTestId('children');

    expect(within(childrenContainer).getByText('Access Control - Menu')).toBeInTheDocument();
  });
});
