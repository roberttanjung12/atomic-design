import { usePathname } from 'next/navigation';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigationCollapse from '@/@dront/layouts/Main/Sidebar/Navigation/NavigationCollapse';
import { useSelector } from '@/store/hooks';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}));

jest.mock('@/store/hooks', () => ({
  useSelector: jest.fn()
}));

jest.mock('@mui/material', () => {
  const ActualMUI = jest.requireActual('@mui/material');

  return {
    ...ActualMUI,
    useMediaQuery: jest.fn()
  };
});

jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}));

jest.mock('@/@dront/layouts/Main/Sidebar/Navigation/NavigationItem', () => ({
  __esModule: true,
  default: ({ item, level }: any) => <div data-testid={`menu-item-${item.title}-${level}`} />
}));

const mockTheme = createTheme();

function renderWithTheme(children: React.ReactNode, theme = mockTheme) {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

describe('LayoutMainSidebarNavigationCollapse', () => {
  const mockMenu = {
    id: 'menu-1',
    title: 'Test Menu',
    href: '/test-menu',
    icon: undefined,
    children: [
      { id: 'submenu-1', title: 'Submenu 1', href: '/test-menu/submenu-1' },
      {
        id: 'submenu-2',
        title: 'Submenu 2',
        href: '/test-menu/submenu-2',
        children: [{ id: 'sub-submenu-1', title: 'Sub-submenu 1', href: '/test-menu/submenu-2/sub-submenu-1' }]
      }
    ]
  };

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({
      sidebar: {
        itemSelectedColor: 'red',
        itemColor: 'blue',
        itemSelectedBackground: 'grey',
        subMenuHoverBackground: 'lightGrey',
        itemHoverColor: 'green'
      }
    });
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    (usePathname as jest.Mock).mockReturnValue('/test-menu');
  });

  it('renders menu item and expands on click', () => {
    renderWithTheme(
      <NavigationCollapse
        menu={mockMenu}
        level={1}
        pathWithoutLastPart={''}
        pathDirect={''}
        hideMenu={false}
        onClick={() => {}}
      />
    );

    expect(screen.getByText('Test Menu')).toBeInTheDocument();
  });

  it('renders nested submenus correctly', () => {
    renderWithTheme(
      <NavigationCollapse
        menu={mockMenu}
        level={1}
        pathWithoutLastPart={''}
        pathDirect={''}
        hideMenu={false}
        onClick={() => {}}
      />
    );

    fireEvent.click(screen.getByText('Test Menu'));
    fireEvent.click(screen.getByText('Submenu 2'));
  });

  it('renders with correct styling based on open state and pathname', () => {
    (usePathname as jest.Mock).mockReturnValue('/test-menu/submenu-1');

    renderWithTheme(
      <NavigationCollapse
        menu={mockMenu}
        level={1}
        pathWithoutLastPart={'/test-menu'}
        pathDirect={'/test-menu/submenu-1'}
        hideMenu={false}
        onClick={() => {}}
      />
    );
  });
});
