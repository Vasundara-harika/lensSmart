import React from "react";
import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";
import user1 from "../assets/spec1.webp";
import user2 from "../assets/spec2.jpg";
import user3 from "../assets/spec4.jpg";

const reviews = [
  {
    id: 1,
    name: "Drunken Monkey",
    image: user1,
    rating: 5,
    review: "I bought these specs for style, but accidentally improved my eyesight 👀. Worth it!",
  },
  {
    id: 2,
    name: "Naresh Malhotra",
    image: user2,
    rating: 4,
    review: "Looks great, feels great, but still can't see through lies 🤥. Specs are fine though.",
  },
  {
    id: 3,
    name: "Hananya Singh",
    image: user3,
    rating: 5,
    review: "These specs turned me from 'meh' to 'whoa' 😎. My crush noticed. 10/10 would stare again.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 to-purple-100 py-20 px-6" id="reviews">
      {/* Floating Quote Icon */}
      <FaQuoteLeft className="absolute top-10 left-10 text-6xl text-purple-300 opacity-20 animate-bounce" />
      <FaQuoteLeft className="absolute bottom-10 right-10 text-6xl text-pink-300 opacity-20 animate-spin-slow" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-800 to-pink-600 text-transparent bg-clip-text">
        What Our Customers Think <br />
        <span className="text-xl text-purple-700">– Even The Brutally Honest Ones</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className="group bg-white border-4 border-transparent hover:border-purple-400 hover:shadow-2xl hover:rotate-[-1deg] transition-all duration-500 ease-in-out p-6 rounded-3xl relative z-10 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.3}s`, animationFillMode: "both" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full border-2 border-purple-500 shadow-md"
              />
              <div>
                <h4 className="text-lg font-bold text-purple-800">{review.name}</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) =>
                    i < review.rating ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-300" />
                    )
                  )}
                </div>
              </div>
            </div>

            <p className="text-gray-600 italic relative z-10">
              “<span className="bg-purple-100 px-1 rounded">{review.review}</span>”
            </p>

            {/* Emoji or Icon */}
            <div className="absolute -top-5 -right-5 bg-gradient-to-br from-yellow-300 to-pink-400 w-12 h-12 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-lg animate-pulse">
              💬
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
