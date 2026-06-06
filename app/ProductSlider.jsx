"use client";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "./ProductCard";

const ProductSlider = ({ title, products, count }) => {
  const trackRef = useRef(null);

  const scrollByPage = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    // Scroll roughly one viewport of cards at a time.
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

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
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            aria-label="Previous products"
            className="absolute left-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition"
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            aria-label="Next products"
            className="absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition"
          >
            <IoIosArrowForward size={20} />
          </button>

          <div ref={trackRef} className="slider-track flex gap-5 overflow-x-auto snap-x snap-mandatory">
            {products?.map((product) => (
              <div
                key={product.id}
                className="slider-item flex-none basis-full sm:basis-[calc(50%-10px)] lg:basis-[calc(25%-15px)] snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
