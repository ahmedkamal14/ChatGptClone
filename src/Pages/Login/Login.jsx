import { GPTLogo, Google, Microsoft } from "@/Utils/icons.util";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-blackC font-medium w-full bg-[#FFFFFF]">
      <GPTLogo className="text-[#202123]" />
      <h1 className="text-[31px] font-bold mt-[90px]">Welcome back</h1>
      <form className="relative w-[320px] mt-[24px]">
        <input
          type="email"
          id="email"
          placeholder=" "
          className="block w-full px-6 py-4 text-gray-900 border border-[#C3C8CF] rounded-md appearance-none focus:outline-none focus:ring-0 peer focus:border-primary"
        />
        <label
          htmlFor="email"
          className="absolute font-regular text-[#C3C8CF] duration-300 transform -translate-y-1/2 top-1/2 left-6 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#C3C8CF] peer-focus:-top-2 peer-focus:left-3 peer-focus:text-sm peer-focus:text-primary bg-white px-1 text-[14px]"
        >
          Email address
        </label>
      </form>

      <button
        type="button"
        className="w-[320px] text-[15px] bg-primary text-center text-white py-3 px-2 rounded mt-[25px] hover:bg-primary/80 transition-all duration-300"
      >
        Continue
      </button>

      <div className="text-center text-14px mt-[13px]">
        {"Don't"} have an account?{" "}
        <Link to={"/ChatGptClone/signup"} className="text-primary hover:underline">
          Sign up
        </Link>
      </div>

      <div className="h-[1px] bg-[#C3C8CF] mt-7 relative w-[320px]">
        <span className="text-[#2E3339] text-xs absolute left-1/2 -translate-x-1/2 -top-5 bg-white p-3">
          OR
        </span>
      </div>

      <div className="mt-7 flex flex-col gap-2">
        <button className="flex items-center border border-[#C3C8CF] px-5 py-3 rounded w-full gap-4">
          <Google /> Continue with Google
        </button>
        <button className="flex items-center border border-[#C3C8CF] px-5 py-3 rounded w-full gap-4">
          <Microsoft /> Continue with Microsoft Account
        </button>
      </div>
    </div>
  );
};

// #C3C8CF
