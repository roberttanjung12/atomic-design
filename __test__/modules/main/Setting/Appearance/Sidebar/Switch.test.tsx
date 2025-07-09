import { Provider } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import { render, screen, fireEvent } from '@testing-library/react';
import SidebarSwitch from '@/modules/main/Setting/Appearance/Sidebar/Switch';
import { setSidebar, toggleSidebar } from '@/store/slice/appearance';
import { store } from '@/store/store';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn()
}));

const mockDispatch = jest.fn();

jest.mock('@/store/hooks', () => ({
  useDispatch: () => mockDispatch
}));

describe('SidebarSwitch Component', () => {
  const options = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' }
  ];

  beforeEach(() => {
    mockDispatch.mockClear();
    (useMediaQuery as jest.Mock).mockReturnValue(false);
  });

  it('should render SidebarSwitch component with options', () => {
    render(
      <Provider store={store}>
        <SidebarSwitch type="variant" value="light" options={options} />
      </Provider>
    );

    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
  });

  it('should dispatch setSidebar action when option is clicked', () => {
    render(
      <Provider store={store}>
        <SidebarSwitch type="variant" value="light" options={options} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Dark'));

    expect(mockDispatch).toHaveBeenCalledWith(setSidebar('variant', 'dark'));
  });

  it('should dispatch toggleSidebar action when type is "type"', () => {
    render(
      <Provider store={store}>
        <SidebarSwitch type="type" value={false} options={options} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Dark'));

    expect(mockDispatch).toHaveBeenCalledWith(toggleSidebar());
  });

  it('should update maxWidth based on breakpoint', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    const { container } = render(
      <Provider store={store}>
        <SidebarSwitch type="variant" value="light" options={options} />
      </Provider>
    );

    expect(container.firstChild).toHaveStyle('max-width: 100%');

    (useMediaQuery as jest.Mock).mockReturnValue(true);

    const { container: mobileContainer } = render(
      <Provider store={store}>
        <SidebarSwitch type="variant" value="light" options={options} />
      </Provider>
    );

    expect(mobileContainer.firstChild).toHaveStyle('max-width: 350px');
  });
});
