/**
 * A custom hook that creates a countdown timer based on a target date.
 *
 * @param targetDate - The target date to count down to
 * @param onOver - Optional callback function that will be called when the countdown reaches zero
 *
 * @returns An object containing:
 * - timeLeft: Object with remaining time split into days, hours, minutes and seconds
 *
 * @example
 * ```tsx
 * const { timeLeft } = useCountdown(new Date('2024-12-31'), () => {
 *   console.log('Countdown finished!');
 * });
 * ```
 *
 * @remarks
 * - The countdown updates every second
 * - When the countdown reaches zero, the onOver callback is called only once
 * - The timer automatically cleans up when the component unmounts
 */

import { useEffect, useState, useCallback, useRef } from 'react';
import type { TimeLeft } from './Countdown.types';

export const useCountdown = (targetDate: Date, onOver?: () => void) => {
  const countDownDate = targetDate.getTime();
  const hasCalledOver = useRef(false);

  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now = new Date().getTime();
    const difference = countDownDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }, [countDownDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  useEffect(() => {
    hasCalledOver.current = false;
  }, [countDownDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = calculateTimeLeft();

      setTimeLeft(next);

      if (!hasCalledOver.current && next.days === 0 && next.hours === 0 && next.minutes === 0 && next.seconds === 0) {
        hasCalledOver.current = true;
        onOver?.();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft, onOver]);

  return { timeLeft };
};
