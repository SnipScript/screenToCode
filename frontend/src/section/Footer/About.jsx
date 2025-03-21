import React from "react";
import Paragraph from "./Paragraph";
import FooterList from "./FooterList";
import CommonContainer from "../../common/CommonContainer";
import { GoDotFill } from "react-icons/go";

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
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">About SnipScript.ai</h2>
          <p>
            <b> SnipScript.ai</b> is an <b>AI-powered tool</b> designed to
            simplify the process of <b>converting website screenshots</b> into
            structured, editable <b>HTML, CSS, and framework-specific code.</b>{" "}
            Whether you're a <b>developer</b> looking to quickly extract design
            elements or a <b>beginner</b> experimenting with front-end
            development, <b>SnipScript.ai</b> provides{" "}
            <b>a seamless, automated solution.</b>
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Our Mission</h2>
          <p>
            We aim to <b>bridge the gap between design and development</b> by
            offering an <b>easy-to-use tool</b> that translates{" "}
            <b>visual elements into functional code.</b> Our goal is to help
            users <b>speed up their workflow</b>,{" "}
            <b>enhance productivity, and reduce manual effort</b> required to{" "}
            <b>recreate UI components.</b>
          </p>
        </div>

        <div>
          <h4 className="text-lg font-medium">Key Features</h4>
          <div>
            <p>
              <b>✔ Convert website screenshots</b> into structured{" "}
              <b>HTML, CSS, and supported frameworks</b> while optimizing for{" "}
              <b>clean, maintainable code.</b>
            </p>
            <p>
              ✔ Choose from <b>multiple output formats,</b> including{" "}
              <b>Tailwind, Bootstrap, React, Vue, Angular, and more.</b>
            </p>
            <p>
              <b> ✔ Free users get 5 conversions per month</b> with{" "}
              <b> basic HTML & CSS.</b>
            </p>
            <p>
              <b>✔ Paid users</b> unlock <b>unlimited conversions</b> and{" "}
              <b>AI-assisted code refinement.</b>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium">Why Choose SnipScript.ai?</h4>
          <div>
            <p>
              <b>✔ AI-driven accuracy </b>for generating{" "}
              <b>clean, structured code.</b>
            </p>
            <p>
              ✔ <b>Supports multiple frameworks </b>for{" "}
              <b>flexible development.</b>
            </p>
            <p>
              <b> ✔ No manual coding required—</b>perfect for{" "}
              <b>designers and non-developers</b> to bridge the gap between{" "}
              <b>design and code.</b>
            </p>
            <p>
              <b>✔ Beginner-friendly,</b> yet{" "}
              <b>powerful for advanced developers.</b>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-medium">Future Roadmap</h4>
          <p>
            We are continuously improving <b>SnipScript.ai</b> and planning to
            introduce:
          </p>
          <div>
            <p>
              <b>🚀 AI-assisted live editing.</b>
            </p>
            <p>
              <b>📏 Improved responsiveness & accessibility detection.</b>
            </p>
            <p>
              <b>🎨 More output formats & custom styling options.</b>
            </p>
            <p>
              <b>🖌️ Figma Integration – </b> Convert generated code into{" "}
              <b>Figma design files</b> for{" "}
              <b>further editing and prototyping.</b>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-medium"> User Testimonials</h4>

          <div>
            <p>
              <b>📢 "SnipScript.ai </b> lets me bridge the gap between{" "}
              <b>design and development</b> without writing code!"{" "}
              <b>– Sam R., UI Designer</b>
            </p>
            <p>
              <b>📢 "SnipScript.ai</b> saved me <b> hours of manual coding</b>{" "}
              by instantly converting my{" "}
              <b>
                UI mockups into production-ready Tailwind CSS components!" –
                Alex W., Frontend Developer
              </b>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-medium">Contact Us</h4>

          <div>
            <p>
              <b>For inquiries, partnerships, or support,</b> reach out to us at{" "}
              <a
                className="text-blue-500 underline"
                href="mailto:support@snipscript.ai"
              >
                support@snipscript.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </CommonContainer>
  );
};

export default About;
