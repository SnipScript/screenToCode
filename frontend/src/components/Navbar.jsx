import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/sniplogo.png";
import CommonContainer from "../common/CommonContainer";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Cookies from "js-cookie";
const Navbar = () => {
  const token = Cookies.get("accessToken");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    Cookies.remove("accessToken");
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menu = [
    { label: "Home", link: "/" },
    { label: "App", link: "/app" },
    { label: "Pricing", link: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <CommonContainer>
        <div className="flex items-center justify-between w-full h-20 ">
          <Link to="/">
            <img className="cursor-pointer  max-w-32" src={logo} alt="snip" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-center space-x-4">
              {menu.map((item, i) => (
                <NavLink
                  className={`border-b  border-transparent font-medium transition-colors duration-200 text-grayColor`}
                  to={item.link}
                  key={i}
                >
                  {item.label}
                </NavLink>
              ))}
              {!token && (
                <NavLink
                  className={`border-b  border-transparent font-medium transition-colors duration-200 text-grayColor`}
                  to={"/auth"}
                  key={"/auth"}
                >
                  Login
                </NavLink>
              )}

              {token && (
                <NavLink
                  to="/profile"
                  className={`border-b  border-transparent font-medium transition-colors duration-200 text-grayColor `}
                >
                  Profile
                </NavLink>
              )}

              {token && (
                <button>
                  <a href="https://bguess-django-g8f5.onrender.com/dashboard/" target='_blank'>
                    Dashboard
                  </a>
                </button>
              )}
              {token && (
                <button
                  onClick={handleLogOut}
                  className={`border-b  border-transparent font-medium transition-colors duration-200 text-grayColor`}
                >
                  Logout
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <p className="text-2xl">
                {isMenuOpen ? <IoClose /> : <AiOutlineMenu />}
              </p>
            </button>
          </div>
        </div>
      </CommonContainer>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col gap-2 px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg sm:px-3">
            {menu.map((item, i) => (
              <NavLink
                className={`border-b   !border-transparent font-medium transition-colors duration-200 text-grayColor `}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                to={item.link}
                key={i}
              >
                {item.label}
              </NavLink>
            ))}
            {token && (
              <NavLink
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                to="/profile"
                className={`border-b  !border-transparent font-medium transition-colors duration-200 text-grayColor `}
              >
                Profile
              </NavLink>
            )}
            {token && (
              <button
                className="text-left"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <a href="https://bguess-django-g8f5.onrender.com/dashboard/" target='_blank'>
                  Dashboard
                </a>
              </button>
            )}

            {!token && (
              <NavLink
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className={`border-b  !border-transparent font-medium transition-colors duration-200 text-grayColor`}
                to={"/auth"}
                key={"/auth"}
              >
                Login
              </NavLink>
            )}
            {token && (
              <NavLink
                onClick={handleLogOut}
                className={`border-b  !border-transparent font-medium transition-colors duration-200 text-grayColor`}
              >
                Logout
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
