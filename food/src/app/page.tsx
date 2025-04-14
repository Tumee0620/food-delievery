import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <div className="w-[1440px] h-[1024px]">
        <div>
          <IoChevronBack />
          <p>Create your account</p>
        </div>
      </div>
    </div>
  );
}
