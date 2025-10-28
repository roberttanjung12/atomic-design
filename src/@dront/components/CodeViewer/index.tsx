'use client';

import { useRef, useState, type ReactNode } from 'react';
import { Code, CodeOff, ContentCopy, Replay } from '@mui/icons-material';
import { Box, Card, CardActions, CardContent, Collapse, IconButton, Stack, Tab, Tabs, Tooltip } from '@mui/material';
import uniqueId from 'lodash/uniqueId';
import CodeSnippet from '../CodeSnippet';

export interface CodeViewerProps {
  /** ReactNode content to display above the code snippet. */
  children: ReactNode;
  /** The code snippet to display and copy. */
  code: string | { label: string; code: string; language?: string }[];
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
  const [tabValue, setTabValue] = useState(0);
  const isCodeArray = Array.isArray(code);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCopy = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    try {
      const content = isCodeArray ? code[tabValue].code : code;

      await navigator.clipboard.writeText(content);

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
          borderBottom: expanded && isCodeArray ? 0 : undefined,
          borderBottomLeftRadius: expanded && isCodeArray ? 0 : 7,
          borderBottomRightRadius: expanded && isCodeArray ? 0 : 7,
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
        {isCodeArray ? (
          <>
            <Box
              sx={{
                border: 1,
                borderBottomLeftRadius: 7,
                borderBottomRightRadius: 7,
                borderColor: 'divider'
              }}
            >
              <Tabs value={tabValue} onChange={handleChange}>
                {code.map(({ label }) => {
                  return <Tab key={`label-${label}`} label={label} sx={{ textTransform: 'none' }} />;
                })}
              </Tabs>
            </Box>
            {code.map(({ label, code, language = 'tsx' }, idx) => {
              return tabValue === idx && <CodeSnippet key={`code-${label}`} language={language} code={code} />;
            })}
          </>
        ) : (
          <CodeSnippet language="tsx" code={code} />
        )}
      </Collapse>
    </Stack>
  );
};

export default CodeViewer;
