const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 text-center w-full mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/refund" className="hover:underline">Refund & Dispute Policy</a>
            <a href="/faqs" className="hover:underline">FAQs</a>
            <a href="/about" className="hover:underline">About</a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Powered by screenshot-to-code – Open-source project by Abi
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  