import React from 'react'

const Paragraph = ({ title, subtitle, des, bold }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold">{title}</h2>
      <h3 className="">{subtitle}</h3>
      <h4>
        {des} <b>{bold}</b>
      </h4>
    </div>
  );
};

export default Paragraph