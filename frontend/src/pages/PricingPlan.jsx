import React, { useState } from "react";
import  Button  from "../components/ui/Button";
import pricingPlans from "../section/price/pricingPlans";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="flex flex-col items-center min-h-screen p-8 text-gray-900 bg-gray-100">
      {/* Header */}
      <h1 className="mb-4 text-4xl font-bold">Choose the Right Plan for You</h1>
      <p className="mb-8 text-lg text-gray-600">
        Flexible pricing plans tailored for developers, businesses, and
        enterprises.
      </p>

      {/* Billing Toggle */}
      <div className="flex items-center gap-4 mb-8">
        <Button
          className={`px-6 py-2 ${
            billingCycle === "monthly"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </Button>
        <Button
          className={`px-6 py-2 ${
            billingCycle === "yearly"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly (50% Off)
        </Button>
      </div>
      <div className="grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="p-6 text-center bg-white rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="mt-2 text-gray-600">
              {plan.period === "one-time"
                ? "One-time purchase"
                : "Best for ongoing use"}
            </p>
            <p className="mt-4 text-4xl font-bold">
              {typeof plan.price === "string"
                ? plan.price
                : billingCycle === "monthly"
                ? plan.price.monthly
                : plan.price.yearly}
              <span className="text-lg text-gray-600">/{plan.period}</span>
            </p>
            <ul className="mt-4 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="mt-1">
                  ✔ {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full px-6 py-3 mt-6 text-white bg-black">
              Subscribe
            </Button>
          </div>
        ))}
      </div>

      {/* FAQ & Cancellation Notice */}
      <p className="mt-8 text-sm text-gray-500">
        Every code generation and edit uses 1 credit. Cancel your subscription
        at any time.
        <br />
        <a href="#" className="text-blue-600">
          For more information, visit our FAQs.
        </a>
      </p>

      {/* Trusted by Companies */}
      <div className="flex flex-col items-center mt-10">
        <p className="text-lg text-gray-600">
          Trusted by developers and companies worldwide
        </p>
        <div className="flex gap-6 mt-4">
          <img src="/logos/microsoft.svg" alt="Microsoft" className="h-6" />
          <img src="/logos/amazon.svg" alt="Amazon" className="h-6" />
          <img src="/logos/mit.svg" alt="MIT" className="h-6" />
          <img src="/logos/stanford.svg" alt="Stanford" className="h-6" />
          <img src="/logos/bytedance.svg" alt="ByteDance" className="h-6" />
          <img src="/logos/baidu.svg" alt="Baidu" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;