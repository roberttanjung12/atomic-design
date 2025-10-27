'use client';

import { Countdown } from '@/@dront/components';

const CountdownOnOver = () => {
  const onOver = () => {
    console.log('Countdown Finish!');
  };

  return <Countdown targetDate={new Date(Date.now() + 1 * 60 * 1000)} onOver={onOver} />;
};

export default CountdownOnOver;
