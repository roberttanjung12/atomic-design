import { render, screen } from '@testing-library/react';
import AccountLayout from '@/modules/main/Account/Layout';

describe('AccountLayout Component', () => {
  it('renders children within a Box component', () => {
    const mockChild = <div>Mock Child Content</div>;

    render(<AccountLayout children={mockChild} />);

    expect(screen.getByText('Mock Child Content')).toBeInTheDocument();
  });
});
