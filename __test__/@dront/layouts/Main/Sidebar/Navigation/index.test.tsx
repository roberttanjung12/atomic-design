import { usePathname } from 'next/navigation';
import { useMediaQuery } from '@mui/material';
import { render } from '@testing-library/react';
import SidebarNavigation from '@/@dront/layouts/Main/Sidebar/Navigation';
import NavigationCollapse from '@/@dront/layouts/Main/Sidebar/Navigation/NavigationCollapse';
import NavigationGroup from '@/@dront/layouts/Main/Sidebar/Navigation/NavigationGroup';
import NavigationItem from '@/@dront/layouts/Main/Sidebar/Navigation/NavigationItem';
import { useSelector, useDispatch } from '@/store/hooks';
import { toggleMobileSidebar } from '@/store/slice/appearance';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}));

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn()
}));

jest.mock('@/store/hooks', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

jest.mock('@/store/slice/appearance', () => ({
  toggleMobileSidebar: jest.fn()
}));

jest.mock('@/@dront/layouts/Main/Sidebar/Navigation/NavigationCollapse');
jest.mock('@/@dront/layouts/Main/Sidebar/Navigation/NavigationGroup');
jest.mock('@/@dront/layouts/Main/Sidebar/Navigation/NavigationItem');

jest.mock('@/configurations/sidebar-navigation', () => [
  { subheader: 'Group 1' },
  { id: 'item1', href: '/link1', title: 'Item 1' },
  {
    id: 'item2',
    href: '/link2',
    title: 'Item 2',
    children: [{ id: 'subitem1', href: '/link2/sublink1', title: 'Subitem 1' }]
  }
]);

describe('SidebarNavigation Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (usePathname as jest.Mock).mockReturnValue('/link1');
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    (useSelector as jest.Mock).mockReturnValue({
      appearance: {
        sidebar: {
          isCollapse: false,
          isHover: false
        }
      }
    });

    (NavigationCollapse as jest.Mock).mockClear();
    (NavigationGroup as jest.Mock).mockClear();
    (NavigationItem as jest.Mock).mockClear();
  });

  it('renders navigation items correctly', () => {
    render(<SidebarNavigation />);

    expect(NavigationGroup).toHaveBeenCalledWith({ item: { subheader: 'Group 1' }, hideMenu: undefined }, undefined);
    expect(NavigationItem).toHaveBeenCalledWith(
      {
        item: { id: 'item1', href: '/link1', title: 'Item 1' },
        hideMenu: undefined,
        level: undefined,
        onClick: expect.any(Function),
        pathDirect: '/link1'
      },
      undefined
    );
    expect(NavigationCollapse).toHaveBeenCalledWith(
      {
        menu: {
          id: 'item2',
          href: '/link2',
          title: 'Item 2',
          children: [{ id: 'subitem1', href: '/link2/sublink1', title: 'Subitem 1' }]
        },
        hideMenu: undefined,
        level: 1,
        onClick: expect.any(Function),
        pathDirect: '/link1',
        pathWithoutLastPart: ''
      },
      undefined
    );
  });

  it('dispatches toggleMobileSidebar when an item is clicked (lgUp=false)', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    render(<SidebarNavigation />);

    (NavigationItem as jest.Mock).mock.calls[0][0].onClick();

    expect(mockDispatch).toHaveBeenCalledWith(toggleMobileSidebar());

    (NavigationCollapse as jest.Mock).mock.calls[0][0].onClick();
    expect(mockDispatch).toHaveBeenCalledWith(toggleMobileSidebar());
  });
});
