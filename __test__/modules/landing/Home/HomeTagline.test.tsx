import { render, screen } from '@testing-library/react';
import HomeTagline from '@/modules/landing/Home/HomeTagline';

describe('HomeTagline Component', () => {
  test('renders the tagline and description correctly', () => {
    render(<HomeTagline />);

    const heading = screen.getByText('The Ultimate SPE Front End Department Boilerplate');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle('font-size: 2rem');
    expect(heading).toHaveStyle('font-weight: 900');

    const subheading = screen.getByText('With Latest Version of Next.JS');

    expect(subheading).toBeInTheDocument();
    expect(subheading).toHaveStyle('font-size: 1.3rem');
    expect(subheading).toHaveStyle('color: #ec255a');
  });
});
