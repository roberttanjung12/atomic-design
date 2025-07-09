import * as ReactRedux from 'react-redux';
import { useDispatch, useSelector } from '@/store/hooks';

jest.mock('react-redux');

describe('hooks', () => {
  it('should call useAppDispatch', () => {
    const mockDispatch = jest.fn();

    (ReactRedux.useDispatch as jest.MockedFunction<typeof ReactRedux.useDispatch>).mockReturnValue(mockDispatch);

    useDispatch();

    expect(ReactRedux.useDispatch).toHaveBeenCalled();
  });

  it('should call useAppSelector', () => {
    const mockSelector = jest.fn();

    (ReactRedux.useSelector as jest.MockedFunction<typeof ReactRedux.useSelector>).mockReturnValue(mockSelector);

    useSelector(state => state);

    expect(ReactRedux.useSelector).toHaveBeenCalled();
  });

  it('useSelector should return the result of the selector', () => {
    const mockState = { appearance: { activeTheme: 'test', sidebar: { isCollapse: false } } };

    (ReactRedux.useSelector as jest.MockedFunction<typeof ReactRedux.useSelector>).mockImplementation(selector =>
      selector(mockState)
    );

    const result = useSelector(state => state.appearance.activeTheme);

    expect(result).toBe('test');
  });
});
