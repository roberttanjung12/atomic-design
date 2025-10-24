'use client';

import { Countdown } from '@/@dront/components';

const CountdownBlock = () => {
  return (
    <>
      <Countdown targetDate="2025-12-31T23:59:59" variant="block" />
    </>
  );
};

export default CountdownBlock;
