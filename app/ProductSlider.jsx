"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "./ProductCard";

const ProductSlider = ({ title, products, count }) => {

  const uniqueId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <div className="container">
      <div className="vegetable flex flex-col gap-4">
        <div className="view flex justify-between items-center">
          <div className="flex items-center gap-7">
            <h3 className="text-[#18181b] font-bold text-2xl">{title}</h3>
            <span className="count bg-orange-100 text-green-700 text-sm font-semibold rounded-full px-3">{count} Products</span>
          </div>
          <a className="flex items-center gap-2 text-[#00a844] font-semibold text-sm hover:underline" href="#">View More <IoIosArrowForward /></a>
        </div>

        <div className="relative">
          {/* تأكد أن الكلاسات هنا تطابق الـ navigation بالأسفل */}
          <div className={`prev-${uniqueId} absolute left-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition`}>
            <IoIosArrowBack size={20} />
          </div>
          <div className={`next-${uniqueId} absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition`}>
            <IoIosArrowForward size={20} />
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            // لاحظ إضافة النقطة (.) قبل اسم الكلاس هنا
            navigation={{ 
                nextEl: `.next-${uniqueId}`, 
                prevEl: `.prev-${uniqueId}` 
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{ 
               
  320: { slidesPerView: 1, spaceBetween: 10 },
  640: { slidesPerView: 2, spaceBetween: 15 },
  1024: { slidesPerView: 4, spaceBetween: 20 },
}}
     
          >
            {products?.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;