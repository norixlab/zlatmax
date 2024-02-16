'use client'
import  {  useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode,  Thumbs } from 'swiper/modules';



const SingleProductSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
       <Swiper
       
        spaceBetween={15}
        
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode,  Thumbs]}
        className="mySwiper2 max-h-[580px] mb-[10px]"
      >
        <SwiperSlide>
          <img src="/assets/images/single-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/single-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/single-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/single-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/single-5.jpg" />
        </SwiperSlide>
       
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/images/single-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/single-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/single-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/single-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/single-5.jpg" />
        </SwiperSlide>
 
      </Swiper>
   

    </>
  )
}

export default SingleProductSlider
