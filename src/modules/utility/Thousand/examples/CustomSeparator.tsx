'use client';

import { Box, Typography, Paper } from '@mui/material';
import { thousand } from '../thousand';

const CustomSeparator = () => {
  const value = 1234567.89;
  const examples = [
    { separator: ',', decimal: '.', output: thousand(value, { separator: ',' }) },
    { separator: '.', decimal: ',', output: thousand(value, { separator: '.' }) },
    { separator: ' ', decimal: '.', output: thousand(value, { separator: ' ' }) },
    { separator: '_', decimal: '.', output: thousand(value, { separator: '_' }) },
    { separator: "'", decimal: '.', output: thousand(value, { separator: "'" }) }
  ];

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Using value: <code>{value}</code>
      </Typography>
      <Typography variant="body2" color="info.main" sx={{ mb: 2 }}>
        Note: When separator is ".", decimal separator automatically becomes ",". Otherwise, decimal separator is ".".
      </Typography>
      {examples.map((example, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Thousand Separator: <strong>"{example.separator}"</strong> | Decimal Separator:{' '}
            <strong>"{example.decimal}"</strong>
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'monospace', mt: 1 }}>
            Output: "{example.output}"
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default CustomSeparator;
