import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative flex justify-center w-full px-4 py-6 text-white bg-gray-900 ">
      <div className="flex gap-4 ">
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
      <div className="absolute bottom-0 right-0 p-1">
        <h2>©2025 SnipScript</h2>
      </div>
    </footer>
  );
};

export default Footer;
