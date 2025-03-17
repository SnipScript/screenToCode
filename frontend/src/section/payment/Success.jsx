import React from "react";
import successImg from "../../assets/success.gif";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className="items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-slate-200 ">
        <img
          className="mix-blend-multiply"
          width={150}
          height={150}
          src={successImg}
        />
        <p className="text-xl font-bold text-green-600">Payment Successfully</p>
        <p className="text-sm font-bold text-green-600">
          We appreciate your subscription!
        </p>

        <Link
          to={"/"}
          className="px-3 py-1 my-4 text-green-600 transition-all border-2 border-green-600 rounded hover:bg-green-600 hover:text-white"
        >
          Go Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Success;
