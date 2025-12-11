'use client';

import { Box, Typography, Paper } from '@mui/material';
import { thousand } from '../thousand';

const Redenomination = () => {
  const value = 1234567890;
  const examples = [
    { factor: 1, label: 'No redenomination', output: thousand(value, { redenomination: 1 }) },
    { factor: 100, label: 'Divide by 100 (hundreds)', output: thousand(value, { redenomination: 100 }) },
    { factor: 1000, label: 'Divide by 1,000 (thousands)', output: thousand(value, { redenomination: 1000 }) },
    { factor: 1000000, label: 'Divide by 1,000,000 (millions)', output: thousand(value, { redenomination: 1000000 }) },
    {
      factor: 1000000000,
      label: 'Divide by 1,000,000,000 (billions)',
      output: thousand(value, { redenomination: 1000000000 })
    }
  ];

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Using value: <code>{value.toLocaleString()}</code>
      </Typography>
      {examples.map((example, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {example.label}
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'monospace', mt: 1 }}>
            Output: "{example.output}"
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Redenomination;
