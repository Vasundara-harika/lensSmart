import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/spec1.webp";
import img2 from "../assets/spec2.jpg";
import img3 from "../assets/spec3.jpg";

export default function Hero() {
  const images = [img1, img2, img3];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const selectedImage = images[selectedIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("left");
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setSlideDirection("left");
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSlideDirection("right");
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section
      id="home"
      className="pt-28 pb-20 px-6 bg-gradient-to-b from-indigo-950 to-indigo-900 text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="flex-1 text-left z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 ml-3">
            New Arrival of{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Summer
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Cool Specs
            </span>
          </h1>
           <p className="text-purple-200 text-lg mb-4 font-bold ml-3" >
            Wear them and suddenly everyone's asking who your stylist is — including your mirror ;)
           </p>
          
          <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full shadow transition duration-300 flex items-center gap-3 ml-3">
            Buy Now
            <span className="bg-white text-purple-600 rounded-full p-2 flex items-center justify-center w-7 h-7">
                <FaArrowRight />
            </span>
          </button>
          
        </div>

        {/* RIGHT SIDE - Image Outline Card with Arrows */}
        <div className="flex-1 flex flex-col items-center justify-center relative animate-slide-down z-10">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[5rem] top-[45%] -translate-y-1/2 text-4xl font-extrabold text-purple-300 hover:text-purple-500 z-30"
          >
            «
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[5rem] top-[45%] -translate-y-1/2 text-4xl font-extrabold text-purple-300 hover:text-purple-500 z-30"
          >
            »
          </button>

          {/* Image Container with Lavender Outline */}
          <div className="w-[300px] h-[360px] border-4 border-purple-400 rounded-xl shadow-2xl shadow-black/50 z-10 overflow-hidden relative">
            <div
              key={selectedIndex}
              className="absolute w-full h-full transition-transform duration-700 ease-in-out"
              style={{ transform: "translateX(0%)" }}
            >
              <img
                src={selectedImage}
                alt="Main Product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 flex justify-center gap-4 z-10">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Option ${index + 1}`}
                onClick={() => {
                  setSlideDirection(index > selectedIndex ? "left" : "right");
                  setSelectedIndex(index);
                }}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                  selectedIndex === index
                    ? "border-purple-600 scale-105"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
