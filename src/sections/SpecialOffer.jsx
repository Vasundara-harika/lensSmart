import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import giftImg from "../assets/gift.webp"

// Replace with your own image filenames saved in /assets
import design1 from "../assets/design1.jpg";
import design2 from "../assets/design2.jpg";
import design3 from "../assets/design3.jpg";
import video1 from "../assets/design1.mp4";
import video2 from "../assets/design2.mp4";
import video3 from "../assets/design3.mp4";

export default function SpecialOffer() {
  const items = [
    { img: design1, video: video1 },
    { img: design2, video: video2 },
    { img: design3, video: video3 },
  ];

  const [selectedIndex, setSelectedIndex] = useState(2);
  const [showGiftCard, setShowGiftCard] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
      videoRef.current.play().catch((e) => console.error("Video play failed", e));
    }
  }, [selectedIndex]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-950 to-indigo-900 text-white" id="special-product">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        {/* LEFT SIDE: Circular Video Area with gradient border */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center items-center relative"
        >
          {/* Thumbnail circles outside the main circle */}
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-20">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.3 + idx * 0.3 }}
                viewport={{ once: true }}
                onClick={() => setSelectedIndex(idx)}
                className={`w-12 h-12 p-[2px] rounded-full transition-all duration-200 cursor-pointer shadow-md
                  ${selectedIndex === idx
                    ? "bg-[conic-gradient(from_180deg_at_50%_50%,_#ec4899,_#fb923c,_#ec4899)] scale-110"
                    : "bg-lavender-200 opacity-70 hover:opacity-100"}`}
              >
                <img
                  src={item.img}
                  alt={`Thumb ${idx + 1}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-2xl overflow-hidden relative z-10 border-[6px] border-transparent p-[3px]"
            style={{
              backgroundImage: "conic-gradient(from 180deg at 50% 50%, #ec4899, #fb923c, #ec4899)",
            }}
          >
            <div className="rounded-full overflow-hidden w-full h-full">
              <video
                ref={videoRef}
                src={items[selectedIndex].video}
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Product Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 text-left"
        >
          <h2 className="text-4xl font-extrabold mb-2">Knock Knock!! 🫣</h2>
          <h2 className="text-4xl font-extrabold mb-2">
            <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              Special Offer
            </span>
          </h2>
          <h2 className="text-3xl font-semibold mb-4">
            Buy One, To get exciting Gifts
          </h2>
          <p className="mb-2">(You can check your gift by hitting this below button 🫣🎁)</p>
          <button
            onClick={() => setShowGiftCard(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Redeem Gift
            <span className="bg-white text-pink-600 rounded-full w-6 h-6 flex items-center justify-center">
              →
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* 🎁 Gift Card Modal */}
      {showGiftCard && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full text-center relative shadow-2xl animate-fade-in">
            <button
              onClick={() => setShowGiftCard(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">🎉 Congratulations!</h2>
            <p className="text-gray-700 mb-4">You’ve unlocked a special gift. Check it out below!</p>
            <p className="text-gray-700 mb-4">(in our dreams😅)</p>
            
            <img
              src={giftImg}
              alt="Gift Car"
              className="w-full h-60 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      )}
    </section>
  );
}
