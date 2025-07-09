import { render, screen } from '@testing-library/react';
import LoadingScreen from '@/@dront/components/LoadingScreen';

jest.mock('@/@dront/components', () => ({
  Drogo: jest.fn(() => <div>Mocked Drogo</div>)
}));

describe('LoadingScreen', () => {
  it('renders the LoadingScreen component with correct background and color', () => {
    render(<LoadingScreen background="blue" color="white" height="100vh" />);

    const loadingText = screen.getByText('LOADING');

    expect(loadingText).toHaveStyle('color: white');
  });

  it('renders the mocked Drogo component', () => {
    render(<LoadingScreen background="black" color="yellow" height="100vh" />);

    const mockedDrogo = screen.getByText('Mocked Drogo');

    expect(mockedDrogo).toBeInTheDocument();
  });
});
