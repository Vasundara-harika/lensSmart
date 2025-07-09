import React, { useState, useEffect, useRef } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const botReplies = {
  hi: ["Hello! How are you?"],
  hello:["Hello,How can i help u?"],
  order: ["Order on 📞 +91-9876543210"],
  how: ["I'm just a bot, but I'm here to help!"],
  help: ["How can I help you today?"],
  buy: ["You can buy from here. Order on 📞 +91-9876543210"],
  
  price: ["Our prices are super affordable! Check our products section."],
  lenses: ["We offer prescription, blue light, and fashion lenses."],
  contact: ["You can reach us through the Contact section below."],
  return: ["Returns are accepted within 7 days of delivery."],
  thanks: ["You're welcome! 😊 For further queries, contact us anytime."],
  products: ["Please check our Products section on the website! 🛍️"]
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    const keyword = Object.keys(botReplies).find(key => userMessage.includes(key));
    if (keyword) {
      const reply = botReplies[keyword][0];
      setTimeout(() => {
        setMessages(prev => [...prev, { from: "bot", text: reply }]);
      }, 800);
    } else {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { from: "bot", text: "Sorry, I didn’t get that. You can ask me about orders, price, or help." }
        ]);
      }, 800);
    }
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setMessages([{ from: "bot", text: "Hi there! 👋" }]);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
    setMessages([]);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {isOpen ? (
        <div className="w-80 h-[500px] bg-white shadow-xl border border-indigo-300 rounded-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-700 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-bold">💬 Chat with us</span>
            <button onClick={handleCloseChat}>
              <FaTimes className="text-lg hover:text-red-300 transition" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 bg-gradient-to-b from-indigo-100 to-purple-100 space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.from === "user"
                    ? "bg-indigo-600 text-white ml-auto"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t bg-white flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-full text-sm outline-none focus:ring-2 focus:ring-indigo-400 text-indigo-700"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleOpenChat}
          className="bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 flex items-center gap-2 animate-bounce"
        >
          <FaComments /> Chat with us
        </button>
      )}
    </div>
  );
}
