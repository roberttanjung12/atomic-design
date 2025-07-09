import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingAbout from '@/modules/landing/About';

describe('LandingAbout Component', () => {
  test('renders the About text correctly', () => {
    render(<LandingAbout />);

    const aboutText = screen.getByText('About');

    expect(aboutText).toBeInTheDocument();
  });
});
