import React from 'react'
import Card from "../../components/ui/Card";
import CommonSpace from "../../common/CommonSpace";
import CommonContainer from "../../common/CommonContainer";
import { MdSupportAgent } from "react-icons/md";
import { GiArtificialHive } from "react-icons/gi";
import { TbLivePhoto } from "react-icons/tb";
import { PiApplePodcastsLogoFill } from "react-icons/pi";
import CommonHeader from "../../common/CommonHeader";

const support = [
  {
    title: "Supports multiple frameworks",
    icon: <MdSupportAgent />,
  },

  {
    title: "AI-powered live code editor",
    icon: <GiArtificialHive />,
  },

  {
    title: "Text prompt-to-code",
    icon: <TbLivePhoto />,
  },

  {
    title: "Live website to code conversion",
    icon: <PiApplePodcastsLogoFill />,
  },
];
const Features = () => {
  return (
    <section className="bg-gray-200">
      <CommonContainer>
        <CommonSpace>
          <CommonHeader className="pb-10"> Why Choose Us</CommonHeader>
          <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 text-grayColor ">
            {support.map((feature, index) => (
              <Card key={index} className="flex items-center gap-1 p-8 ">
                <span className="text-4xl">{feature.icon}</span>
                <h2 className="text-2xl ">{feature.title}</h2>
              </Card>
            ))}
          </div>
        </CommonSpace>
      </CommonContainer>
    </section>
  );
};

export default Features