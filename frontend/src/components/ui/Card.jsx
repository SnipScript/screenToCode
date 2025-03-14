import React from "react";

const Card = ({ children, className, onClick = () => {} }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
