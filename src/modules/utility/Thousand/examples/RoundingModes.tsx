'use client';

import { Box, Typography, Paper } from '@mui/material';
import { thousand } from '../thousand';

const RoundingModes = () => {
  const value = 1234.567;
  const examples = [
    { mode: 'normal', output: thousand(value, { roundingMode: 'normal' }) },
    { mode: 'up', output: thousand(value, { roundingMode: 'up' }) },
    { mode: 'down', output: thousand(value, { roundingMode: 'down' }) },
    { mode: 'up (1 decimal)', output: thousand(1234.561, { roundingMode: 'up', decimalLimit: 1 }) },
    { mode: 'down (1 decimal)', output: thousand(1234.569, { roundingMode: 'down', decimalLimit: 1 }) }
  ];

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Using value: <code>{value}</code>
      </Typography>
      {examples.map((example, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Mode: <strong>{example.mode}</strong>
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'monospace', mt: 1 }}>
            Output: "{example.output}"
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default RoundingModes;
