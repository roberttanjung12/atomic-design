'use client';

import { Countdown } from '@/@dront/components';

const CountdownBasic = () => {
  return (
    <>
      <Countdown targetDate={new Date('2025-12-31T23:59:59')} />
    </>
  );
};

export default CountdownBasic;
