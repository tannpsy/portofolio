// src/components/FloatingChatbot.jsx
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import chatbot from "../data/chatbot";
import { FiMessageCircle, FiX } from "react-icons/fi";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello, I'm your assistant." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `You are a portfolio chatbot. Answer based on this context: ${chatbot} \n\nUser: ${userMessage}`;
      const result = await model.generateContent(prompt);
      const text = result.response.text();

      setMessages((prev) => [...prev, { role: "bot", text }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, I couldn't process that." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-4 shadow-lg z-50"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 max-h-[80vh] bg-black border border-pink-500 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                  msg.role === "bot"
                    ? "bg-pink-500 text-black self-start"
                    : "bg-cyan-400 text-black self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-pink-400 text-sm animate-pulse">
                Generating response...
              </div>
            )}
          </div>
          <div className="p-2 border-t border-pink-500 bg-black">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-neutral-900 text-cyan-200 px-3 py-2 rounded-lg text-sm focus:outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="px-3 py-2 bg-gradient-to-r from-pink-500 to-cyan-400 text-black rounded-lg text-sm hover:opacity-90 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
