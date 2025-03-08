import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"
import CommonContainer from "../common/CommonContainer";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <CommonContainer>
        <div className="flex items-center justify-between w-full h-16 ">
          <Link to="/" className="max-w-28">
            <img src={logo} alt="SnipScript" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive("/")
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-700 hover:text-primary-600 hover:border-b-2 hover:border-primary-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/app"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive("/app")
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-700 hover:text-primary-600 hover:border-b-2 hover:border-primary-600"
                }`}
              >
                App
              </Link>
              <Link
                to="/pricing"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive("/pricing")
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-700 hover:text-primary-600 hover:border-b-2 hover:border-primary-600"
                }`}
              >
                Pricing
              </Link>
            </div>

            <div className="flex items-center ml-6 space-x-3">
              <Link
                to="/auth"
                className="px-4 py-2 text-sm font-medium transition-colors duration-200 border rounded-md text-primary-600 border-primary-600 hover:bg-primary-50"
              >
                Login
              </Link>
              <Link
                to="/auth"
                className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md bg-primary-600 hover:bg-primary-700"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </CommonContainer>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/")
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/app"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/app")
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              }`}
            >
              App
            </Link>
            <Link
              to="/pricing"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/pricing")
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/auth"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/pricing")
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              }`}
            >
              Login
            </Link>
            <Link
              to="/auth"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/pricing")
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              }`}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
