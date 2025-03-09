import React from 'react'
import { MdRadioButtonChecked } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";

import { TiInputChecked } from "react-icons/ti";
import { LuBadgeCheck } from "react-icons/lu";


const FooterList = ({title,list}) => {
  return (
    <div>
      <h4 className="text-lg font-medium">{title}</h4>
      {list.map((item, i) => (
        <div key={i} className="flex items-center gap-1">
          <span className="">
            <LuBadgeCheck />
          </span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default FooterList