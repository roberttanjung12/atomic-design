'use client';

import { Countdown } from '@/@dront/components';

const CountdownCompact = () => {
  return (
    <>
      <Countdown targetDate={new Date('2025-12-31T23:59:59')} variant="compact" />
    </>
  );
};

export default CountdownCompact;
