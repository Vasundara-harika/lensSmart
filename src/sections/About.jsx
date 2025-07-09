import React, { useEffect, useState } from "react";
import {
  FaStore,
  FaSmileBeam,
  FaTags,
  FaShippingFast,
  FaShieldAlt,
  FaGem,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ Feature cards data
const features = [
  {
    title: "Free Shipping",
    icon: <FaShippingFast size={40} />,
    description: "For fast delivery, there's plane delivery also available to your doorstep, haha ✈️",
  },
  {
    title: "Secure Payments",
    icon: <FaShieldAlt size={40} />,
    description: "No payments? No hack. We believe in digital trust. 🔒",
  },
  {
    title: "Reasonable Prices",
    icon: <FaGem size={40} />,
    description: "Prices are either too high or very low — you can’t afford it 😅",
  },
];

const Counter = ({ end, label, gradient, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / end), 20);
      const interval = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(interval);
      }, stepTime);
    }
  }, [inView, end]);

  return (
    <div
      ref={ref}
      className="bg-white/10 rounded-xl shadow-lg px-6 pt-4 pb-6 flex flex-col items-center relative"
    >
      <div className="absolute -top-5 bg-indigo-600 p-3 rounded-full shadow-md">
        <Icon className="text-white text-xl" />
      </div>
      <h2
        className={`text-5xl font-extrabold mt-6 bg-clip-text text-transparent ${gradient}`}
      >
        {count}+
      </h2>
      <p className="mt-2 text-white text-lg font-semibold text-center">{label}</p>
    </div>
  );
};

export default function About() {
  const controls = useAnimation();
  const [paraRef, paraInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (paraInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, paraInView]);

  return (
    <section className="bg-indigo-950 py-20 px-6 text-white" id="about">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Who We Are</h2>

        <motion.p
          ref={paraRef}
          className="text-purple-300 font-medium font-bold text-md max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Our glasses don’t come with a superpower... unless making you -100 degrees cooler counts.
          No warranty. No returns. Just vibes.
        </motion.p>
      </div>

      {/* Counter Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <Counter
          end={120}
          label="Brands Supported"
          gradient="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"
          icon={FaTags}
        />
        <Counter
          end={300}
          label="Happy Customers"
          gradient="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
          icon={FaSmileBeam}
        />
        <Counter
          end={50}
          label="Retail Shops"
          gradient="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"
          icon={FaStore}
        />
      </div>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl p-6 text-center shadow-xl bg-[#e0f2ff] transition-all duration-500"
          >
            {/* Hover Fill Banner */}
            <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-purple-700 transition-all duration-500 ease-in-out z-0"></div>

            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-4 transition-colors duration-300">
              {/* Icon - dark indigo color */}
              <div className="text-indigo-700 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Heading - soft purple to white */}
              <h3 className="text-lg font-bold text-indigo-800 group-hover:text-white transition-all duration-300">
                {feature.title}
              </h3>

              {/* Paragraph - soft purple to white */}
              <p className="text-sm text-indigo-900 group-hover:text-white transition-colors duration-300 px-2">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
