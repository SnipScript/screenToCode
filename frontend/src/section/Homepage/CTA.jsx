import CommonContainer from "../../common/CommonContainer";
import CommonSpace from "../../common/CommonSpace";
import Button from "../../components/ui/Button";

const CTA = () => {
  return (
    <section className="text-center text-white bg-gray-800">
      <CommonContainer>
        <CommonSpace>
          <h2 className="text-3xl font-bold">
            Start Converting Screenshots & Websites to Code Today!
          </h2>
          <p className="pt-4 text-lg">
            Try it free or upgrade for full access.
          </p>
          <Button className="px-6 py-3 mt-6 text-lg text-white bg-green-700 hover:bg-green-800">
            Try for Free
          </Button>
        </CommonSpace>
      </CommonContainer>
    </section>
  );
};

export default CTA;
