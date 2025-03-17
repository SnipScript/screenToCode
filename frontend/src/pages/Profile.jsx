import React from "react";
import CommonContainer from "../common/CommonContainer";
import man from "../assets/man.jpg";
const Profile = () => {
  return (
    <div className="py-10">
      <CommonContainer>
        <div className="flex items-center justify-center w-full min-h-[calc(100vh-232px)] ">
          <div className="flex w-full max-w-3xl gap-5 p-4 bg-gray-200 rounded-lg ">
            <div className="flex flex-col  gap-2 pb-2 bg-white w-[320px] rounded-b-md">
              <img className="w-full mix-blend-multiply" src={man} alt="" />

              <h2 className="px-2 text-xl font-bold">My Profile</h2>
              <div className="flex items-center justify-between px-2">
                <h2 className="font-semibold ">Name</h2>
                <h2 className="font-semibold ">John Bugs</h2>
              </div>
              <div className="flex items-center justify-between px-2 ">
                <h2 className="font-semibold ">Email </h2>
                <h2 className="font-semibold ">john@gmail.com</h2>
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-5 ">
              <div className="w-full p-4 bg-white rounded-md">
                <h2 className="px-2 text-xl font-bold">My Subscription</h2>
                <div className="flex items-center justify-between px-2">
                  <h2 className="font-semibold ">Conversion</h2>
                  <h2 className="font-semibold ">10</h2>
                </div>
                <div className="flex items-center justify-between px-2 ">
                  <h2 className="font-semibold ">Plan name</h2>
                  <h2 className="font-semibold ">Basic</h2>
                </div>
              </div>
              <div className="w-full p-4 bg-white rounded-md">
                <h2 className="px-2 text-xl font-bold">My Subscription</h2>
                <div className="flex items-center justify-between px-2">
                  <h2 className="font-semibold ">Conversion</h2>
                  <h2 className="font-semibold ">10</h2>
                </div>
                <div className="flex items-center justify-between px-2 ">
                  <h2 className="font-semibold ">Conversion Left</h2>
                  <h2 className="font-semibold ">10</h2>
                </div>
              </div>
              <div className="w-full ">
                <button className="w-full px-4 py-2 text-xl text-white bg-green-500 rounded-full">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default Profile;
