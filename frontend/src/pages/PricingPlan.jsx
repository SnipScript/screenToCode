import React, { useState } from "react";
import  Button  from "../components/ui/Button";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "month",
    features: ["5 conversions/month", "Basic HTML & CSS only", "No AI Editor", "Watermarked output"],
  },
  {
    name: "Basic",
    price: { monthly: "$10", yearly: "$5" },
    period: "month",
    features: ["50 conversions", "Full framework support", "AI-powered editor (limited)", "No watermark"],
  },
  {
    name: "Pro",
    price: { monthly: "$20", yearly: "$10" },
    period: "month",
    features: ["150 conversions", "AI-powered editor", "Priority processing", "No watermark"],
  },
  {
    name: "Business",
    price: { monthly: "$40", yearly: "$20" },
    period: "month",
    features: ["500 conversions", "AI-powered editor", "Priority processing", "No watermark"],
  },
  {
    name: "Pay-As-You-Go",
    price: "$15",
    period: "one-time",
    features: ["100 conversions", "AI-powered editor", "Priority processing", "No watermark"],
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">Choose the Right Plan for You</h1>
      <p className="text-lg text-gray-600 mb-8">Flexible pricing plans tailored for developers, businesses, and enterprises.</p>

      {/* Billing Toggle */}
      <div className="flex items-center gap-4 mb-8">
        <Button
          className={`px-6 py-2 ${billingCycle === "monthly" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </Button>
        <Button
          className={`px-6 py-2 ${billingCycle === "yearly" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly (50% Off)
        </Button>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="text-gray-600 mt-2">{plan.period === "one-time" ? "One-time purchase" : "Best for ongoing use"}</p>
            <p className="text-4xl font-bold mt-4">
              {typeof plan.price === "string"
                ? plan.price
                : billingCycle === "monthly"
                ? plan.price.monthly
                : plan.price.yearly}
              <span className="text-lg text-gray-600">/{plan.period}</span>
            </p>
            <ul className="mt-4 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="mt-1">✔ {feature}</li>
              ))}
            </ul>
            <Button className="mt-6 bg-black text-white px-6 py-3 w-full">Subscribe</Button>
          </div>
        ))}
      </div>

      {/* FAQ & Cancellation Notice */}
      <p className="text-sm text-gray-500 mt-8">
        Every code generation and edit uses 1 credit. Cancel your subscription at any time.
        <br />
        <a href="#" className="text-blue-600">For more information, visit our FAQs.</a>
      </p>

      {/* Trusted by Companies */}
      <div className="mt-10 flex flex-col items-center">
        <p className="text-gray-600 text-lg">Trusted by developers and companies worldwide</p>
        <div className="mt-4 flex gap-6">
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
}
