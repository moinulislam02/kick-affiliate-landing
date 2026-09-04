'use client';

import React from 'react';

// Icons matching the reference design
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
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" fillOpacity="0.15" />
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

const bottomPillars = [
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

export default function LogoMarquee() {
  const brandCards = [
    {
      name: 'NAUGHTY NUTS',
      logoStyle: 'font-display font-extrabold text-[11px] tracking-tighter text-slate-900 uppercase',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'CrossFit',
      logoStyle: 'font-display font-black text-xs tracking-tight text-slate-950 italic uppercase',
      photo: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'SOLAR CLEAN',
      logoStyle: 'font-display font-semibold text-[10px] tracking-widest text-slate-700 uppercase',
      photo: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'NATURTREU',
      logoStyle: 'font-display font-bold text-[10px] tracking-widest text-slate-800 flex items-center gap-1.5 uppercase',
      icon: (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
      ),
      photo: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'winkwell',
      logoStyle: 'font-body font-normal text-xs tracking-tight text-slate-500 lowercase',
      photo: 'https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'GLOW COLLECTION',
      logoStyle: 'font-display font-medium text-[9px] tracking-widest text-slate-800 uppercase',
      photo: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // Duplicate cards array to create a seamless infinite scrolling track loop
  const scrollCards = [...brandCards, ...brandCards, ...brandCards];

  return (
    <div className="bg-white pt-16 pb-0 overflow-hidden select-none">
      
      {/* Title Header */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 mb-12 text-center">
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
          Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500 font-extrabold">250,000+</span> customers across the globe
        </h3>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative flex w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-6 sm:gap-8 items-center">
          {scrollCards.map((card, idx) => (
            <div
              key={idx}
              className="inline-flex flex-col w-[260px] sm:w-[280px] flex-shrink-0 items-center gap-3.5"
            >
              {/* Product Photo - Tall Portrait Magazine Layout */}
              <div className="w-full h-[360px] sm:h-[380px] overflow-hidden bg-slate-100 border border-slate-200/40 rounded-none shadow-sm">
                <img
                  src={card.photo}
                  alt={card.name}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              
              {/* Brand Logo centered below */}
              <div className="py-1 text-center">
                <span className={card.logoStyle}>
                  {card.icon}
                  {card.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Feature/Trust Boxes Bar directly at the bottom */}
      <div className="mt-14 border-t border-b border-slate-200/80 bg-white">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          {bottomPillars.map((item, idx) => (
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

    </div>
  );
}
