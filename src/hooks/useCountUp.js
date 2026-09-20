import { useEffect, useRef, useState } from 'react';

export const useCountUp = (targetText, { duration = 1800, startOnView = true } = {}) => {
  const ref = useRef(null);
  const suffix = targetText.includes('+') ? '+' : targetText.includes('%') ? '%' : '';
  const numeric = parseInt(targetText, 10);
  const [value, setValue] = useState(isNaN(numeric) ? targetText : '0');
  const startedRef = useRef(false);

  useEffect(() => {
    if (isNaN(numeric)) return;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(numeric * eased) + suffix);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!startOnView || !ref.current) {
      run();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetText, duration, startOnView, numeric, suffix]);

  return { ref, value };
};