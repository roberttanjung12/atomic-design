'use client';

import { Countdown } from '@/@dront/components';

const CountdownBasic = () => {
  return <Countdown targetDate={new Date('2025-12-27T11:10:59')} />;
};

export default CountdownBasic;
