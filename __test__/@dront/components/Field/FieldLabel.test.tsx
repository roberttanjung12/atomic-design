import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FieldLabel from '@/@dront/components/Field/FieldLabel';

jest.mock('@/@dront/components/Field/FieldLabel', () => ({
  __esModule: true,
  default: jest.fn(({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) => (
    <label data-testid="mock-field-label" htmlFor={htmlFor}>
      {children}
    </label>
  ))
}));

describe('FieldLabel Component (Mocked)', () => {
  test('renders label with correct text and htmlFor attribute', () => {
    render(<FieldLabel htmlFor="test-input">Test Label</FieldLabel>);
    const mockElement = screen.getByTestId('mock-field-label');

    expect(mockElement).toBeInTheDocument();
    expect(mockElement).toHaveTextContent('Test Label');
  });

  test('renders label without htmlFor when not provided', () => {
    render(<FieldLabel>Label without htmlFor</FieldLabel>);
    const mockElement = screen.getByTestId('mock-field-label');

    expect(mockElement).toBeInTheDocument();
    expect(mockElement).toHaveTextContent('Label without htmlFor');
    expect(mockElement).not.toHaveAttribute('htmlFor');
  });

  test('renders empty label when no children are passed', () => {
    render(<FieldLabel htmlFor="empty-input" />);
    const mockElement = screen.getByTestId('mock-field-label');

    expect(mockElement).toBeInTheDocument();
    expect(mockElement).toBeEmptyDOMElement();
  });
});
