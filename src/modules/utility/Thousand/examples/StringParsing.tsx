'use client';

import { Box, Typography, Paper } from '@mui/material';
import { thousand } from '../thousand';

const StringParsing = () => {
  const examples = [
    { input: '1.000.000', output: thousand('1.000.000') },
    { input: '1,000,000', output: thousand('1,000,000') },
    { input: '1.234.567,89', output: thousand('1.234.567,89') },
    { input: '1 000 000', output: thousand('1 000 000') },
    { input: '1_000_000', output: thousand('1_000_000') },
    { input: '1.000.000 (as number)', output: thousand('1.000.000', { returnType: 'number' }) }
  ];

  return (
    <Box>
      {examples.map((example, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Input: <code>"{example.input}"</code>
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'monospace', mt: 1 }}>
            Output: {typeof example.output === 'number' ? `${example.output} (number)` : `"${example.output}"`}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default StringParsing;
