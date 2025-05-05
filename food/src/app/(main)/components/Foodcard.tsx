type foodDataType = {
  name: string;
  image: string;
  price: string;
  ingredients: string;
};
export const FoodCardsComponents = ({
  name,
  image,
  price,
  ingredients,
}: foodDataType) => {
  return (
    <div>
      <div className="w-[365px] h-[390px] bg-white rounded-[20px]">
        <img
          className="w-full h-[200px] rounded-[20px] object-cover p-4"
          src={image}
        />
        <div>
          <div className="flex justify-between p-4 items-center px-10">
            <p className="text-[#EF4444] font-bold text-[19px]">{name}</p>
            <p className="font-bold">{price}</p>
          </div>
          <p className="pl-10">{ingredients}</p>
        </div>
      </div>
    </div>
  );
};
