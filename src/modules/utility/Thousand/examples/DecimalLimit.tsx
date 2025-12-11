'use client';

import { Box, Typography, Paper } from '@mui/material';
import { thousand } from '../thousand';

const DecimalLimit = () => {
  const value = 1234.56789;
  const examples = [
    { limit: 0, output: thousand(value, { decimalLimit: 0 }) },
    { limit: 1, output: thousand(value, { decimalLimit: 1 }) },
    { limit: 2, output: thousand(value, { decimalLimit: 2 }) },
    { limit: 3, output: thousand(value, { decimalLimit: 3 }) },
    { limit: 5, output: thousand(value, { decimalLimit: 5 }) }
  ];

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Using value: <code>{value}</code>
      </Typography>
      {examples.map((example, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Decimal Limit: <strong>{example.limit}</strong>
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'monospace', mt: 1 }}>
            Output: "{example.output}"
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default DecimalLimit;
