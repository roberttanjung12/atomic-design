'use client';

import { Box, Typography, Paper } from '@mui/material';
import { thousand } from '../thousand';

const CombinedOptions = () => {
  const examples = [
    {
      description: 'Round up + Dot separator (comma decimal) + No decimals',
      input: 1234567.89,
      options: { roundingMode: 'up' as const, separator: '.', decimalLimit: 0 },
      output: thousand(1234567.89, { roundingMode: 'up', separator: '.', decimalLimit: 0 })
    },
    {
      description: 'European Format: Dot separator + Comma decimal + 2 decimals',
      input: 9876543.21,
      options: { separator: '.', decimalLimit: 2 },
      output: thousand(9876543.21, { separator: '.', decimalLimit: 2 })
    },
    {
      description: 'Redenomination (millions) + 1 decimal',
      input: 1234567890,
      options: { redenomination: 1000000, decimalLimit: 1 },
      output: thousand(1234567890, { redenomination: 1000000, decimalLimit: 1 })
    },
    {
      description: 'Parse string + Reformat + Redenominate',
      input: '5.000.000',
      options: { separator: ',', redenomination: 1000, decimalLimit: 2 },
      output: thousand('5.000.000', { separator: ',', redenomination: 1000, decimalLimit: 2 })
    },
    {
      description: 'Round down + Space separator + 3 decimals + Redenomination (thousands)',
      input: 9876543.21,
      options: { roundingMode: 'down' as const, separator: ' ', decimalLimit: 3, redenomination: 1000 },
      output: thousand(9876543.21, { roundingMode: 'down', separator: ' ', decimalLimit: 3, redenomination: 1000 })
    },
    {
      description: 'All options + Return number',
      input: 5555555.555,
      options: { roundingMode: 'up' as const, decimalLimit: 2, redenomination: 1000, returnType: 'number' as const },
      output: thousand(5555555.555, { roundingMode: 'up', decimalLimit: 2, redenomination: 1000, returnType: 'number' })
    }
  ];

  return (
    <Box>
      {examples.map((example, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Typography variant="body2" color="primary" fontWeight="bold">
            {example.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Input: <code>{typeof example.input === 'string' ? `"${example.input}"` : example.input}</code>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Options: <code>{JSON.stringify(example.options)}</code>
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'monospace', mt: 1 }}>
            Output: {typeof example.output === 'number' ? `${example.output} (number)` : `"${example.output}"`}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default CombinedOptions;
