"use client";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

export const Loginpage = () => {
  const { push } = useRouter();

  const handleOnclick = () => {
    push(`/signup`);
  };
  const handleOnclick2 = () => {
    push(`/resetpassword`);
  };
  return (
    <div className="w-full h-[100vh] bg-white flex gap-[42px] items-center">
      <div className=" flex flex-col space-y-6 ">
        <div className="flex flex-col space-y-6">
          <div className="w-[36px] h-[36px] border border-[#E4E4E7] flex items-center justify-center rounded-md">
            <MdArrowBackIosNew color="black" />
          </div>
          <div>
            <p className="text-black text-[24px] font-bold">Login</p>
            <p className="text-[#71717A]">
              Log in to enjoy your favorite dishes..
            </p>
          </div>
        </div>
        <input
          className="text-[#71717A] flex px-[12px] space-y-2 border border-[#E4E4E7] w-[416px] h-[36px] rounded-md"
          placeholder="Enter your email address"
          type="email"
        />
        <input
          className="text-[#71717A] flex px-[12px] space-y-2 border border-[#E4E4E7] w-[416px] h-[36px] rounded-md"
          placeholder="Password"
          type="text"
        />
        <div>
          <button className=" text-black text-[14px] ">
            <p className="underline underline-offset-2"> Forgot password ?</p>
          </button>
        </div>
        <button
          onClick={handleOnclick2}
          className="text-white bg-[#71717A] w-[416px] h-[36px] rounded-md"
        >
          Let's Go
        </button>
        <div className="flex space-x-3 w-[416px] h-[36px] justify-center items-center">
          <p className="text-[#71717A]">Don’t have an account?</p>
          <button onClick={handleOnclick} className="text-[#2563EB]">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
