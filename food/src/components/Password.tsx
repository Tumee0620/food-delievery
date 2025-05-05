"use client";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

export const Passwordpage = () => {
  const { push } = useRouter();

  const handleLog = () => {
    push(`/signup`);
  };
  return (
    <div className=" bg-white flex gap-[48px] items-center w-fit">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col space-y-6">
          <div className="w-[36px] h-[36px] border border-[#E4E4E7] flex items-center justify-center rounded-md">
            <MdArrowBackIosNew color="black" />
          </div>
          <div>
            <p className="text-black text-[24px] font-bold">
              Create a strong password
            </p>
            <p className="text-[#71717A] font-normal ">
              Create a strong password with letters, numbers.
            </p>
          </div>
        </div>
        <input
          className="text-[#71717A] flex px-[12px] space-y-2 border border-[#E4E4E7] w-[416px] h-[36px] rounded-md"
          placeholder="Password"
          type="text"
        />
        <input
          className="text-[#71717A] flex px-[12px] space-y-2 border border-[#E4E4E7] w-[416px] h-[36px] rounded-md"
          placeholder="Confirm"
          type="text"
        />
        <div className="flex gap-1 items-center">
          <input type="checkbox" />
          <p className="text-[#71717A]">Show password</p>
        </div>
        <button className="text-white bg-[#71717A] w-[416px] h-[36px] rounded-md">
          Let's Go
        </button>
        <div className="flex space-x-3 w-[416px] h-[36px] justify-center items-center">
          <p className="text-[#71717A]">Already have an account?</p>
          <button onClick={handleLog} className="text-[#2563EB]">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};
