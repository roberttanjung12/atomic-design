import { render } from '@testing-library/react';
import { LoadingScreen } from '@/@dront/components';
import Loading from '@/app/(main)/loading';

jest.mock('@/@dront/components', () => ({
  LoadingScreen: jest.fn()
}));

describe('Loading Component', () => {
  it('renders the LoadingScreen component with the correct props', () => {
    render(<Loading />);

    expect(LoadingScreen).toHaveBeenCalledWith(
      {
        background: 'transparent',
        color: '#000000',
        height: '100%'
      },
      undefined
    );
  });
});
