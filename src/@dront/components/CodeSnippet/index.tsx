'use client';

import { useEffect } from 'react';
import { Box } from '@mui/material';
import Prism from 'prismjs';
import 'prismjs/themes/prism-twilight.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

/**
 * Code Snippet - Auto formatted and beautify code display.
 *
 * @component
 * @params {string} language - Language type, check {@link https://prismjs.com/#supported-languages Prism Supported Language}.
 * @params {string} code - Formatted code structure
 *
 * @returns {JSX.Element} The rendered Code Snippet component
 *
 * @example <CodeSnippet language="tsx" code={your formatted code} />
 */
const CodeSnippet = ({ language, code }: { language: string; code: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Box width="100%" lineHeight={0.8} sx={{ overflow: 'scroll' }}>
      <pre className={`language-${language}`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </Box>
  );
};

export default CodeSnippet;
