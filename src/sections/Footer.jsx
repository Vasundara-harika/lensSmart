// ✅ File: src/sections/Footer.jsx

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-purple-100 pt-24 pb-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & Motto */}
        <div className="space-y-4">
          <h3 className="text-3xl font-extrabold text-white">
            👓 LensSmart
          </h3>
          <p className="text-sm text-purple-200 font-sans">Where Vision Meets Style.</p>
          <p className="text-sm text-purple-200 font-sans">Your eyes, our priority 😎</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-bold text-white text-xl mb-4 underline decoration-pink-500">Explore</h4>
          <ul className="space-y-3 text-sm text-purple-200">
            <li><a href="#hero" className="hover:text-white transition duration-200">🏠 Home</a></li>
            <li><a href="#about" className="hover:text-white transition duration-200">📘 About</a></li>
            <li><a href="#popular-products" className="hover:text-white transition duration-200">🛍️ Products</a></li>
            <li><a href="#contact" className="hover:text-white transition duration-200">📬 Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-bold text-white text-xl mb-4 underline decoration-purple-400">Stay Connected</h4>
          <div className="flex items-center gap-5 text-3xl">
            <a href="#" className="text-blue-400" title="Facebook"><FaFacebook /></a>
            <a href="#" className="text-pink-400" title="Instagram"><FaInstagram /></a>
            <a href="#" className="text-sky-400" title="Twitter"><FaTwitter /></a>
            <a href="#" className="text-blue-300" title="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:support@lenssmart.in" className="text-yellow-300" title="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-s text-purple-300 mt-12 border-t border-purple-700 pt-5">
         © {new Date().getFullYear()} <span className="font-semibold">LensSmart</span>. Designed with ❤️ and Intrest 😎 by Me @ Vasundara Harika.
      </div>
    </footer>
  );
}
