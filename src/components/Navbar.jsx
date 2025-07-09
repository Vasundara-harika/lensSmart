import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-indigo-950 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="LensSmart Logo" className="w-16 h-16 object-contain" />
          <div>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              LensSmart
            </h1>
            <p className="text-xs text-purple-200 uppercase">Vision meets style</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-10 items-center text-lg font-semibold">
          <Link
            to="/"
            onClick={() => pathname === "/" && scrollToSection("hero")}
            className="text-purple-200 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-indigo-400 bg-clip-text transition duration-300 hover:scale-105"
          >
            Home
          </Link>

          <Link
            to="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                scrollToSection("about");
              }
            }}
            className="text-purple-200 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-indigo-400 bg-clip-text transition duration-300 hover:scale-105"
          >
            About
          </Link>

          <Link
            to="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                scrollToSection("popular-products");
              }
            }}
            className="text-purple-200 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-indigo-400 bg-clip-text transition duration-300 hover:scale-105"
          >
            Products
          </Link>

          {/* ✅ This scrolls to Contact section if on homepage */}
          <Link
            to="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                scrollToSection("contact");
              }
            }}
            className="text-purple-200 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-indigo-400 bg-clip-text transition duration-300 hover:scale-105"
          >
            Contact
          </Link>
        </div>

        
        {/* Cart + Logout */}
<div className="flex items-center gap-4">
  <Link to="/cart">
    <FaShoppingCart className="text-purple-200 text-2xl hover:text-white transition cursor-pointer" />
  </Link>
  {localStorage.getItem("isLoggedIn") === "true" && (
    <button
      onClick={() => {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "/signin"; // force redirect to SignIn
      }}
      className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full"
    >
      Logout
    </button>
  )}
</div>

      </div>
    </nav>
  );
}
