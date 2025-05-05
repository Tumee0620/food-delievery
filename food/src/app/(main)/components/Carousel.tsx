"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";

type CategoryType = {
  name: string;
  image: string;
};

export const CategoryComponents = () => {
  const [categoryData, setCategoryData] = useState<CategoryType[]>([]);
  const [click, setClick] = useState(false);
  const handleIsClicked = () => {
    setClick(!click);
  };

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/category");
      setCategoryData(response.data.categories);
      console.log(categoryData);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <div>
      <Carousel>
        <CarouselContent className="flex gap-5">
          {categoryData.map((item, index) => (
            <div key={index}>
              <CarouselItem
                onClick={handleIsClicked}
                className={`${
                  click ? "bg-white" : "bg-red-400"
                } w-[160px] h-[50px] flex  items-center justify-center  border-2   rounded-full`}
              >
                <p>{item.name}</p>
              </CarouselItem>
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      ;
    </div>
  );
};
