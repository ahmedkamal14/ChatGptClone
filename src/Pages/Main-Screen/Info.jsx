import { MdOutlineLightMode } from "react-icons/md";
import { TiFlashOutline } from "react-icons/ti";
import { IoWarningOutline } from "react-icons/io5";

const Info = () => {
  return (
    <>
      <h1 className="text-[24px] sm:text-[28px] md:text-[34px] mt-[40px] sm:mt-[60px] md:mt-[80px] lg:mt-[100px]">
        ChatGPT
      </h1>
      <div className="info mt-[40px] sm:mt-[50px] md:mt-[60px] flex flex-col md:flex-row gap-[20px] md:gap-[14px] max-w-[750px]">
        <div className="single flex flex-col items-center flex-1">
          <MdOutlineLightMode className="text-3xl sm:text-4xl" />
          <p className="mt-[16px] text-[15px] sm:text-[16px] md:text-[17px]">
            Examples
          </p>
          <div className="try flex flex-col gap-[10px] sm:gap-[12px] md:gap-[16px] mt-[21px] text-[12px] sm:text-[13px]">
            <button className="bg-[#444654] rounded px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-center">
              “Explain quantum computing in simple terms” →
            </button>
            <button className="bg-[#444654] rounded px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-center">
              “Got any creative ideas for a 10 year {"old's"} birthday?” →
            </button>
            <button className="bg-[#444654] rounded px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-center">
              “How do I make an HTTP request in Javascript?” →
            </button>
          </div>
        </div>
        <div className="single flex flex-col items-center flex-1">
          <TiFlashOutline className="text-3xl sm:text-4xl" />
          <p className="mt-[16px] text-[15px] sm:text-[16px] md:text-[17px]">
            Capabilities
          </p>
          <div className="try flex flex-col gap-[10px] sm:gap-[12px] md:gap-[16px] mt-[21px] text-[12px] sm:text-[13px]">
            <div className="bg-[#444654] rounded px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-center">
              Remembers what user said earlier in the conversation
            </div>
            <div className="bg-[#444654] rounded px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-center">
              Allows user to provide follow-up corrections
            </div>
            <div className="bg-[#444654] rounded px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-center">
              Trained to decline inappropriate requests
            </div>
          </div>
        </div>
        <div className="single flex flex-col items-center flex-1">
          <IoWarningOutline className="text-3xl sm:text-4xl" />
          <p className="mt-[16px] text-[15px] sm:text-[16px] md:text-[17px]">
            Limitations
          </p>
          <div className="try flex flex-col gap-[10px] sm:gap-[12px] md:gap-[16px] mt-[21px] text-[12px] sm:text-[13px]">
            <div className="bg-[#444654] rounded px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-center">
              May occasionally generate incorrect information
            </div>
            <div className="bg-[#444654] rounded px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-center">
              May occasionally produce harmful instructions or biased content
            </div>
            <div className="bg-[#444654] rounded px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-center">
              Limited knowledge of world and events after 2021
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
