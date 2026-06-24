"use client";

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

type CounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
};

export default function Counter({ to, prefix = '', suffix = '', decimals = 0, duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const value = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${v.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, decimals, prefix, suffix, value]);

  return <span ref={ref}>{`${prefix}0${suffix}`}</span>;
}
