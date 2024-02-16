import ProductCard from "@/app/components/products/ProductCard";
import SingleProductDetails from "@/app/components/products/SingleProductDetails";
import SingleProductTabs from "@/app/components/products/SingleProductTabs";
import SingleProductSlider from "@/app/components/sliders/SingleProductSlider";
import { products } from "@/lib/data";

const ProductDetail = ({params}) => {



  return (
    <div className="container">
      <div className="py-[30px]">breadcremps</div>
      <section className="flex justify-between mb-[120px] gap-[30px]">
        <div className="max-w-[750px]">
          <SingleProductSlider />
        </div>
        <div className='shadow-[0px_2px_10px_0_rgba(50,50,50,0.15)] w-full p-[30px]'>
          <SingleProductDetails params={params}/>
        </div>
      </section>
      <section className='shadow-[0px_2px_10px_0_rgba(50,50,50,0.15)] w-full p-[30px] mb-[120px]'>
      <SingleProductTabs params={params}/>
      </section>




      <div className="flex gap-[30px] mb-[50px]">
      {products.slice(0, 16).map(item=>(

      <ProductCard key={item._id} product={item}/>
      ))}
      </div>
    </div>
  );
};

export default ProductDetail;
