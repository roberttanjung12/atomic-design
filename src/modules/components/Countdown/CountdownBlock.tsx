'use client';

import { Countdown } from '@/@dront/components';

const CountdownBlock = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return <Countdown targetDate={targetDate} variant="block" />;
};

export default CountdownBlock;
