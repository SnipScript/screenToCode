import { Link } from "react-router-dom";
import CommonContainer from "../../common/CommonContainer";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-auto overflow-hidden text-center text-white bg-gray-900 ">
      <CommonContainer>
        <div className="flex flex-wrap justify-center gap-4 ">
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/refund" className="hover:underline">
            Refund & Dispute Policy
          </Link>
          <Link to="/faqs" className="hover:underline">
            FAQs
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>

        <p className="pt-2 text-sm text-gray-400 ">
          Powered by
          <a
            className="px-2 underline"
            href="https://github.com/abi/screenshot-to-code"
            target="_blank"
          >
            screenshot-to-code
          </a>
          – Open-source project by Abi
        </p>
      </CommonContainer>
    </footer>
  );
};

export default Footer;
