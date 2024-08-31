import { GoPlus } from "react-icons/go";
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdOutlineLogout,
} from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi"; // Burger icon
import { useState } from "react";
import Chat from "./Chat";

import PropTypes from "prop-types";

export const SideBar = ({
  onNewChat,
  chats,
  setChats,
  setCurrentChatId,
  currentChatId,
}) => {
  SideBar.propTypes = {
    onNewChat: PropTypes.func.isRequired,
    chats: PropTypes.array.isRequired,
    setChats: PropTypes.func.isRequired,
    setCurrentChatId: PropTypes.func.isRequired,
    currentChatId: PropTypes.number,
  };
  const [isLightMode, setIsLightMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Controls sidebar visibility

  return (
    <>
      {/* Burger Menu Icon */}
      {!isOpen && ( // Only show the burger icon when the menu is closed
        <div className="md:hidden p-4 fixed top-0 left-0 z-50">
          <HiOutlineMenu
            className="text-3xl cursor-pointer text-white"
            onClick={() => setIsOpen(true)}
          />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 px-2 h-full w-[261px] min-h-screen bg-tertiary text-white font-medium text-[14px] transform transition-transform duration-300 z-20 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block`}
      >
        <div className="chats mt-2 border-[#444654] border-b h-[calc(100vh-250px)] overflow-y-auto">
          <button
            className="w-[244px] border border-[#444654] flex items-center justify-start p-[16px] rounded-[6px] gap-[16px]"
            onClick={onNewChat}
          >
            <GoPlus />
            <span>New Chat</span>
          </button>

          {chats.map((chat) => (
            <Chat
              key={chat.id}
              data={chat}
              setId={setCurrentChatId}
              setChats={setChats}
              isActive={chat.id === currentChatId}
              setCurrentChatId={setCurrentChatId}
            />
          ))}
        </div>
        <div className="actions mt-3">
          <button
            className="w-[244px] flex items-center justify-start p-[16px] rounded-[6px] gap-[16px]"
            onClick={() => setIsLightMode(!isLightMode)}
          >
            {isLightMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
            {isLightMode ? "Dark Mode" : "Light Mode"}
          </button>
          <button className="w-[244px] flex items-center justify-start p-[16px] rounded-[6px] gap-[16px]">
            <FaDiscord />
            OpenAI Discord
          </button>
          <button className="w-[244px] flex items-center justify-start p-[16px] rounded-[6px] gap-[16px]">
            <RiShareBoxFill />
            Updates & FAQ
          </button>
          <button className="w-[244px] flex items-center justify-start p-[16px] rounded-[6px] gap-[16px]">
            <MdOutlineLogout />
            Log out
          </button>
        </div>
      </div>

      {/* Overlay to close the sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
