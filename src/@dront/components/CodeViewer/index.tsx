'use client';

import { useRef, useState, type ReactNode } from 'react';
import { Code, CodeOff, ContentCopy, Replay } from '@mui/icons-material';
import { Card, CardActions, CardContent, Collapse, IconButton, Stack, Tooltip } from '@mui/material';
import uniqueId from 'lodash/uniqueId';
import CodeSnippet from '../CodeSnippet';

export interface CodeViewerProps {
  /** ReactNode content to display above the code snippet. */
  children: ReactNode;
  /** The code snippet to display and copy. */
  code: string;
}

/**
 * A component that displays a collapsible code snippet with options to copy the code.
 *
 * @example
 * ```tsx
 * <CodeViewer code={`const x = 42;`}>
 *   <p>This is an example code snippet:</p>
 * </CodeViewer>
 * ```
 *
 * @param {CodeViewerProps} props - The props for the component.
 */
const CodeViewer = ({ children, code }: CodeViewerProps) => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [key, setKey] = useState(uniqueId());
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCopy = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  const handleResetKey = () => {
    setKey(uniqueId());
  };

  return (
    <Stack key={key}>
      <Card
        variant="outlined"
        sx={{ mx: 'auto', borderBottom: 'none', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      >
        <CardContent>{children}</CardContent>
      </Card>

      <CardActions
        disableSpacing
        sx={{
          border: ({ palette }) => `1px solid ${palette.divider}`,
          borderBottomLeftRadius: 7,
          borderBottomRightRadius: 7,
          justifyContent: 'end',
          gap: 1
        }}
      >
        <Tooltip title={expanded ? 'Hide code' : 'Show code'}>
          <IconButton size="small" onClick={handleExpandClick}>
            {expanded ? <CodeOff /> : <Code />}
          </IconButton>
        </Tooltip>

        <Tooltip title={copied ? 'Copied!' : 'Copy code'}>
          <IconButton size="small" onClick={handleCopy}>
            <ContentCopy />
          </IconButton>
        </Tooltip>

        <Tooltip title="Reset demo">
          <IconButton size="small" onClick={handleResetKey}>
            <Replay />
          </IconButton>
        </Tooltip>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CodeSnippet language="tsx" code={code} />
      </Collapse>
    </Stack>
  );
};

export default CodeViewer;
