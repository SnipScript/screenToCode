import React from "react";
import cancelImg from "../../assets/cancel.gif";
import { Link } from "react-router-dom";
const Cancel = () => {
  return (
    <div className="items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-slate-200 ">
        <img
          className="mix-blend-multiply"
          width={150}
          height={150}
          src={cancelImg}
        />
        <p className="my-1 text-xl font-bold text-red-600">Payment Cancel</p>
        <p className="text-sm font-bold text-green-600">
          Try again to subscribe
        </p>
        <Link
          to={""}
          className="px-3 py-1 my-4 text-red-600 transition-all border-2 border-red-600 rounded hover:bg-red-600 hover:text-white"
        >
          Go Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
