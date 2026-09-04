import React from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost'
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) {
  const baseStyle =
    'inline-flex items-center justify-center font-bold text-sm rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed h-10 px-5';

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-dark shadow-sm border border-primary',
    secondary:
      'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-xs',
    ghost: 'text-slate-500 hover:text-slate-900 hover:bg-slate-50/80',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
