import React from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
const price = [
  {
    plan: "Free",
    price: "$0/mo",
    features: [
      "5 conversions/month",
      "Basic HTML & CSS only",
      "No AI Editor",
      "Watermarked output",
    ],
  },
  {
    plan: "Basic",
    price: "$10/mo",
    features: [
      "50 conversions",
      "Full framework support",
      "AI-powered editor (limited)",
      "No watermark",
    ],
  },
  {
    plan: "Pro",
    price: "$20/mo",
    features: [
      "150 conversions",
      "AI-powered editor",
      "Priority processing",
      "No watermark",
    ],
  },
  {
    plan: "Business",
    price: "$40/mo",
    features: [
      "500 conversions",
      "AI-powered editor",
      "Priority processing",
      "No watermark",
    ],
  },
  {
    plan: "Pay-As-You-Go",
    price: "$15 for 100 conversions",
    features: [
      "One-time purchase",
      "AI-powered editor",
      "Priority processing",
      "No watermark",
    ],
  },
];
const Priceing = () => {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center">Pricing Plans</h2>
      <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto mt-10 md:grid-cols-3">
        {price.map((item, index) => (
          <Card key={index} className="p-6 text-center">
            <h3 className="text-2xl font-bold">{item.plan}</h3>
            <p className="mt-2 text-xl text-gray-600">{item.price}</p>
            <ul className="mt-4 text-gray-600">
              {item.features.map((feature, i) => (
                <li key={i} className="mt-1">
                  ✔ {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-6">Get Started</Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Priceing;
