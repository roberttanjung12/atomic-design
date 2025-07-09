import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import LayoutMainHeaderModeSwitcher from '@/@dront/layouts/Main/Header/Mode';
import { store } from '@/store/store';

jest.mock('@/store/hooks', () => ({
  useSelector: jest.fn(selector => selector(store.getState())),
  useDispatch: () => store.dispatch
}));

describe('LayoutMainHeaderMode', () => {
  it('should render correctly in light mode', () => {
    store.dispatch({ type: 'appearance/setActiveMode', payload: 'light' });

    render(
      <Provider store={store}>
        <LayoutMainHeaderModeSwitcher />
      </Provider>
    );
  });
});
