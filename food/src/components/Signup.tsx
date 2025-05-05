"use client";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

export const Signuppage = () => {
  const { push } = useRouter();
  const handleOnClick = () => {
    push(`/login`);
  };

  const togglePage = () => {
    push(`/resetpassword`);
  };
  return (
    <div className="w-full h-[100vh] bg-white flex gap-[48px] items-center">
      <div className="flex flex-col  ">
        <div className="flex flex-col ">
          <div className="w-[36px] h-[36px] border border-[#E4E4E7] flex items-center justify-center rounded-md">
            <MdArrowBackIosNew color="black" />
          </div>
          <div>
            <p className="text-black font-bold  text-[24px]">
              Create your account
            </p>
            <p className="text-[#71717A]">
              Sign up to explore your favorite dishes.
            </p>
          </div>
        </div>
        <input
          className="text-[#71717A] flex px-[12px] space-y-2 border border-[#E4E4E7] w-[416px] h-[36px] rounded-[100px]"
          placeholder="Enter your email address"
          type="text"
        />
        <button
          onClick={togglePage}
          className="text-white bg-[#71717A] w-[416px] h-[36px] rounded-md"
        >
          Let's Go
        </button>
        <div className="flex space-x-3 w-[416px] h-[36px] justify-center items-center">
          <p className="text-[#71717A]">Already have an account?</p>
          <button onClick={handleOnClick} className="text-[#2563EB]">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};
