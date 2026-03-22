import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-dark-card rounded-xl p-6 border border-white/5 ${
        hover ? 'transition-all duration-200 hover:border-white/20 hover:shadow-xl hover:shadow-primary/5' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

