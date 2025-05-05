"use client";
import { Loginpage } from "@/components/Loginpage";
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";
import { MdArrowBackIosNew } from "react-icons/md";
import { CategoryComponents } from "./components/Carousel";
import { FoodCardsComponents } from "./components/Foodcard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Foodinfo } from "./components/Foodinfo";
import { ImageUpload } from "./components/ImageUpload";
type foodDataType = {
  foodname: string;
  image: string;
  price: string;
  ingredients: string;
};

export default function Home() {
  const [foodData, setFoodData] = useState<foodDataType[]>([]);

  const fetchFoodData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/food");
      setFoodData(response.data.food);
      console.log(response.data.food, "foodData");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);
  console.log(foodData, "foodData");

  return (
    <div className="w-full h-full bg-[#71717A] pb-[100px]">
      <img
        className="w-[100%] h-[100vh] object-cover"
        src="https://s3-alpha-sig.figma.com/img/8984/6312/a2a7c22f5fe9122b2bd6276cdd549c3e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZT8ix8PnvS5PNCzC9Xqfe8g8T2DgO7M5SL~Xr0wI2LjCQqEDVh0ErkR4plCjukQZu4NWzuG3uAlO3IiW~xj2TXJzkTt1hAsTXfb9fM~kZzBq1ovNXX-oiElqqZiRHq2iIuq3o1xOTwmqXwtHN-rGlsh0xYvc6POiPqbmE2FFeRw0zMovo8AeroEmkEa-HRDjTUURjnZtd-cbGpkL-fnOqf1pNGbT2Hk2iepnd9Qfu~uFj7-0PiEL-bgc7yLhrRHOgNH0UFIwABTkhSqyQrPmB9nrvjtByLDhc725MYKkRofHdYQAIhYPwIwuB4oCQwHbbZ8VAw2hyJl5AXZbdjAJiA__"
        alt=""
      />
      <div className="flex flex-col gap-4">
        <p className="text-white text-[30px]  font-semibold">Categories</p>
        <CategoryComponents />
        <div className="flex flex-wrap gap-5 pl-10">
          {foodData.map((el, index) => {
            return (
              <div key={index}>
                <Foodinfo
                  name={el.foodname}
                  price={el.price}
                  image={el.image}
                  ingredients={el.ingredients}
                />
              </div>
            );
          })}
        </div>
        <ImageUpload></ImageUpload>
      </div>
    </div>
  );
}
