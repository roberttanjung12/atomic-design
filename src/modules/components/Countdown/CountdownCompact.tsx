'use client';

import { Countdown } from '@/@dront/components';

const CountdownCompact = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return <Countdown targetDate={targetDate} variant="compact" />;
};

export default CountdownCompact;
