import { useState } from "react";
import { SideBar } from "./SideBar";
import { MainUi } from "./MainUi";

export const Main = () => {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);

  const startNewChat = () => {
    const newChatId = Date.now(); // Unique ID for the new chat
    setChats([{ id: newChatId, title: `Chat ${chats.length + 1}` }, ...chats]);
    setCurrentChatId(newChatId);
  };

  const handleSendMessage = (text) => {
    if (text && currentChatId !== null) {
      setMessages([
        ...messages,
        {
          query: text,
          chatId: currentChatId,
          id: Date.now(),
          response: "This is a demo Response appears for every msg",
        },
      ]);
    } else {
      alert("Please select a chat to send a query.");
    }
  };

  return (
    <div className="min-h-screen flex">
      <SideBar
        onNewChat={startNewChat}
        chats={chats}
        setChats={setChats}
        setCurrentChatId={setCurrentChatId}
        currentChatId={currentChatId}
      />
      <MainUi
        currentChatId={currentChatId}
        messages={messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};
