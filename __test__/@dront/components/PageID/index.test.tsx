import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageID from '@/@dront/components/PageID';
import { useMainLayout } from '@/context/MainLayoutProvider';

jest.mock('@/configurations/environment', () => ({
  application: {
    name: 'TestApp',
    description: 'Test Description',
    author: 'Test Author',
    keywords: 'test, app',
    publisher: 'Test Publisher',
    robots: 'index,follow',
    canonical: 'https://example.com'
  }
}));

jest.mock('@/context/MainLayoutProvider', () => ({
  useMainLayout: jest.fn()
}));

describe('PageID Component', () => {
  const setBreadcrumbsMock = jest.fn();

  beforeEach(() => {
    (useMainLayout as jest.Mock).mockReturnValue({
      setBreadcrumbs: setBreadcrumbsMock
    });
    jest.clearAllMocks();
  });

  test('renders meta tags with default values', () => {
    render(<PageID title="Home Page">Test Content</PageID>);

    expect(document.title).toBe('TestApp | Home Page');
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Test Description');
    expect(document.querySelector('meta[name="author"]')).toHaveAttribute('content', 'Test Author');
    expect(document.querySelector('meta[name="keywords"]')).toHaveAttribute('content', 'test, app');
    expect(document.querySelector('meta[name="publisher"]')).toHaveAttribute('content', 'Test Publisher');
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'index,follow');
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://example.com');
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('renders custom metadata when provided', () => {
    render(
      <PageID
        title="Custom Page"
        description="Custom Description"
        author="Custom Author"
        keywords="custom, metadata"
        publisher="Custom Publisher"
        robots="noindex,nofollow"
        canonical="https://custom.com"
      >
        Custom Content
      </PageID>
    );

    expect(document.title).toBe('TestApp | Custom Page');
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Custom Description');
    expect(document.querySelector('meta[name="author"]')).toHaveAttribute('content', 'Custom Author');
    expect(document.querySelector('meta[name="keywords"]')).toHaveAttribute('content', 'custom, metadata');
    expect(document.querySelector('meta[name="publisher"]')).toHaveAttribute('content', 'Custom Publisher');
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://custom.com');
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });

  test('renders title with only application name when no title is provided', () => {
    render(<PageID>Content without title</PageID>);

    expect(document.title).toBe('TestApp');
    expect(screen.getByText('Content without title')).toBeInTheDocument();
  });

  test('calls setBreadcrumbs when breadcrumbs are provided', () => {
    const breadcrumbs = {
      title: 'Breadcrumb Title',
      routes: [
        { label: 'Home', href: '/' },
        { label: 'Page', href: '/page' }
      ]
    };

    render(
      <PageID title="Page Title" breadcrumbs={breadcrumbs}>
        Breadcrumb Content
      </PageID>
    );

    expect(setBreadcrumbsMock).toHaveBeenCalledWith(breadcrumbs);
    expect(screen.getByText('Breadcrumb Content')).toBeInTheDocument();
  });

  test('does not call setBreadcrumbs when breadcrumbs are not provided', () => {
    render(<PageID title="No Breadcrumbs">No Breadcrumbs Content</PageID>);
    expect(setBreadcrumbsMock).not.toHaveBeenCalled();
    expect(screen.getByText('No Breadcrumbs Content')).toBeInTheDocument();
  });
});
