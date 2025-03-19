import CommonContainer from "../../common/CommonContainer";
import Button from "../../components/ui/Button";
import Trusted from "./Trusted";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="py-16 bg-white shadow-md sm:py-20">
      <CommonContainer>
        <div className="flex flex-col items-center justify-center w-full gap-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="flex flex-col items-center justify-between gap-4">
              <h1 className="text-4xl font-bold ">
                Convert Screenshots & Live Websites to Clean Code Instantly
              </h1>
              <p className="text-2xl font-semibold text-grayColor">
                Upload a UI screenshot or enter a website URL, and let AI
                generate HTML, Tailwind, React, Vue, and more—ready to use.
              </p>
            </div>
            <Trusted
              title="The #1 tool trusted by developers, designers, and industry leaders to
        transform UI into clean, production-ready code."
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row ">
            <Link
              to="/app"
              className="px-6 py-3 text-lg text-white transition-all rounded-xl bg-grayColor"
            >
              Upload Screenshot
            </Link>
            <Link
              to="/app"
              variant="outline"
              className="px-6 py-3 text-lg text-white transition-all rounded-xl bg-grayColor"
            >
              Enter Website URL
            </Link>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default Hero;
