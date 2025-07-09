import { render, screen } from '@testing-library/react';
import DynamicAlert from '@/@dront/components/DynamicAlert';

describe('DynamicAlert Component', () => {
  it('should not render when no message is provided', () => {
    render(<DynamicAlert />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('should render an alert with the provided message', () => {
    const testMessage = 'This is a test error message.';

    render(<DynamicAlert message={testMessage} />);
    const alertElement = screen.getByRole('alert');

    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent(testMessage);
    expect(alertElement).toHaveClass('MuiAlert-filled');
  });

  it('should apply custom styling to the alert message', () => {
    render(<DynamicAlert message="Styled Message" />);
    const alertMessage = screen.getByText('Styled Message');

    expect(alertMessage).toHaveStyle('line-height: 1.6');
  });
});
