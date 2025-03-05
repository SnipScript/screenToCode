import React from "react";

const CommonContainer = ({ children }) => {
  return (
    <div className="max-w-[1520px] px-4 mx-auto  sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default CommonContainer;
