import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import SidebarColor from '@/modules/main/Setting/Appearance/Sidebar/Color';
import { setSidebar } from '@/store/slice/appearance';
import { store } from '@/store/store';

const mockDispatch = jest.fn();

jest.mock('@/store/hooks', () => ({
  useDispatch: () => mockDispatch
}));

jest.mock('mui-color-input', () => ({
  MuiColorInput: ({ value, onChange }: any) => <input value={value} onChange={(e: any) => onChange(e.target.value)} />
}));

describe('SidebarColor Component', () => {
  const type = 'background';
  const value = '#FFFFFF';

  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('should render SidebarColor with the given value', () => {
    render(
      <Provider store={store}>
        <SidebarColor type={type} value={value} />
      </Provider>
    );

    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  });

  it('should dispatch setSidebar action when color is changed', () => {
    render(
      <Provider store={store}>
        <SidebarColor type={type} value={value} />
      </Provider>
    );

    fireEvent.change(screen.getByDisplayValue(value), { target: { value: '#FF5733' } });

    expect(mockDispatch).toHaveBeenCalledWith(setSidebar('background', '#FF5733'));
  });

  it('should map the correct type to the sidebar key', () => {
    const typeToTest = 'item-color';

    render(
      <Provider store={store}>
        <SidebarColor type={typeToTest} value={value} />
      </Provider>
    );

    fireEvent.change(screen.getByDisplayValue(value), { target: { value: '#00FF00' } });

    expect(mockDispatch).toHaveBeenCalledWith(setSidebar('itemColor', '#00FF00'));
  });
});
