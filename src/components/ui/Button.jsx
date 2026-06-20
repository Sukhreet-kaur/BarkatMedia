import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '', 
  ...props 
}) => {
  const variants = {
    primary: 'bg-barkat-green text-white hover:bg-barkat-greenDark hover:shadow-lg hover:-translate-y-0.5',
    gold: 'bg-barkat-gold text-white hover:bg-barkat-gold/90 hover:shadow-lg hover:-translate-y-0.5',
    outline: 'border-2 border-barkat-green text-barkat-green hover:bg-barkat-green hover:text-white',
    ghost: 'text-barkat-green hover:bg-barkat-greenLight',
    white: 'bg-white text-barkat-green hover:bg-barkat-lightGray',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;