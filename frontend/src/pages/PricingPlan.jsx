import React, { useEffect, useState } from "react";
import Trusted from "../section/Homepage/Trusted";
import { BsCheck, BsCheckLg } from "react-icons/bs";
import CommonContainer from "../common/CommonContainer";
import CommonSpace from "../common/CommonSpace";
import PricingButton from "../section/price/PricingButton";
import SapceBottom from "../common/SapceBottom";
import CommonHeader from "../common/CommonHeader";
import axios from "axios";
import Cookies from "js-cookie";
import Loading from "../section/Homepage/Loading";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const PricingPage = () => {
  const list = new Array(5).fill(null);
  const [billingCycle, setBillingCycle] = useState("yearly");
  const baseurl = process.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = Cookies.get("accessToken");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${baseurl}/packages/`);
      setData(res.data.data);
    } catch (error) {
      console.log("Data fetching error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const subscribe = async (id) => {
    if (!token) {
      return toast("🔒 You need to log in before selecting a plan");
    }
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${baseurl}/checkout/${id}/`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (data) {
        window.location.href = data.checkout_url;
      }
    } catch (error) {
      console.log("subscribe fetching error", error);
    } finally {
      setLoading(false);
    }
  };

  const [filterData, setFilterData] = useState([]);
  const applyFilter = () => {
    if (data) {
      setFilterData(
        data?.filter((item) => {
          return item.discount == "50";
        })
      );
    } else {
      setFilterData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      applyFilter();
    }
  }, [data]);

  return (
    <div className="min-h-screen bg-gray-100 text-grayColor font-Nunito">
      <CommonContainer>
        <CommonSpace>
          <div className="flex flex-col items-center w-full gap-4 ">
            <CommonHeader> Choose the right plan for you</CommonHeader>

            <p className="text-lg text-center">
              Flexible pricing plans tailored for developers, businesses, and
              enterprises.
            </p>
            <PricingButton
              billingCycle={billingCycle}
              setBillingCycle={setBillingCycle}
              applyFilter={applyFilter}
              setFilterData={setFilterData}
              data={data}
            />
            <div className="grid w-full max-w-6xl grid-cols-1 gap-6 py-10 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {isLoading
                ? list.map((item, i) => <Loading key={i} />)
                : filterData
                    ?.sort((a, b) => a.order - b.order)
                    ?.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white shadow-md  flex flex-col gap-6  text-grayColor hover:bg-grayColor rounded-xl hover:translate-y-[-10px]  duration-500  hover:text-white px-6 py-8 group transition-all cursor-pointer  "
                      >
                        <div>
                          <CommonHeader className="text-start">
                            {item.name}
                          </CommonHeader>

                          {/* <p className="text-xl font-medium">
                      {plan.period === "one-time"
                        ? "One-time purchase"
                        : "Best for ongoing use"}
                    </p> */}
                        </div>

                        <p className="text-2xl font-semibold sm:text-4xl md:text-5xl">
                          $
                          {typeof item.price === "string"
                            ? item.price
                            : billingCycle === "monthly"
                            ? item.price.monthly
                            : item.price.yearly}
                          <span className="text-lg">/{item.package_type}</span>
                        </p>
                        <div className="flex flex-col gap-2">
                          {item.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2 ">
                              <div className="text-4xl text-white rounded-full group-hover:text-grayColor bg-grayColor group-hover:bg-white w-max">
                                <span>
                                  <BsCheck />
                                </span>
                              </div>
                              <p className="text-lg font-medium ">
                                {feature.name}
                              </p>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => {
                            subscribe(item.id);
                          }}
                          className="self-center px-10 py-3 text-white rounded-full bg-grayColor group-hover:bg-white group-hover:text-grayColor w-max "
                        >
                          {loading ? "processing..." : "Subscribe"}
                        </button>
                      </div>
                    ))}
            </div>
          </div>
          <p className="text-sm text-center">
            Every code generation and edit uses 1 credit. Cancel your
            subscription at any time.
            <br />
            <Link to={"/faqs"} className="text-blue-600">
              For more information, visit our FAQs.
            </Link>
          </p>
        </CommonSpace>
        <SapceBottom>
          <Trusted title="Trusted by developers and companies worldwide" />
        </SapceBottom>
        <Toaster position="top-right" />
      </CommonContainer>
    </div>
  );
};

export default PricingPage;
