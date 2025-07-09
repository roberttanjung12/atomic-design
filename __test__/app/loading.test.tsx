import { render } from '@testing-library/react';
import { LoadingScreen } from '@/@dront/components';
import Loading from '@/app/loading';

jest.mock('@/@dront/components', () => ({
  LoadingScreen: jest.fn()
}));

describe('Loading Component', () => {
  it('renders the LoadingScreen component with the correct props', () => {
    render(<Loading />);

    expect(LoadingScreen).toHaveBeenCalledWith(
      {
        background: '#000000',
        color: 'white',
        height: '100vh'
      },
      undefined
    );
  });
});
