import React from 'react';

export default function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`tracking-wider text-xs font-bold text-primary uppercase mb-3 block ${className}`}
    >
      {children}
    </span>
  );
}
