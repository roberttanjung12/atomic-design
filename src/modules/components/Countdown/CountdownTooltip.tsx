'use client';

import { Countdown } from '@/@dront/components';

const CountdownTooltip = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return <Countdown targetDate={targetDate} variant="compact" useTooltip />;
};

export default CountdownTooltip;
