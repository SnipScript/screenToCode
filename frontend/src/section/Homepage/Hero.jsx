import CommonContainer from "../../common/CommonContainer";
import Button from "../../components/ui/Button";
import Trusted from "./Trusted";
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
            <Trusted />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row ">
            <Button className="px-6 py-3 text-lg transition-all rounded-xl">
              Upload Screenshot
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3 text-lg transition-all rounded-xl"
            >
              Enter Website URL
            </Button>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default Hero;
