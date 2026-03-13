import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  subtitle,
  className = ''
}) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

