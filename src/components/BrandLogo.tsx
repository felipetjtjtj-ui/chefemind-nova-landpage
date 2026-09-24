import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-7 h-7 rounded-[8px]',
    md: 'w-9 h-9 rounded-[10px]',
    lg: 'w-12 h-12 rounded-[14px]',
    xl: 'w-16 h-16 rounded-[18px]',
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 overflow-hidden shadow-[0_4px_16px_rgba(224,31,53,0.35)] transition-transform duration-300 hover:scale-105 ${sizeClasses} ${className}`}
    >
      <img
        src="/assets/chefemind-logo.svg"
        alt="ChefeMind Logo"
        className="w-full h-full object-cover object-center"
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Fallback to jpg asset if needed
          const target = e.currentTarget;
          if (target.src !== '/assets/chefemind-logo.jpg') {
            target.src = '/assets/chefemind-logo.jpg';
          }
        }}
      />
    </div>
  );
};
