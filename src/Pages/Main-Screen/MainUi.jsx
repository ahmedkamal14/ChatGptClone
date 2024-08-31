import { BiSend } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Info from "./Info";
import Query from "./Query";
import Response from "./Response";

export const MainUi = ({ currentChatId, messages, onSendMessage }) => {
  const [text, setText] = useState("");
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, currentChatId]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (currentChatId) {
        onSendMessage(text);
        setText("");
      } else {
        alert("Please select a chat to send a query.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between text-white font-medium w-full pb-4 px-4">
      {currentChatId === null ? (
        <Info />
      ) : // Check if there are no messages for the currentChatId
      messages.filter((msg) => msg.chatId === currentChatId).length === 0 ? (
        <Info />
      ) : (
        <div
          className="chat-window w-full mt-4 h-[855px] overflow-y-auto"
          ref={chatWindowRef}
        >
          {messages
            .filter((msg) => msg.chatId === currentChatId)
            .map((msg) => (
              <div key={msg.id} className="msg w-full">
                <Query text={msg.query} />
                <Response text={msg.response} />
              </div>
            ))}
        </div>
      )}

      <div className="w-full max-w-[900px] mt-4">
        <div className="chat-input flex items-center bg-[#40414E] px-2 py-[15px] justify-between rounded-xl mb-2">
          <input
            type="text"
            name="msg"
            id="msg"
            className="bg-[#40414E] focus:outline-none w-[85%] px-3"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={() => onSendMessage(text)}>
            <BiSend className="text-xl" />
          </button>
        </div>

        <footer className="text-[#9A9B9F] text-[10px] sm:text-[11px] md:text-[12px] mt-4">
          <p className="text-center">
            <span className="underline">ChatGPT Jan 9 Version.</span> Free
            Research Preview. Our goal is to make AI systems more natural and
            safe to interact with. Your feedback will help us improve.
          </p>
        </footer>
      </div>
    </div>
  );
};

MainUi.propTypes = {
  currentChatId: PropTypes.number.isRequired,
  messages: PropTypes.array.isRequired,
  onSendMessage: PropTypes.func.isRequired,
};
