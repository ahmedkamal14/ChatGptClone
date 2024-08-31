import PropTypes from "prop-types";
import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { GPTLogo } from "@/Utils/icons.util";

const Response = ({ text }) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#444654] mb-4 p-4 rounded-md max-w-screen-lg mx-auto md:justify-between">
      <div className="flex items-center mb-4 md:mb-0 md:mr-4 md:w-[10%[">
        <div className="bg-primary w-8 h-8 flex justify-center items-center rounded-full p-1">
          <GPTLogo />
        </div>
      </div>
      <p className="text-white text-base md:text-lg md:w-[80%]">{text}</p>

      <div className="actions justify-center items-center gap-3 md:w-[10%] hidden md:flex">
        <button className="like">
          <SlLike />
        </button>
        <button className="dislike">
          <SlDislike />
        </button>
      </div>
    </div>
  );
};

Response.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Response;
