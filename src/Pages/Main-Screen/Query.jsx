import PropTypes from "prop-types";
import { FaRegUser } from "react-icons/fa";

const Query = ({ text }) => {
  return (
    <div className="flex flex-col md:flex-row mt-12 mb-4 p-4 rounded-md max-w-screen-lg mx-auto">
      <div className="flex items-center mb-4 md:mb-0 md:mr-4">
        <div className="bg-[#4430B4] w-8 h-8 flex justify-center items-center rounded-full">
          <FaRegUser className="text-white text-xl" />
        </div>
      </div>
      <p className="text-white text-base md:text-lg">{text}</p>
    </div>
  );
};

Query.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Query;
