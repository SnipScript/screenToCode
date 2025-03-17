import Work from "../section/Homepage/Work";
import Features from "../section/Homepage/Features";
import CTA from "../section/Homepage/CTA";
import Hero from "../section/Homepage/Hero";
import Priceing from "../section/Homepage/Pricing";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const Homepage = () => {
  const token = Cookies.get("accessToken");

  const [data, setData] = useState(null);
  const baseURL = "https://bguess-django.onrender.com/api/packages/";

  useEffect(() => {
    axios
      .get(baseURL, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setData(response.data);
      });
  }, []);
  return (
    <div className="text-gray-900 bg-gray-100 font-Nunito">
      <Hero />
      <Work />
      <Features />
      <Priceing data={data} />
      <CTA />
    </div>
  );
};

export default Homepage;
