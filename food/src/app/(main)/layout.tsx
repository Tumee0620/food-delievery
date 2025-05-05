import { CiLocationOn } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function mainlaytout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <div className="h-[68px] w-full bg-black px-[88px] flex items-center justify-between ">
          <img
            className="w-[130px] h-[40px]"
            src="data:image/png;base64,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"
            alt=""
          />
          <div className="flex gap-3">
            <div className="w-[350px] h-[36px] bg-white flex items-center rounded-full px-4 gap-4">
              <CiLocationOn size={20} color="red" />
              <p className="text-red-400">Delivery address:</p>
              <p className="text-gray-500">Add location</p>
              <MdNavigateNext className="w-[40px]" size={40} />
            </div>
            <div className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center ">
              <CiShoppingCart size={30} />
            </div>
            <div className="w-[36px] h-[36px] bg-red-500 rounded-full flex items-center justify-center  ">
              <FiUser color="white" size={30} />
            </div>
          </div>
        </div>
      </header>
      {children}
      <div className=" w-full h-fit ">
        <footer className="w-full h-[800px] bg-black flex flex-col justify-between relative  ">
          <div className="pt-[100px]">
            <div className=" flex w-full h-fit items-center bg-red-500 text-white text-[34px] font-bold gap-[34px] px-[98px]">
              <p>Fresh fast delivered </p>
              <p>Fresh fast delivered </p>
              <p>Fresh fast delivered </p>
              <p>Fresh fast delivered </p>
              <p>Fresh fast delivered </p>
            </div>
          </div>
          <div className="flex justify-between px-[112px] items-start ">
            <img
              className="w-[110]"
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="text-white flex flex-col justify-center items-start">
              <button className="text-[#71717A]">NOMNOM </button>
              <button>Home </button>
              <button>Contact us</button>
              <button>Delivery zone</button>
            </div>
            <div className="text-white flex flex-col justify-center items-start ">
              <button className="text-[#71717A]">MENU</button>
              <button>Appetizers</button>
              <button>Salads</button>
              <button>Pizzas</button>
              <button>Main dishes</button>
              <button>Desserts</button>
            </div>
            <div className="text-white flex justify-center items-start flex-col pt-6">
              <button>Side dish </button>
              <button>Brunch</button>
              <button>Desserts</button>
              <button>Beverages</button>
              <button>Fish & Sea foods</button>
            </div>
            <div className="flex flex-col text-white gap-5">
              <p className="text-[#71717A]">FOLLOW US</p>
              <div className="flex gap-2">
                <CiFacebook size={30} />
                <FaInstagram size={30} />
              </div>
            </div>
          </div>
          <div className="bg-black w-full h-[10px] flex items-center justify-center pb-40 flex-col gap-5">
            <div className="w-[1500px] border-1 border-gray-400 h-[1px]"></div>
            <div className="flex text-gray-500 pt-10 absolute z-0 left-23">
              <p>Copy right 2024</p>
              <p>©</p>
              <p> Nomnom LLC</p>
              <div className="flex gap-9 pl-19">
                <p>Privacy policy </p>
                <p>Terms and conditoin</p>
                <p>Cookie policy</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
