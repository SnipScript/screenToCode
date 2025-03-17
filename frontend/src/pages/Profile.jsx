import React from "react";
import CommonContainer from "../common/CommonContainer";
import man from "../assets/man.jpg";
import { Link } from "react-router-dom";
const Profile = () => {
  const user = "john@gmail.com";
  return (
    <CommonContainer>
      <div className=" max-sm:py-10 font-Nunito">
        <div className="flex items-center justify-center w-full sm:min-h-screen ">
          <div>
            <h2 className="py-4 text-3xl font-bold text-center sm:text-6xl ">
              Your profile
            </h2>
            <div className="flex flex-col w-full max-w-4xl gap-5 p-4 bg-gray-200 rounded-lg sm:flex-row ">
              <div className="flex flex-col  gap-2 pb-2 bg-white w-[320px] rounded-md">
                {/* <img className="w-full mix-blend-multiply" src={man} alt="" /> */}

                <div className="flex items-center justify-between px-2 ">
                  <h2 className="px-2 text-xl font-bold">My Profile</h2>
                  <div className="flex items-center justify-center w-16 h-16 m-2 text-white bg-gray-400 rounded-full">
                    <p className="p-1 text-4xl uppercase ">
                      {user.split("")[0]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 px-2 ">
                  <h2 className="font-semibold ">Plan name</h2>
                  <h2 className="text-xl font-bold ">Basic</h2>
                </div>

                <div className="flex items-center justify-between gap-2 px-2 ">
                  <h2 className="font-semibold ">Email </h2>
                  <h2 className="font-semibold ">john@gmail.com</h2>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-5 ">
                <div className="w-full p-4 bg-white rounded-md">
                  <h2 className="px-2 text-xl font-bold">Subscription start</h2>
                  <div className="flex items-center justify-between gap-2 px-2">
                    <h2 className="font-semibold ">Subscription date</h2>
                    <h2 className="font-semibold ">22-10-1995</h2>
                  </div>
                  <div className="flex items-center justify-between gap-2 px-2">
                    <h2 className="font-semibold ">Conversion</h2>
                    <h2 className="font-semibold ">150</h2>
                  </div>
                </div>
                <div className="w-full p-4 bg-white rounded-md">
                  <h2 className="px-2 text-xl font-bold">Subscription end</h2>
                  <div className="flex items-center justify-between gap-2 px-2">
                    <h2 className="font-semibold ">Subscription end</h2>
                    <h2 className="font-semibold ">22-10-1995</h2>
                  </div>
                  <div className="flex items-center justify-between gap-2 px-2 ">
                    <h2 className="font-semibold ">Conversion</h2>
                    <h2 className="font-semibold ">10</h2>
                  </div>
                </div>
                <Link to={"/pricing"} className="w-full ">
                  <button className="w-full px-4 py-2 text-xl text-white bg-green-500 rounded-full">
                    Upgrade Plan
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonContainer>
  );
};

export default Profile;
