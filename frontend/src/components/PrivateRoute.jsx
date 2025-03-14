import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token, navigate]); // This will run whenever token changes

  if (!token) {
    return null; // Or a loading spinner or placeholder while redirecting
  }

  return children;
};

export default PrivateRoute;
