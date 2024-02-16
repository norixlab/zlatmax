import Image from "next/image"
import Favorite from "../icons/Favorite"
import Rating from "@mui/material/Rating";
import Link from "next/link";


const ProductCard = ({product}) => {
     const rating = (product.reviews > 0 ? product.rating / product.reviews : 0); 
  return (
    <Link href={`/product/${product._id}`} className="shadow-[0px_2px_10px_0_rgba(50,50,50,0.15)] px-[20px] pb-[30px] pt-[20px] max-w-[375px]">
      
        <div className=" mb-[20px] flex justify-center  pb-[34px]">
            <div className="h-[240px] px-[32px]">
        <Image src={product.image} width={270} height={240} alt="" className="h-full w-full  object-cover" />
        </div>
      </div>
      <div className="border-b border-gray-300 mb-[20px]">
        <h3 className="text-[20px] leading-[34px] font-semibold">{product.name}</h3>
        <div className="flex items-center justify-between text-[#ABABAB] text-[16px] leading-[34px] font-semibold mb-[5px]">
            <span className="pr-[5px]">95х18</span>
            <span className="pl-[5px]">Орех, Алюминий</span>
        </div>
        <div className="flex justify-between items-center mb-[20px]">
        <Rating
             
              value={rating}
              precision={0.1}
              readOnly
              className="gap-[8px]"
            />
            <span className="text-[16px] leading-[34px] text-[#ABABAB] pl-[5px]">отзывы: {product.reviews}</span>
        </div> 
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[#141414] font-semibold text-[20px] leading-[34px]">{product.price} р.</span>
        <div className="flex items-center justify-center gap-[15px] ">
            <Image
              src={"/assets/icons/compare.svg"}
              height={27}
              width={27}
              alt=""
            />
            <Favorite color={"#E8AA31"} />
          </div>
      </div>
    </Link>
  )
}

export default ProductCard
