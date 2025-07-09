import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as Prism from 'prismjs';
import CodeSnippet from '@/@dront/components/CodeSnippet';

jest.mock('prismjs', () => ({
  ...jest.requireActual('prismjs'),
  highlightAll: jest.fn()
}));

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  Box: ({ children, sx, ...rest }: any) => (
    <div data-testid="mocked-box" {...rest} style={sx}>
      {children}
    </div>
  )
}));

describe('CodeSnippet Component', () => {
  const codeSample = 'const foo = "bar";';

  it('renders the code snippet with correct language class', () => {
    render(<CodeSnippet language="tsx" code={codeSample} />);

    const preElement = screen.getByTestId('mocked-box').querySelector('pre');
    const codeElement = preElement?.querySelector('code');

    expect(preElement).toHaveClass('language-tsx');
    expect(codeElement).toHaveClass('language-tsx');
  });

  it('renders the code snippet correctly', () => {
    render(<CodeSnippet language="jsx" code={codeSample} />);

    const codeElement = screen.getByTestId('mocked-box').querySelector('code');

    expect(codeElement).toHaveTextContent(codeSample);
  });

  it('calls Prism.highlightAll on mount', () => {
    render(<CodeSnippet language="tsx" code={codeSample} />);

    expect(Prism.highlightAll).toHaveBeenCalledTimes(1);
  });

  it('handles empty code prop', () => {
    render(<CodeSnippet language="tsx" code="" />);

    const boxElement = screen.getByTestId('mocked-box');
    const preElement = boxElement.querySelector('pre');
    const codeElement = preElement?.querySelector('code');

    expect(preElement).toBeInTheDocument();
    expect(codeElement).toBeInTheDocument();
    expect(codeElement).toHaveTextContent('');
  });
});
