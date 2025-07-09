import { render, screen } from '@testing-library/react';
import NavigationGroup from '@/@dront/layouts/Main/Sidebar/Navigation/NavigationGroup';
import { useSelector } from '@/store/hooks';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}));

jest.mock('@/store/hooks', () => ({
  useSelector: jest.fn()
}));

describe('LayoutMainSidebarNavigationGroup', () => {
  const mockItem = {
    subheader: 'Test Subheader'
  };

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({
      sidebar: { subheaderColor: 'gray' }
    });
  });

  it('renders the subheader with correct text when not hiding menu', () => {
    render(<NavigationGroup item={mockItem} hideMenu={false} />);
    expect(screen.getByText(mockItem.subheader)).toBeInTheDocument();
  });

  it('renders with correct styling based on hideMenu prop', () => {
    const { container } = render(<NavigationGroup item={mockItem} hideMenu={true} />);

    expect(container).toMatchSnapshot();
  });

  it('should apply correct margin when hideMenu is true', () => {
    render(<NavigationGroup item={mockItem} hideMenu={true} />);
  });
});
