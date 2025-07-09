import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '@/@dront/layouts/Main/Header/Search';

// Mock sidebar navigation items
jest.mock('@/configurations/sidebar-navigation', () => [
  {
    title: 'Home',
    id: '1',
    subheader: '',
    children: [],
    href: '/home'
  },
  {
    title: 'About',
    id: '2',
    subheader: '',
    children: [],
    href: '/about'
  },
  {
    title: 'Services',
    id: '3',
    subheader: '',
    children: [
      {
        title: 'Web Development',
        id: '3-1',
        subheader: '',
        children: [],
        href: '/services/web-development'
      },
      {
        title: 'App Development',
        id: '3-2',
        subheader: '',
        children: [],
        href: '/services/app-development'
      }
    ],
    href: ''
  }
]);

describe('Search Component', () => {
  it('renders the search icon button', () => {
    render(<Search />);
    expect(screen.getByLabelText('quick-search')).toBeInTheDocument();
  });

  it('opens and closes the search dialog', () => {
    render(<Search />);

    // Click the search button to open the dialog
    fireEvent.click(screen.getByLabelText('quick-search'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('displays a message if no results are found', () => {
    render(<Search />);

    // Open the search dialog
    fireEvent.click(screen.getByLabelText('quick-search'));

    // Type an unmatched term into the search field
    const searchInput = screen.getByPlaceholderText('Search here');

    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });

    // Verify no results are displayed
    expect(screen.queryByText('Web Development')).not.toBeInTheDocument();
    expect(screen.queryByText('App Development')).not.toBeInTheDocument();
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.queryByText('About')).not.toBeInTheDocument();
  });
});
