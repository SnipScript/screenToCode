import CommonContainer from "../../common/CommonContainer";
import CommonHeader from "../../common/CommonHeader";
import CommonSpace from "../../common/CommonSpace";
import Button from "../../components/ui/Button";

const CTA = () => {
  return (
    <section className="text-center text-white bg-gray-800">
      <CommonContainer>
        <CommonSpace>
          <CommonHeader>
            Start Converting Screenshots & Websites to Code Today!
          </CommonHeader>

          <p className="pt-4 text-lg">
            Try it free or upgrade for full access.
          </p>
          <Button className="px-6 py-3 mt-6 text-lg text-white bg-green-700 hover:bg-green-800 rounded-xl">
            Try for Free
          </Button>
        </CommonSpace>
      </CommonContainer>
    </section>
  );
};

export default CTA;
