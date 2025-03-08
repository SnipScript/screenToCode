import React from "react";

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={`p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-grayColor focus:border-transparent transition-all ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default  Input ; 