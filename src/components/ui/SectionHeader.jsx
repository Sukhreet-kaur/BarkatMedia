import React from 'react';

const SectionHeader = ({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  className = '' 
}) => {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} max-w-3xl ${centered ? 'mx-auto' : ''} mb-12 md:mb-16 ${className}`}>
      {subtitle && (
        <span className="section-subtitle">{subtitle}</span>
      )}
      {title && (
        <h2 className="section-title">{title}</h2>
      )}
      {description && (
        <p className="section-description mx-auto">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;