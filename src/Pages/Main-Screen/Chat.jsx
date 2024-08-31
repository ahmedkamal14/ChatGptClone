import { IoChatboxOutline } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";

import PropTypes from "prop-types";

const Chat = ({ data, setId, setChats, isActive, setCurrentChatId }) => {
  const handleChatClick = () => {
    setId(data.id);
  };

  const handleDeleteChat = () => {
    setChats((prevChats) => prevChats.filter((chat) => chat.id !== data.id));
    setCurrentChatId(null);
  };

  return (
    <div
      className={`w-full flex justify-between items-center text-[14px] p-[16px] rounded mt-5 ${
        isActive ? "bg-[#343540]" : "border-[#444654] border"
      }`}
    >
      <button className="w-[10%]" onClick={handleChatClick}>
        <IoChatboxOutline className=" text-xl text-[#C5C5D1]" />
      </button>
      <span className="w-[60%]">{data.title}</span>
      <div className="actions flex justify-between items-center gap-[12px] w-[15%] text-[#C5C5D1]">
        <button className="edit">
          <FiEdit3 />
        </button>
        <button className="delete" onClick={handleDeleteChat}>
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};

export default Chat;

Chat.propTypes = {
  data: PropTypes.object.isRequired,
  setId: PropTypes.func.isRequired,
  setChats: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  setCurrentChatId: PropTypes.func.isRequired,
};
