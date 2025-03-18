import Work from "../section/Homepage/Work";
import Features from "../section/Homepage/Features";
import CTA from "../section/Homepage/CTA";
import Hero from "../section/Homepage/Hero";
import Pricing from "../section/Homepage/Pricing";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const Homepage = () => {
  const token = Cookies.get("accessToken");
  const baseurl = process.env.VITE_BACKEND_URL;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${baseurl}/packages/`);
      setData(res.data);
    } catch (error) {
      console.log("Data fetching error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="text-gray-900 bg-gray-100 font-Nunito">
      <Hero />
      <Work />
      <Features />
      <Pricing data={data} isLoading={isLoading} />
      <CTA />
    </div>
  );
};

export default Homepage;
