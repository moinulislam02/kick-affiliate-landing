'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function StatCounter({ end, duration = 600, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const countRef = useRef(0);

  useEffect(() => {
    if (!inView) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    let startTime = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Easing out function
      const easeOutQuad = (t) => t * (2 - t);
      const easedProgress = easeOutQuad(progressPercentage);
      
      const nextCount = Math.floor(startValue + easedProgress * (end - startValue));
      
      setCount(nextCount);
      countRef.current = nextCount;

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
