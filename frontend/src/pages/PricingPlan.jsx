import React, { useEffect, useState } from "react";
import Trusted from "../section/Homepage/Trusted";
import { BsCheck } from "react-icons/bs";
import CommonContainer from "../common/CommonContainer";
import CommonSpace from "../common/CommonSpace";
import PricingButton from "../section/price/PricingButton";
import SapceBottom from "../common/SapceBottom";
import CommonHeader from "../common/CommonHeader";
import axios from "axios";
import Cookies from "js-cookie";
const pricingPlans = [
  {
    name: "Free Plan",
    price: "$0",
    period: "month",
    id: 1,
    features: [
      "5 conversions/month",
      "Basic HTML & CSS only",
      "No AI Editor",
      "Watermarked output",
      "Cannot download or save generated files",
      "Can generate unlimited previews before conversion",
    ],
  },

  {
    name: "Basic Plan",
    price: { monthly: "$10", yearly: "$5" },
    id: 2,
    period: "month",
    features: [
      "50 conversions",
      "Full framework support",
      "AI-powered editor (limited)",
      "No watermark",
    ],
  },
  {
    name: "Pro Plan",
    price: { monthly: "$20", yearly: "$10" },
    id: 3,
    period: "month",
    features: [
      "150 conversions",
      "AI-powered editor",
      "Priority processing",
      "No watermark",
    ],
  },
  // {
  //   name: "Business Plan",
  //   price: { monthly: "$40", yearly: "$20" },
  //   period: "month",
  //   features: ["500 conversions", "AI-powered editor", "Priority processing", "No watermark"],
  // },
  // {
  //   name: "Pay-As-You-Go",
  //   price: "$15",
  //   period: "one-time",
  //   features: ["100 conversions", "AI-powered editor", "Priority processing", "No watermark"],
  // },
];

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const token = Cookies.get("accessToken");

  const [data, setData] = useState(null);
  const baseURL = "https://bguess-django.onrender.com/api/packages/";

  useEffect(() => {
    axios
      .get(baseURL, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const subscribe = async (id) => {
    const { data } = await axios.post(
      `https://bguess-django.onrender.com/api/checkout/${id}/`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("data", data);
    if (data) {
      window.location.href = data.checkout_url;
    }
  };

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
            />
            <div className="grid w-full max-w-6xl grid-cols-1 gap-6 py-10 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {pricingPlans.map((item, index) => (
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
                    {typeof item.price === "string"
                      ? item.price
                      : billingCycle === "monthly"
                      ? item.price.monthly
                      : item.price.yearly}
                    <span className="text-lg">/{item.period}</span>
                  </p>
                  <div className="flex flex-col gap-2">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 ">
                        <div className="text-4xl text-white rounded-full group-hover:text-grayColor bg-grayColor group-hover:bg-white w-max">
                          <span>
                            <BsCheck />
                          </span>
                        </div>
                        <p className="text-lg font-medium ">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      subscribe(item.id);
                    }}
                    className="self-center px-10 py-3 text-white rounded-full bg-grayColor group-hover:bg-white group-hover:text-grayColor w-max "
                  >
                    Subscribe
                  </button>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-center">
            Every code generation and edit uses 1 credit. Cancel your
            subscription at any time.
            <br />
            <a href="#" className="text-blue-600">
              For more information, visit our FAQs.
            </a>
          </p>
        </CommonSpace>
        <SapceBottom>
          <Trusted title="Trusted by developers and companies worldwide" />
        </SapceBottom>
      </CommonContainer>
    </div>
  );
};

export default PricingPage;
