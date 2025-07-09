import { useMediaQuery } from '@mui/material';
import { render, screen } from '@testing-library/react';
import HomeBanner from '@/modules/landing/Home/HomeBanner';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn()
}));

type DrogoProps = {
  variant: string;
  size: number;
};

jest.mock('@/@dront/components', () => ({
  Drogo: ({ variant, size }: DrogoProps) => (
    <div data-testid="drogo" data-variant={variant} data-size={size}>
      Drogo Component
    </div>
  )
}));

describe('HomeBanner Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with default screen size', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    render(<HomeBanner />);

    const drogo = screen.getByTestId('drogo');

    expect(drogo).toHaveAttribute('data-variant', 'full');
    expect(drogo).toHaveAttribute('data-size', '300');

    const images = screen.getAllByAltText('DRONT V5');

    expect(images).toHaveLength(2);
  });

  test('renders with medium screen size', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    render(<HomeBanner />);

    const drogo = screen.getByTestId('drogo');

    expect(drogo).toHaveAttribute('data-variant', 'full');
    expect(drogo).toHaveAttribute('data-size', '700');

    const images = screen.getAllByAltText('DRONT V5');

    expect(images).toHaveLength(2);
  });
});
