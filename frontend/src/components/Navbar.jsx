import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import CommonContainer from "../common/CommonContainer";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menu = [
    { label: "Home", link: "/" },
    { label: "App", link: "/app" },
    { label: "Pricing", link: "/pricing" },
    { label: "Login", link: "/auth" },
    { label: "Sign Up", link: "/auth" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <CommonContainer>
        <div className="flex items-center justify-between w-full h-16 ">
          <Link to="/" className="max-w-16">
            <img src={logo} alt="SnipScript" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex space-x-4">
              {menu.map((item, i) => (
                <NavLink
                  className={`border-b  border-transparent font-medium transition-colors duration-200 text-grayColor`}
                  to={item.link}
                  key={i}
                >
                  {item.label}
                </NavLink>
              ))}
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg sm:px-3">
            {menu.map((item, i) => (
              <Link
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.link)
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                to={item.link}
                key={i}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
