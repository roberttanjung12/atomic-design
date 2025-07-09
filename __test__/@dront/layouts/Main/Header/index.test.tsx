import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render } from '@testing-library/react';
import MainHeader from '@/@dront/layouts/Main/Header';
import Language from '@/@dront/layouts/Main/Header/Language';
import Mode from '@/@dront/layouts/Main/Header/Mode';
import Notifications from '@/@dront/layouts/Main/Header/Notification';
import Profile from '@/@dront/layouts/Main/Header/Profile';
import Search from '@/@dront/layouts/Main/Header/Search';
import SidebarToggle from '@/@dront/layouts/Main/Header/SidebarToggle';
import { useSelector } from '@/store/hooks';

jest.mock('@/store/hooks');
jest.mock('@/@dront/layouts/Main/Header/Language');
jest.mock('@/@dront/layouts/Main/Header/Mode');
jest.mock('@/@dront/layouts/Main/Header/Notification');
jest.mock('@/@dront/layouts/Main/Header/Profile');
jest.mock('@/@dront/layouts/Main/Header/Search');
jest.mock('@/@dront/layouts/Main/Header/SidebarToggle');

const theme = createTheme({});

describe('MainHeader Component', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({ headerHeight: 70 });
  });

  it('renders all child components', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainHeader />
      </ThemeProvider>
    );

    expect(SidebarToggle).toHaveBeenCalled();
    expect(Search).toHaveBeenCalled();
    expect(Mode).toHaveBeenCalled();
    expect(Language).toHaveBeenCalled();
    expect(Notifications).toHaveBeenCalled();
    expect(Profile).toHaveBeenCalled();
  });

  it('renders without error if headerHeight is undefined', () => {
    (useSelector as jest.Mock).mockReturnValue({});

    render(
      <ThemeProvider theme={theme}>
        <MainHeader />
      </ThemeProvider>
    );
  });
});
