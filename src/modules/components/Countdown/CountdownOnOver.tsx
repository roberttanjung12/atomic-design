'use client';

import { useState } from 'react';
import { Button, Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownOnOver = () => {
  const [targetDate, setTargetDate] = useState(new Date(Date.now() + 20_000));

  const onOver = () => {
    console.log('Countdown Finish!');
  };

  const handleReset = () => {
    setTargetDate(new Date(Date.now() + 20_000));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
      <Countdown targetDate={targetDate} onOver={onOver} />

      <Button variant="contained" onClick={handleReset}>
        Reset Countdown
      </Button>
    </Box>
  );
};

export default CountdownOnOver;
