import React from 'react'

const Paragraph = ({title,des}) => {
  return (
    <div>
      <h4 className="text-lg font-medium">{title}</h4>
      <p>{des}</p>
    </div>
  );
}

export default Paragraph