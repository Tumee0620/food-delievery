import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FoodCardsComponents } from "./Foodcard";
import { useState } from "react";
type foodDataType = {
  name: string;
  image: string;
  price: string;
  ingredients: string;
};
export const Foodinfo = ({ name, image, price, ingredients }: foodDataType) => {
  const [num, setNum] = useState(0);
  const handleOnclick = () => {
    setNum(num + 1);
  };
  const handleOnclick2 = () => {
    if (num === 0) return;
    setNum(num - 1);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <FoodCardsComponents
          name={name}
          image={image}
          price={price}
          ingredients={ingredients}
        />
      </DialogTrigger>
      <DialogContent>
        <div className="flex gap-3">
          <img className="w-[50%] h-[300px]" src={image} />
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[#EF4444] font-bold text-[24px]">{name}</p>
              <p>{ingredients}</p>
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <p>Total price</p>
                  <p className="font-bold">{price}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleOnclick2}
                    className="w-[30px] h-[30px] border-1 border-black rounded-full"
                  >
                    -
                  </button>
                  <p>{num}</p>
                  <button
                    onClick={handleOnclick}
                    className="w-[30px] h-[30px] border-1 border-black rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="w-[220px] border-1 border-black bg-black text-white rounded-full">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
