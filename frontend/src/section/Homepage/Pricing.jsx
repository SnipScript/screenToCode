import React, { useState } from "react";
import Card from "../../components/ui/Card";
import CommonSpace from "../../common/CommonSpace";
import { BsCheck } from "react-icons/bs";
import CommonContainer from "../../common/CommonContainer";
import CommonHeader from "../../common/CommonHeader";
import { IoClose } from "react-icons/io5";

const price = [
  {
    plan: "Free Plan",
    price: "$0/mo",
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
    plan: "Basic Plan",
    price: "$10/mo",
    features: [
      "50 conversions",
      "Full framework support",
      "AI-powered editor (limited)",
      "No watermark",
    ],
  },
  {
    plan: "Pro Plan",
    price: "$20/mo",
    features: [
      "150 conversions",
      "AI-powered editor",
      "Priority processing",
      "No watermark",
    ],
  },
  {
    plan: "Business Plan",
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
  const [conversion, setConversion] = useState(false);
  return (
    <CommonContainer>
      <CommonSpace>
        <CommonHeader className="">Pricing Plans</CommonHeader>
        <div
          className="py-2 text-center cursor-pointer"
          onClick={() => {
            setConversion(true);
          }}
        >
          What is a conversion ?
        </div>
        <div className="flex items-center justify-center pb-10">
          {conversion && (
            <div className="p-2 rounded-md shadow max-w-96">
              <div
                onClick={() => {
                  setConversion(false);
                }}
                className="ml-auto text-xl cursor-pointer w-fit"
              >
                <IoClose />
              </div>
              📷 ➡️ 💻 A conversion refers to turning a website screenshot into
              editable HTML & CSS (or another selected format).Each time you
              generate code from an image, it counts as one conversion.
              <p></p>
            </div>
          )}
        </div>
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
          {price.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col gap-6  text-grayColor hover:bg-grayColor rounded-xl hover:translate-y-[-10px]  duration-500  hover:text-white px-6 py-8 group transition-all cursor-pointer "
            >
              <CommonHeader className="text-start">{item.plan}</CommonHeader>
              <CommonHeader className="font-semibold text-start">
                {item.price}
              </CommonHeader>

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

              <button className="self-center px-10 py-3 text-white rounded-full bg-grayColor group-hover:bg-white group-hover:text-grayColor w-max ">
                Get Started
              </button>
            </Card>
          ))}
        </div>
      </CommonSpace>
    </CommonContainer>
  );
};

export default Priceing;
