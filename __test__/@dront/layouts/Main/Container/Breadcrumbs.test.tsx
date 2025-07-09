import React from 'react';
import { render, screen } from '@testing-library/react';
import ContainerBreadcrumbs from '@/@dront/layouts/Main/Container/Breadcrumbs';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => key
  })
}));

describe('ContainerBreadcrumbs', () => {
  it('renders the title and breadcrumbs correctly', () => {
    const mockProps = {
      title: 'pageTitle',
      routes: [{ label: 'Home', href: '/' }, { label: 'Section', href: '/section' }, { label: 'Current Page' }]
    };

    render(<ContainerBreadcrumbs {...mockProps} />);

    expect(screen.getByText('pageTitle')).toBeInTheDocument();

    const homeLink = screen.getByText('Home').closest('a');
    const sectionLink = screen.getByText('Section').closest('a');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(sectionLink).toHaveAttribute('href', '/section');

    const currentPage = screen.getByText('Current Page');

    expect(currentPage).toBeInTheDocument();
    expect(currentPage.tagName).toBe('H6');
  });

  it('renders correctly with empty routes', () => {
    const mockProps = {
      title: 'pageTitle',
      routes: []
    };

    render(<ContainerBreadcrumbs {...mockProps} />);

    expect(screen.getByText('pageTitle')).toBeInTheDocument();

    expect(screen.queryByRole('link')).toBeNull();
  });

  it('renders correctly when routes is undefined', () => {
    const mockProps = {
      title: 'pageTitle',
      routes: undefined
    };

    render(<ContainerBreadcrumbs {...mockProps} />);

    expect(screen.getByText('pageTitle')).toBeInTheDocument();

    expect(screen.queryByRole('link')).toBeNull();
  });
});
