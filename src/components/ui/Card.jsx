import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  ...props 
}) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-barkat-greenLight/50 ${hover ? 'hover:shadow-medium hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl md:text-2xl font-serif font-semibold text-barkat-green ${className}`}>{children}</h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-barkat-gray ${className}`}>{children}</p>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-6 pt-6 border-t border-barkat-greenLight/30 ${className}`}>{children}</div>
);

export default Card;