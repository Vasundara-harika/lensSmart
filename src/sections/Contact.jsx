// ✅ File: src/sections/Contact.jsx

import React from "react";
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import modelVideo from "../assets/models.mp4";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-indigo-950 to-purple-900 py-20 px-4 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center animate-slide-down">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Need Specs-tacular Help? <span className="text-white">📞</span>
          </h2>
          <p className="text-xl md:text-3xl font-bold bg-gradient-to-l from-yellow-100 via-pink-100 to-purple-100 bg-clip-text text-transparent mt-2">
            Let's Talk <span className="text-white">😎</span>
          </p>
        </div>

        {/* Combined Card */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 animate-fade-in">
          {/* Left: Video */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl border-4 border-purple-600 hover:scale-105 transition duration-500">
            <video
              src={modelVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right: Contact Info Table */}
          <div className="w-full md:w-1/2 text-purple-100">
            <table className="w-full text-left text-lg border-separate border-spacing-y-4">
              <tbody>
                <tr className="hover:bg-white/5 transition rounded-lg duration-300">
                  <td className="font-bold text-pink-300 text-xl">📍 Address:</td>
                  <td className="pl-4">Rajahmundry, Kotagummam</td>
                </tr>
                <tr className="hover:bg-white/5 transition rounded-lg duration-300">
                  <td className="font-bold text-yellow-300 text-xl">📞 Phone:</td>
                  <td className="pl-4">+91 98765 43210</td>
                </tr>
                <tr className="hover:bg-white/5 transition rounded-lg duration-300">
                  <td className="font-bold text-blue-300 text-xl">📧 Email:</td>
                  <td className="pl-4">support@lenssmart.in</td>
                </tr>
                <tr className="hover:bg-white/5 transition rounded-lg duration-300">
                  <td className="font-bold text-green-300 text-xl">🕐 Hours:</td>
                  <td className="pl-4">Mon – Fri, 9 AM – 6 PM</td>
                </tr>
                <tr className="hover:bg-white/5 transition rounded-lg duration-300">
                  <td className="font-bold text-purple-300 text-xl">🚀 Response:</td>
                  <td className="pl-4">Fast like our delivery truck 🚚</td>
                </tr>
              </tbody>
            </table>

            {/* Button */}
            <div className="mt-8">
              <button className="relative group overflow-hidden bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white px-10 py-3 rounded-full text-lg font-bold shadow-lg transition duration-300 hover:scale-110">
                ✉️ Send a Message
                <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 group-hover:animate-ping rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      {/* <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white text-3xl p-4 rounded-full shadow-lg animate-bounce hover:scale-110 transition"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a> */}
    </section>
  );
}
