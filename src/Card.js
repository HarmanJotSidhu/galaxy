import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;