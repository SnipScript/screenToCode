import React from "react";
import Paragraph from "./Paragraph";
import FooterList from "./FooterList";
import CommonContainer from "../../common/CommonContainer";
import { GoDotFill } from "react-icons/go";

const About = () => {
  const list = {
    mission: [
      "Automatically generate HTML, CSS, or framework-specific code from website screenshots",
      "Choose from multiple output formats including Tailwind CSS, Bootstrap, React, Vue, Angular, and more",
      "Use up to 5 conversions per month on the free plan",
      "Unlock unlimited conversions and enhanced code optimization with a paid subscription",
    ],
    choose: [
      "Reliable, AI-enhanced code generation that saves time and reduces repetition",
      "Flexible support for popular frontend frameworks and libraries",
      "Accessible to non-developers and designers who want to experiment with code",
      "Suitable for beginners, yet powerful enough for experienced devs and product teams",
    ],
    roadmap: [
      "Real-time AI-assisted editing tools",
      "Smarter responsiveness and accessibility detection",
      "Expanded format support and styling customization",
      "Figma integration to convert code into editable design files",
    ],
  };

  return (
    <CommonContainer>
      <div className="flex flex-col max-w-5xl gap-4 pt-4 pb-10">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">About SnipScript.ai</h2>
          <p>
            SnipScript.ai is an AI-powered platform that converts website
            screenshots into clean, structured, and editable HTML, CSS, and
            framework-specific code. Whether you're a developer streamlining
            your workflow or a designer exploring front-end implementation,
            SnipScript.ai provides a fast and reliable way to bridge visual
            design and functional code.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Our Mission</h2>
          <p>
            Our goal is to simplify and accelerate front-end development by
            translating visual components into usable code. SnipScript.ai helps
            reduce manual work, improve consistency, and support teams in
            turning ideas into interfaces faster.
          </p>
        </div>
        <FooterList
          title={"What You Can Do with SnipScript.ai"}
          list={list.mission}
        />
        <FooterList
          title={"Why Developers and Designers Use SnipScript.ai"}
          list={list.choose}
        />
        <FooterList
          title={"What’s Coming Next"}
          subtile={
            "We’re continuously building new features to support your workflow, including:"
          }
          list={list.roadmap}
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">What People Are Saying</h2>
          <p>
            SnipScript.ai helps me move faster from design to
            development—without needing to write every line of code manually.”–
            Sam R., UI Designer <br />
            “It saved me hours by instantly converting my mockups into working
            Tailwind components.”– Alex W., Frontend Developer
          </p>
        </div>
        support@snipscript.ai
        <div>
          <h4 className="text-lg font-medium">Get in Touch</h4>

          <div>
            <p>
              Questions, feedback, or partnership inquiries? We’d love to hear
              from you.
            </p>
            <span>
              📧
              <a
                className="ml-1 text-blue-500 underline"
                href="mailto:support@snipscript.ai"
              >
                support@snipscript.ai
              </a>
            </span>
          </div>
        </div>
      </div>
    </CommonContainer>
  );
};

export default About;
