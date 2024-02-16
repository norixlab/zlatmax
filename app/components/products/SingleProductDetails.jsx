"use client";
import Rating from "@mui/material/Rating";
import Favorite from "../icons/Favorite";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import { options } from "@/lib/data";
import SingleProductSelect from "../selects/SingleProductSelect";
import { products } from "@/lib/data";
import Cart from "../icons/Cart";
import { useState } from "react";

const SingleProductDetails = ({ params }) => {
  const bonuse = 5;
  const [showTooltip, setShowTooltip] = useState(false);
  const [countCart, setCountCart] = useState(1);

  const countCartInc = () => {
    setCountCart(countCart + 1);
  };

  const countCartDec = () => {
    if (countCart > 1) {
      setCountCart(countCart - 1);
    }
  };

  const product = products.find((x) => x._id === params._id);
  if (!product) {
    return <div>Product not found</div>;
  }
  const rating = product.reviews > 0 ? product.rating / product.reviews : 0;

  return (
    <>
      <div className="border-b border-[#D9D9D9] pb-[25px]">
        <div className="flex justify-between items-center pb-[15px]">
          <div className="flex items-center gap-[30px]">
            <h1 className="font-bold text-[24px] text-[#141414] leading-none">
              {product.name}
            </h1>
            <Rating
              value={rating}
              precision={0.1}
              readOnly
              className="gap-[8px]"
            />
          </div>
          <div className="flex items-center justify-center gap-[30px] ">
            <Image
              src={"/assets/icons/compare.svg"}
              height={27}
              width={27}
              alt=""
            />
            <Favorite color={"#E8AA31"} />
          </div>
        </div>
        {product.available > 0 ? (
          <span className="text-[#24AD53] font-semibold text-[16px]">
            В наличии
          </span>
        ) : (
          <span className="text-red-600 font-semibold text-[16px]">
            Нет в наличии
          </span>
        )}
      </div>

      <div className="flex gap-[30px] py-[30px] text-[#141414] text-[18px] leading-[22px] border-b border-[#D9D9D9]">
        <div className="flex flex-col gap-[20px]">
          <span>Артикул:</span>
          <span>Торговая марка:</span>
          <span>Серия:</span>
          <span>Бонусные баллы: </span>
        </div>
        <div className="flex flex-col gap-[20px] opacity-50">
          <span>AF0000001952</span>
          <span>{product.brand}</span>
          <span>{product.series}</span>
          <span>{bonuse ? Math.floor((product.price * bonuse) / 100) : 0}</span>
        </div>
      </div>

      <div className="py-[30px] border-b border-[#D9D9D9]">
        <div className="grid grid-cols-3 gap-x-[30px] gap-y-[20px] items-center text-[#141414] text-[18px] leading-[22px]">
          <SingleProductSelect
            id="steel-select"
            title={"Сталь"}
            placeholder={"Выбрать сталь"}
            options={options.steel}
          />
          <SingleProductSelect
            id="handle-select"
            title={"Рукоять"}
            placeholder={"Выбрать рукоять"}
            options={options.handle}
          />
          <SingleProductSelect
            id="garda-select"
            title={"Гарда и тыльник"}
            placeholder={"Выбрать гарда и тыльник"}
            options={options.garda}
          />
          <SingleProductSelect
            id="blade-select"
            title={"Обработка клинка"}
            placeholder={"Выбрать обработку клинка"}
            options={options.blade}
          />
        </div>
      </div>

      <div className="pt-[30px]">
        <div className="flex justify-between pb-[30px]">
          <div>
            <span className="text-[30px] font-bold text-black leading-none">
              {product.price} ₽
            </span>
          </div>
          <div className="flex gap-[15px] items-center">
            <span className="text-[14px] text-[#141414] opacity-50">
              +{" "}
              {bonuse
                ? Math.floor((product.price * bonuse) / 100) * countCart
                : 0}{" "}
              баллов за покупку
            </span>

            <Tooltip
              showArrow={true}
              content={`Вам будут начислены баллы в размере ${bonuse}% 
                        от стоимости покупки. Их можно будет использовать 
                        на оплату последующих заказов.`}
              placement="top-end"
              classNames={{
                base: [
                  // arrow color
                  "before:bg-neutral-400 dark:before:bg-white",
                ],
                content: [
                  "py-[20px] px-[17px] shadow-xl",
                  "text-black bg-gradient-to-br from-white to-neutral-400",
                  "max-w-[430px]",
                  "border border-[#E8AA31]",
                ],
              }}
              isOpen={showTooltip}
              onClick={() => setShowTooltip(false)}
            >
              <span
                className="cursor-pointer h-[20px] w-[20px] bg-gray-300 rounded-full flex items-center justify-center text-[12px] pl-[1px]"
                onClick={() => setShowTooltip(!showTooltip)}
              >
                ?
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={countCartDec}
              disabled={countCart === 1}
              className={`${
                countCart === 1
                  ? "bg-[#141414a9] cursor-not-allowed"
                  : "bg-[#141414]"
              } w-[50px] h-[50px] flex items-center justify-center  text-white text-[24px]`}
            >
              -
            </button>
            <span className="h-[50px] min-w-[50px] flex items-center justify-center bg-gray-100 text-black px-[7px]">
              {countCart}
            </span>
            <button
              onClick={countCartInc}
              className="w-[50px] h-[50px] flex items-center justify-center bg-[#141414] text-white text-[24px]"
            >
              +
            </button>
          </div>
          <div className="flex items-center gap-[30px]">
            <button
              className={`${
                product.available < 1 ? "cursor-not-allowed opacity-50" : ""
              } bg-[#E8AA31] flex items-center justify-center w-[230px] h-[50px] font-semibold text-white text-[18px] px-[20px] gap-[15px] rounded-[3px]`}
            >
              В корзину
              <Cart color={"white"} width="18px" strokeWidth={"2.5"} />
            </button>
            <button
              className={`${
                product.available < 1 ? "cursor-not-allowed opacity-50" : ""
              } bg-black flex items-center justify-center w-[230px] h-[50px] font-semibold text-white text-[18px] px-[20px] gap-[15px] rounded-[3px]`}
            >
              Купить в 1 клик
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductDetails;
