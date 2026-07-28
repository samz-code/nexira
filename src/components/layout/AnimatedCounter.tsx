import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2.2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView && !started) setStarted(true);
  }, [inView, started]);

  return (
    <span ref={ref} className={className}>
      {started ? (
        <CountUp end={value} prefix={prefix} suffix={suffix} duration={duration} separator="," />
      ) : (
        <span>
          {prefix}0{suffix}
        </span>
      )}
    </span>
  );
}
