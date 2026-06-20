import React from 'react';

const Container = ({ 
  children, 
  className = '', 
  as: Tag = 'div' 
}) => {
  return (
    <Tag className={`container-custom ${className}`}>
      {children}
    </Tag>
  );
};

export default Container;