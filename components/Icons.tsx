import React from 'react';

export interface IconProps {
  name: 'menu' | 'x' | 'phone' | 'heart' | 'pin' | 'down' | 'right' | 'left' | 'check' | 'insta';
  s?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, s = 24, className = "" }) => {
  let content;
  if (name === 'menu') content = <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round" />;
  else if (name === 'x') content = <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />;
  else if (name === 'phone') content = <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.12 2h3a2 2 0 012 1.72 12.05 12.05 0 00.57 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.03 12.03 0 002.81.57A2 2 0 0122 16.92z" />;
  else if (name === 'heart') content = <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />;
  else if (name === 'pin') content = <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>;
  else if (name === 'down') content = <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
  else if (name === 'right') content = <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>;
  else if (name === 'left') content = <><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>;
  else if (name === 'check') content = <polyline points="20 6 9 17 4 12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />;
  else if (name === 'insta') content = <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" /></>;

  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      {content}
    </svg>
  );
};