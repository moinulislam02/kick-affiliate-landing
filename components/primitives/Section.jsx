import React from 'react';

export default function Section({ children, className = '', id = '' }) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 max-w-[1400px] w-full mx-auto px-6 md:px-12 overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}
