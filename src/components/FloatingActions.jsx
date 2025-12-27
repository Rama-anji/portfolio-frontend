import { useEffect, useRef, useState } from "react";
import { ArrowUp, X, Send } from "lucide-react";
import chatBotIcon from "../assets/icons/ai-chat.png";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Hi! I’m Anjaneyulu Ravi’s AI assistant. Ask me about his skills, projects, or services."
    }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const socketRef = useRef(null);
  const chatScrollRef = useRef(null);

  /* Page scroll button */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Auto-scroll chat body only */
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop =
        chatScrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  /* WebSocket */
useEffect(() => {
  if (!showChat || socketRef.current) return;

  const ws = new WebSocket("wss://portfolio-backend-9ne1.onrender.com/ws/chat");
  socketRef.current = ws;

  ws.onopen = () => {
    console.log("✅ WebSocket connected");
  };

  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.reply) {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
    }
  };

  ws.onerror = () => {
    console.error("❌ WebSocket error");
    setTyping(false);
    setMessages((prev) => [
      ...prev,
      { from: "bot", text: "⚠️ Connection error. Try again." }
    ]);
  };

  ws.onclose = () => {
    console.warn("🔌 WebSocket closed");
  };

  return () => {
    ws.close();
    socketRef.current = null;
  };
}, [showChat]);


  /* Send message */
const sendMessage = () => {
  if (!input.trim()) return;

  if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
    console.warn("WebSocket not ready");
    return;
  }

  setMessages((prev) => [...prev, { from: "user", text: input }]);
  setTyping(true);

  socketRef.current.send(JSON.stringify({ message: input }));
  setInput("");
};


  return (
    <>
      {/* FLOATING ACTIONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

        {/* CHAT BOT BUTTON */}
        <button
          onClick={() => setShowChat(true)}
          className="w-16 h-16 rounded-full border border-indigo-300 shadow-md overflow-hidden"
        >
          <img
            src={chatBotIcon}
            alt="AI Chat"
            className="w-full h-full rounded-full animate-robot"
          />
        </button>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/916301932501"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
        >
          <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white">
            <path d="M16 2C8.27 2 2 8.27 2 16c0 2.82.74 5.57 2.15 8L2 30l6.23-2.05C10.82 29.28 13.37 30 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2z" />
          </svg>
        </a>

        {/* SCROLL TOP */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xl"
          >
            <ArrowUp size={22} />
          </button>
        )}
      </div>

      {/* CHAT WINDOW */}
      {showChat && (
        <div className="fixed bottom-24 right-6 w-80 h-[420px] bg-white rounded-2xl shadow-2xl border z-50 flex flex-col overflow-hidden">

          {/* HEADER WITH ICON */}
          <div className="flex items-center justify-between px-4 py-3 bg-indigo-600 text-white">
            <div className="flex items-center gap-2">
              <img
                src={chatBotIcon}
                alt="Bot"
                className="w-8 h-8 rounded-full border border-white"
              />
              <div className="leading-tight">
                <p className="font-semibold text-sm">AI Assistant</p>
                <p className="text-xs opacity-80">Anjaneyulu Ravi</p>
              </div>
            </div>
            <X
              size={18}
              onClick={() => setShowChat(false)}
              className="cursor-pointer"
            />
          </div>

          {/* CHAT BODY */}
          <div
            ref={chatScrollRef}
            className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50 text-sm"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.from === "bot" && (
                  <img
                    src={chatBotIcon}
                    className="w-6 h-6 rounded-full mt-1"
                  />
                )}

                <div
                  className={`max-w-[75%] px-3 py-2 rounded-2xl ${
                    msg.from === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-white border text-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex gap-2 items-center">
                <img
                  src={chatBotIcon}
                  className="w-6 h-6 rounded-full"
                />
                <div className="bg-white border px-3 py-2 rounded-2xl text-xs">
                  Typing…
                </div>
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about skills, projects, contact…"
              className="flex-1 px-3 py-2 rounded-full border text-sm focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
        .animate-robot {
          animation: float 2.5s ease-in-out infinite;
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}
