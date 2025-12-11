'use client';

import { Box, Typography, Paper } from '@mui/material';
import { thousand } from '../thousand';

const BasicUsage = () => {
  const examples = [
    { input: 1234567.89, output: thousand(1234567.89) },
    { input: 123.45, output: thousand(123.45) },
    { input: 9876543.21, output: thousand(9876543.21) },
    { input: 0, output: thousand(0) }
  ];

  return (
    <Box>
      {examples.map((example, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Input: <code>{example.input}</code>
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'monospace', mt: 1 }}>
            Output: "{example.output}"
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default BasicUsage;
