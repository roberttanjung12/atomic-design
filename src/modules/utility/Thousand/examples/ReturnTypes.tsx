'use client';

import { Box, Typography, Paper } from '@mui/material';
import { thousand } from '../thousand';

const ReturnTypes = () => {
  const value = 1234567.89;
  const examples = [
    { type: 'string (default)', output: thousand(value) },
    { type: 'number', output: thousand(value, { returnType: 'number' }) },
    { type: 'number with rounding up', output: thousand(1234.567, { returnType: 'number', roundingMode: 'up' }) },
    {
      type: 'number with redenomination',
      output: thousand(1234567, { returnType: 'number', redenomination: 1000 })
    },
    {
      type: 'parse string to number',
      output: thousand('1.000.000', { returnType: 'number' })
    }
  ];

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Using value: <code>{value}</code>
      </Typography>
      {examples.map((example, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Return Type: <strong>{example.type}</strong>
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'monospace', mt: 1 }}>
            Output: {typeof example.output === 'number' ? `${example.output} (number)` : `"${example.output}" (string)`}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default ReturnTypes;
