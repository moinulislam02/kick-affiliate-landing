import React from 'react';

export default function Badge({ children, className = '', variant = 'primary' }) {
  const styles = {
    primary: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-slate-100 text-slate-800 border border-slate-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
