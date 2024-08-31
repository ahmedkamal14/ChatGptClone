import { GPTLogo } from "@/Utils/icons.util";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white font-medium w-full">
      <GPTLogo />
      <h1 className="text-[15px] mt-[19px]">Welcome to ChatGPT Clone</h1>
      <p className="text-[15px] mt-[5px]">
        Log in with your OpenAI account to continue
      </p>
      <div className="account-buttons text-[14px] flex gap-[12px] mt-[14px]">
        <Link
          to={"/ChatGptClone/login"}
          className="bg-primary  px-[14px] py-[9px] rounded-[4px] hover:bg-primary/80 transition-all duration-300"
        >
          Log in
        </Link>
        <Link
          to={"/ChatGptClone/signup"}
          className="bg-primary  px-[14px] py-[9px] rounded-[4px] hover:bg-primary/80 transition-all duration-300"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};
