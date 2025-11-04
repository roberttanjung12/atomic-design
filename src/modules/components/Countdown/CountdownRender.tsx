'use client';

import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownRender = () => {
  const [targetDate, setTargetDate] = useState(new Date(Date.now() + 15_000));

  const onOver = () => {
    console.log('Countdown Render Finish!');
  };

  const handleReset = () => {
    setTargetDate(new Date(Date.now() + 15_000));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
      <Countdown targetDate={targetDate} onOver={onOver}>
        <div>Countdown finish!</div>
      </Countdown>

      <Countdown targetDate={targetDate} onOver={onOver} countingElement={<div>Countdown still running...</div>}>
        <div>Countdown finish!</div>
      </Countdown>

      <Button variant="contained" onClick={handleReset}>
        Reset Countdown
      </Button>
    </Box>
  );
};

export default CountdownRender;
