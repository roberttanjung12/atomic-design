import { render, screen } from '@testing-library/react';
import LandingHome from '@/modules/landing/Home';

jest.mock('@/modules/landing/Home/HomeBanner', () => jest.fn(() => <div>Mocked HomeBanner</div>));
jest.mock('@/modules/landing/Home/HomeTagline', () => jest.fn(() => <div>Mocked HomeTagline</div>));

describe('LandingHome component', () => {
  test('renders HomeBanner and HomeTagline components', () => {
    render(<LandingHome />);

    expect(screen.getByText(/Mocked HomeBanner/i)).toBeInTheDocument();

    expect(screen.getByText(/Mocked HomeTagline/i)).toBeInTheDocument();
  });
});
