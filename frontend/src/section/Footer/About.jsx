import React from "react";
import Paragraph from "./Paragraph";
import FooterList from "./FooterList";
import CommonContainer from "../../common/CommonContainer";

const About = () => {
  const list = {
    mission: [
      "Convert website screenshots into structured HTML, CSS, and supported frameworks, while optimizing for clean, maintainable code.",
      "Choose from multiple output formats, including Tailwind, Bootstrap, React, Vue, Angular, and more.",
      "Free users get 5 conversions per month with basic HTML & CSS.",
      "Paid users unlock unlimited conversions and AI-assisted code refinement.",
    ],
    choose: [
      "AI-driven accuracy for generating clean, structured code.",
      "Supports multiple frameworks for flexible development.",
      "No manual coding required—perfect for designers and non-developers to bridge the gap between design and code.",
      "Beginner-friendly, yet powerful for advanced developers.",
    ],
    roadmap: [
      "AI-assisted live editing.",
      "Improved responsiveness & accessibility detection.",
      "More output formats & custom styling options.",
      "Figma Integration – Convert generated code into Figma design files for further editing and prototyping.",
    ],
  };
  return (
    <CommonContainer>
      <div className="flex flex-col max-w-5xl gap-4 pt-4 pb-10">
        <Paragraph
          title={"About SnipScript.ai"}
          des={
            "SnipScript.ai is an AI-powered tool designed to simplify the process of converting website screenshots into structured, editable HTML, CSS, and framework-specific code. Whether you're a developer looking to quickly extract design elements or a beginner experimenting with front-end development, SnipScript.ai provides a seamless, automated solution."
          }
        />
        <Paragraph
          title={"Our Mission"}
          des={
            "We aim to bridge the gap between design and development by offering an easy-to-use tool that translates visual elements into functional code. Our goal is to help users speed up their workflow, enhance productivity, and reduce the manual effort required to recreate UI components."
          }
        />
        <FooterList title={"Key Features"} list={list.mission} />

        <div>
          <h4 className="text-lg font-semibold">Powered by Open Source</h4>
          <p>
            SnipScript.ai integrates
            <a
              className="px-1 text-blue-500 underline"
              href="https://github.com/abi/screenshot-to-code"
              target="_blank"
              title="https://github.com/abi/screenshot-to-code"
            >
              screenshot-to-code
            </a>
            , an open-source project by Abi, to enhance its core functionality.
            We believe in the power of open-source development and contribute
            back to improving AI-driven code generation projects whenever
            possible.
          </p>
        </div>

        <FooterList title={"Why Choose SnipScript.ai?"} list={list.choose} />
        <FooterList title={"Future Roadmap"} list={list.roadmap} />
        <Paragraph
          title={"User Testimonials"}
          des={
            "SnipScript.ai lets me bridge the gap between design and development without writing code! "
          }
          bold={"– Sam R., UI Designer"}
        />
        <Paragraph
          title={"UI Designer "}
          des={
            "SnipScript.ai saved me hours of manual coding by instantly converting my UI mockups into production-ready Tailwind CSS components!"
          }
          bold={"– Alex W. ,Frontend Developer"}
        />
        <Paragraph title={""} des={""} bold={""} />

        <div>
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p>
            For inquiries, partnerships, or support, reach out to us at
            <a className="px-1 text-blue-500 underline">
              support@snipscript.ai.
            </a>
          </p>
        </div>
      </div>
    </CommonContainer>
  );
};

export default About;


