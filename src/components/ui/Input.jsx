import React from 'react';

const Input = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-barkat-green mb-1.5">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-barkat-dark placeholder:text-barkat-gray/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-barkat-green/30 ${
          error ? 'border-red-500 focus:ring-red-500/30' : 'border-barkat-greenLight/60 focus:border-barkat-green'
        }`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;