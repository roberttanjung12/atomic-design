'use client';

import { Countdown } from '@/@dront/components';

const CountdownBasic = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return <Countdown targetDate={targetDate} />;
};

export default CountdownBasic;
