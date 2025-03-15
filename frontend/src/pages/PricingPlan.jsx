import React, { useState } from "react";
import pricingPlans from "../section/price/pricingPlans";
import Trusted from "../section/Homepage/Trusted";
import { BsCheck } from "react-icons/bs";
import CommonContainer from "../common/CommonContainer";
import CommonSpace from "../common/CommonSpace";
import PricingButton from "../section/price/PricingButton";
import SapceBottom from "../common/SapceBottom";
import CommonHeader from "../common/CommonHeader";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

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
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md  flex flex-col gap-6  text-grayColor hover:bg-grayColor rounded-xl hover:translate-y-[-10px]  duration-500  hover:text-white px-6 py-8 group transition-all cursor-pointer  "
                >
                  <div>
                    <CommonHeader className="text-start">
                      {plan.name}
                    </CommonHeader>

                    <p className="text-xl font-medium">
                      {plan.period === "one-time"
                        ? "One-time purchase"
                        : "Best for ongoing use"}
                    </p>
                  </div>

                  <p className="text-2xl font-semibold sm:text-4xl md:text-5xl">
                    {typeof plan.price === "string"
                      ? plan.price
                      : billingCycle === "monthly"
                      ? plan.price.monthly
                      : plan.price.yearly}
                    <span className="text-lg">/{plan.period}</span>
                  </p>
                  <div className="flex flex-col gap-2">
                    {plan.features.map((feature, i) => (
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
                  <button className="self-center px-10 py-3 text-white rounded-full bg-grayColor group-hover:bg-white group-hover:text-grayColor w-max ">
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
