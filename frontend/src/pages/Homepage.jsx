import Priceing from "../section/Homepage/Priceing";
import Work from "../section/Homepage/Work";
import Trusted from "../section/Homepage/Trusted";
import Features from "../section/Homepage/Features";
import CTA from "../section/Homepage/CTA";
import Hero from "../section/Homepage/Hero";

const Homepage = () => {
  return (
    <div className="min-h-screen text-gray-900 bg-gray-100">
      <Hero />
      <Trusted />
      <Work />
      <Features />
      <Priceing />
      <CTA />
    </div>
  );
};

export default Homepage;
