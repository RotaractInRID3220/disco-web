"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useAtom } from 'jotai';
import { botOpenAtom, messagesAtom } from "@/app/states/store";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { MdOutlineRestartAlt } from "react-icons/md";




const markdownComponents = {
  ul: ({ children }) => <ul style={{ paddingLeft: 24, margin: "8px 0" }}>{children}</ul>,
  ol: ({ children }) => <ol style={{ paddingLeft: 24, margin: "8px 0" }}>{children}</ol>,
  li: ({ children }) => <li style={{ marginBottom: 4, listStyleType: "disc" }}>{children}</li>,
  a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#0078d4", textDecoration: "underline" }}>{children}</a>,
  strong: ({ children }) => <strong style={{ color: "#0078d4" }}>{children}</strong>,
  p: ({ children }) => <p style={{ margin: "8px 0" }}>{children}</p>,
};

export default function ChatBot() {
  const [messages, setMessages] = useAtom(messagesAtom);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [botOpen, setBotOpen] = useAtom(botOpenAtom);



  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/rotabot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });
      const data = await res.json();
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: data.answer || "Sorry, I couldn't generate an answer." },
      ]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Sorry, there was an error. Please try again." },
      ]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`fixed right-0 lg:w-1/4 w-full h-screen m-auto p-5 ${botOpen ? "translate-x-0" : "translate-x-full"} bg-gray-100/80 backdrop-blur-md rounded-l-lg text-black transition-all duration-200 border-l-2 border-cranberry justify-center flex flex-col items-center`}>
      <div className="absolute top-5 left-5 text-cranberry cursor-pointer hover:text-cranberry/50" onClick={() => setBotOpen(false)}>
        <FaArrowRightFromBracket />
      </div>
      <div className="absolute top-5 right-5 text-cranberry cursor-pointer hover:text-cranberry/50 text-xl" onClick={() => setMessages([{ sender: "bot", text: "Hi! I'm your friendly neighbour RotaBot🤖 Here to help you with your Rotaract related inquiries" },])}><MdOutlineRestartAlt /></div>

      <div className="flex items-center mb-5 gap-2">
        <img src="/Bot.png" className="w-13 -translate-y-1" alt="" />
        <h1 className="font-bebas text-cranberry text-4xl">RotaBot</h1>
      </div>
      <div className="h-9/12 bg-gray-300 overflow-y-auto py-5 px-4 rounded-lg mb-5 border-2 border-white chatbot-scroll-area leading-snug relative" >
        {messages.map((msg, i) => (
          <div key={i} className="flex flex-end" style={{
            flexDirection: msg.sender === "user" ? "row-reverse" : "row",
          }}>
            <span className={`inline-block mb-4 px-5 py-2 max-w-11/12 break-words ${msg.sender === "user" ? "bg-cranberry text-white" : "bg-white text-black"}`} style={{ borderRadius: msg.sender === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",}}>
              {msg.sender === "bot" ? (
                <ReactMarkdown components={markdownComponents}>{msg.text}</ReactMarkdown>
              ) : (
                msg.text
              )}
            </span>
          </div>
        ))}
        {loading && (
          <div className="flex flex-end" style={{ flexDirection: "row" }}>
            <span
              className="inline-block mb-4  text-black flex items-center gap-2"
              style={{ borderRadius: "14px 14px 14px 4px" }}
            >
              <img src="/Bot.png" alt="Bot" className="w-10 mr-2 animate-rotateB" />
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex w-full">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="Type your question..."
          className="flex rounded-l-lg p-4 border border-gray-300 focus:outline-none focus:border-blue-500 bg-white resize-none w-5/6"
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="rounded-r-lg bg-cranberry hover:bg-cranberry/80 transition-colors duration-200 text-white font-semibold px-4 py-2 cursor-pointer"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
