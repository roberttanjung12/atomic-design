import { Provider } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import SidebarSlider from '@/modules/main/Setting/Appearance/Sidebar/Slider';

const mockStore = configureStore([]);
const mockDispatch = jest.fn();

jest.mock('@/store/hooks', () => ({
  useDispatch: () => mockDispatch
}));

jest.mock('@mui/material', () => {
  const originalModule = jest.requireActual('@mui/material');

  return {
    ...originalModule,
    useMediaQuery: jest.fn(),
    Box: jest.fn(props => <div {...props} />)
  };
});

describe('SidebarSlider', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({});
    jest.clearAllMocks();
  });

  it('renders with maxWidth=350 when lgUp is true', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    render(
      <Provider store={store}>
        <SidebarSlider type="full" value={300} />
      </Provider>
    );
  });

  it('renders with maxWidth="100%" when lgUp is false', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    render(
      <Provider store={store}>
        <SidebarSlider type="full" value={300} />
      </Provider>
    );
  });

  it('renders the slider with the correct props for "full" type', () => {
    render(
      <Provider store={store}>
        <SidebarSlider type="full" value={300} />
      </Provider>
    );

    const slider = screen.getByRole('slider');

    expect(slider).toBeInTheDocument();

    expect(slider).toHaveAttribute('value', '300');
    expect(slider).toHaveAttribute('aria-valuemin', '250');
    expect(slider).toHaveAttribute('aria-valuemax', '500');
  });

  it('renders the slider with the correct props for "mini" type', () => {
    render(
      <Provider store={store}>
        <SidebarSlider type="mini" value={75} />
      </Provider>
    );

    const slider = screen.getByRole('slider');

    expect(slider).toBeInTheDocument();

    expect(slider).toHaveAttribute('value', '75');
    expect(slider).toHaveAttribute('aria-valuemin', '50');
    expect(slider).toHaveAttribute('aria-valuemax', '100');
  });

  it('dispatches the correct action when the slider is changed (full type)', () => {
    render(
      <Provider store={store}>
        <SidebarSlider type="full" value={300} />
      </Provider>
    );

    const slider = screen.getByRole('slider');

    fireEvent.change(slider, { target: { value: 400 } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'appearance/setSidebar',
      payload: { key: 'width', value: 400 }
    });
  });

  it('dispatches the correct action when the slider is changed (mini type)', () => {
    render(
      <Provider store={store}>
        <SidebarSlider type="mini" value={75} />
      </Provider>
    );

    const slider = screen.getByRole('slider');

    fireEvent.change(slider, { target: { value: 80 } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'appearance/setSidebar',
      payload: { key: 'miniWidth', value: 80 }
    });
  });
});
