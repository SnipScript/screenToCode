import React from 'react'
import microsoft from "../../assets/microsoft.png";
import amazon from "../../assets/amazon.png";
import google from "../../assets/google.png";
import meta from "../../assets/meta.png";
import openai from "../../assets/openai.png";
import github from "../../assets/github.png";
import nvidia from "../../assets/nvidia.png";
import huggingface from "../../assets/huggingface.svg";
import adobe from "../../assets/adobe.png";
import figma from "../../assets/figma.png";
import mit from "../../assets/mit.png";
import stanford from "../../assets/stanford.png";

const company = [
  {
    img: microsoft,
    label: "microsoft",
  },
  {
    img: amazon,
    label: "amazon",
  },
  {
    img: google,
    label: "google",
  },
  {
    img: meta,
    label: "meta",
  },
  {
    img: openai,
    label: "openai",
  },
  {
    img: github,
    label: "github",
  },
  {
    img: nvidia,
    label: "nvidia",
  },
  {
    img: huggingface,
    label: "huggingface",
  },
  {
    img: adobe,
    label: "adobe",
  },
  {
    img: figma,
    label: "figma",
  },
  {
    img: mit,
    label: "mit",
  },
  {
    img: stanford,
    label: "stanford",
  },
];
const Trusted = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <h2 className="text-2xl font-semibold text-grayColor">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4 ">
        {company.map((company, index) => (
          <img
            key={index}
            src={company.img}
            alt={company}
            className="cursor-pointer max-w-8"
            title={company.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Trusted