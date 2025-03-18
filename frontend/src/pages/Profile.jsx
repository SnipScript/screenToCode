import React, { useEffect, useState } from "react";
import CommonContainer from "../common/CommonContainer";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
const Profile = () => {
  const baseurl = process.env.VITE_BACKEND_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("accessToken");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${baseurl}/subscriptions/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(res.data);
    } catch (error) {
      console.log("Data fetching error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const subscribeCancel = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${baseurl}/subscriptions/cancel/${id}/`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Cancelled subscription successfully.");
      fetchData();
    } catch (error) {
      console.log("Subscribe cancel error", error);
      toast.error("Error cancelling subscription");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <CommonContainer>
      <div className="w-full font-Nunito">
        <div className="flex items-start justify-center w-full min-h-screen ">
          <div className="w-full">
            <h2 className="py-8 text-3xl font-bold text-center sm:text-6xl ">
              Your profile
            </h2>
            <div className="flex flex-col w-full mx-auto max-w-4xl lg:w-[800px] gap-5 p-4 bg-gray-200 rounded-lg sm:flex-row ">
              <div className="w-full flex flex-col  gap-2 pb-2 bg-white lg:w-[320px] rounded-md">
                <div className="flex items-center justify-between px-2 ">
                  <h2 className="px-2 text-xl font-bold">My Profile</h2>
                  <div className="flex items-center justify-center w-16 h-16 m-2 text-white bg-gray-400 rounded-full">
                    <p className="p-1 text-4xl uppercase ">
                      {data?.data?.user?.split("")[0]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 px-2 ">
                  <h2 className="font-semibold ">Plan name</h2>
                  <h2 className="text-xl font-bold ">{data?.data?.package}</h2>
                </div>

                <div className="flex items-center justify-between gap-2 px-2 ">
                  <h2 className="font-semibold ">Email </h2>
                  <h2 className="font-semibold ">{data?.data?.user}</h2>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-5 ">
                <div className="w-full p-4 bg-white rounded-md">
                  <h2 className="px-2 text-xl font-bold">Subscription start</h2>
                  <div className="flex items-center justify-between gap-2 px-2">
                    <h2 className="font-semibold ">Subscription date</h2>
                    <h2 className="font-semibold ">
                      {moment(data?.data?.start_date).format("MMM Do YY")}
                    </h2>
                  </div>
                  <div className="flex items-center justify-between gap-2 px-2">
                    <h2 className="font-semibold ">Conversion</h2>
                    <h2 className="font-semibold text-green-500 ">
                      {data?.data?.conversation_left}
                    </h2>
                  </div>
                </div>
                <div className="w-full p-4 bg-white rounded-md">
                  <h2 className="px-2 text-xl font-bold">Subscription end</h2>
                  <div className="flex items-center justify-between gap-2 px-2">
                    <h2 className="font-semibold ">Subscription end</h2>
                    <h2 className="font-semibold ">
                      {moment(data?.data?.end_date).format("MMM Do YY")}
                    </h2>
                  </div>
                  <div className="flex items-center justify-between gap-2 px-2 ">
                    <h2 className="font-semibold ">Conversion</h2>
                    <h2 className="font-semibold text-red-500">
                      {data?.data?.conversation_left}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 px-2 lg:flex-row ">
                  <div
                    onClick={() => {
                      subscribeCancel(data?.data?.id);
                    }}
                    className="w-full "
                  >
                    <button className="w-full px-4 py-2 text-xl text-white bg-red-500 rounded-full">
                      {loading ? "processing..." : " Cancel Plan"}
                    </button>
                  </div>
                  <Link to={"/pricing"} className="w-full ">
                    <button className="w-full px-4 py-2 text-xl text-white bg-green-500 rounded-full">
                      {isLoading ? "processing..." : "Upgrade Plan"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </CommonContainer>
  );
};

export default Profile;
