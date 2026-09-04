'use client';

import React from 'react';

function ShopifyIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M19.4 7.2c-.1-.3-.3-.4-.6-.4h-2.1l-.4-2.8c-.1-1.1-1.1-1.9-2.2-1.9H9.9C8.8 2.1 7.8 2.9 7.7 4L7.3 6.8H5.2c-.3 0-.5.2-.6.4-.1.3 0 .5.2.7l2.3 2.3 1.8 11c.1.9.9 1.5 1.8 1.5h6.8c.9 0 1.6-.6 1.8-1.5l1.8-11 2.3-2.3c.2-.2.3-.5.2-.7z"
        fill="#95BF47"
      />
      <path
        d="M10 4.1c.1-.5.5-.9 1-.9h2c.5 0 .9.4 1 .9l.4 2.7H9.6L10 4.1z"
        fill="#fff"
        fillOpacity="0.4"
      />
      <path
        d="M13.2 10.4c-.3-.2-.7-.3-1.2-.3-.8 0-1.3.4-1.3.9 0 .6.5.9 1.3 1.1 1 .3 1.6.7 1.6 1.6 0 1-.9 1.7-2 1.7-.7 0-1.3-.2-1.7-.5l.3-1c.3.2.7.4 1.3.4.6 0 1-.3 1-.7 0-.5-.4-.8-1.3-1-1-.3-1.6-.7-1.6-1.6 0-1 .9-1.7 2-1.7.6 0 1.1.1 1.5.3l-.3 1.1z"
        fill="#fff"
      />
    </svg>
  );
}

function DataBackedIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" fillOpacity="0.12" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  );
}

function ScalabilityIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#FF5544" strokeWidth="1.8" fill="#FFF5F4" />
      <path d="M8.5 12a3.5 3.5 0 0 1 7 0" stroke="#FF5544" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 12a6 6 0 0 1 12 0" stroke="#FF5544" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.5" fill="#FF5544" />
    </svg>
  );
}

function StrategicSupportIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#A855F7" strokeWidth="1.8" fill="#FAF5FF" />
      <circle cx="12" cy="12" r="4.2" stroke="#A855F7" strokeWidth="1.8" />
      <path d="M12 2v5.8M12 16.2V22M2 12h5.8M16.2 12H22" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.6" fill="#A855F7" />
    </svg>
  );
}

const trustFeatures = [
  {
    icon: <ShopifyIcon />,
    title: 'Native in Shopify',
  },
  {
    icon: <DataBackedIcon />,
    title: 'Data-backed Solution',
  },
  {
    icon: <ScalabilityIcon />,
    title: 'Scalability for Growth',
  },
  {
    icon: <StrategicSupportIcon />,
    title: 'Strategic Support',
  },
];

export default function TrustBar() {
  return (
    <div className="border-t border-b border-slate-200/80 bg-white">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
        {trustFeatures.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center gap-3 py-5 sm:py-6 px-4 hover:bg-slate-50/50 transition-colors"
          >
            {item.icon}
            <span className="font-display font-semibold text-slate-850 text-xs sm:text-sm tracking-tight">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
