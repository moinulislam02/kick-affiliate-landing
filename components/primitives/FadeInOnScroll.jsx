'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FadeInOnScroll({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  className = '',
}) {
  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom smooth ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
