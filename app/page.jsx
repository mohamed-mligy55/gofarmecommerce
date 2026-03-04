
"use client";
import { useQuery } from "@tanstack/react-query";

import { IoIosArrowForward } from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
import { PiShoppingCartBold } from "react-icons/pi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import toast from 'react-hot-toast';

import "./page.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import Homefarm from "./_pages/Home/Home"
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { addtoheart} from "./store/heartslice"
import { addToCart } from "./store/cartslice";


import { useSelector } from "react-redux";






async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products/category/groceries");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default  function Home() {
 
    const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
console.log(data)
const dispatch = useDispatch()

  const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        
        // إظهار التنبيه
        toast.success(`${product.title} added to cart!`, {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
            iconTheme: {
                primary: '#16a34a', // لون أخضر مطابق لزر الـ Add
                secondary: '#FFFAEE',
            },
        });
    };
    const handletoheart =(product)=>{
  dispatch(addtoheart(product))

     toast.success(`${product.title} Added To Wishlist!`, {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
            iconTheme: {
                primary: '#16a34a', // لون أخضر مطابق لزر الـ Add
                secondary: '#FFFAEE',
            },
        });
}

  return (
   <>
   <div className="main-content flex flex-col gap-20">
<div className="banner">
  <div className="text">
<h1 className="text-5xl text-[#18181b] font-bold leading-[1.2]">All you need for<br/> perfect breakfast</h1>
  <a href="#" className="flex gap-1.5 items-center">Shop Now <IoIosArrowForward />
  </a>
  </div>
    
  
</div>
<div className="feature flex flex-col gap-6">
  
    <div className="text text-center flex flex-col gap-2.5 "> 
      <h2 className="text-3xl lg:text-4xl font-bold text-gofarm-black ">Featured Products</h2>
    <p className="text-[gray] text-lg  ">Discover our carefully curated selection of premium products</p>
    </div>
    <div className="container">
      <div className="vegetable flex flex-col gap-4 ">
        <div className="view flex justify-between items-center">
          <div className="flex items-center gap-7">
             <h3 className="text-[#18181b] font-bold text-2xl">Fresh Food & Meat</h3>
            <span className="count bg-gofarm-light-orange text-gofarm-green text-sm font-semibold rounded-full">15 Products</span>
          </div>
         
        <a className="flex items-center gap-2 text-[#00a844] hover:text-gofarm-light-green font-semibold text-sm lg:text-base hoverEffect group" href="#">View More   <IoIosArrowForward /></a>
        </div>
        <div className="relative">


  <div className="custom-prev absolute left-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
    <IoIosArrowBack size={50} />
  </div>

  <div className="custom-next absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
    <IoIosArrowForward size={50} />
  </div>
 
       <Swiper
  modules={[Navigation, Pagination]}
  navigation={{
  nextEl: ".custom-next",
  prevEl: ".custom-prev",
}}
  pagination={{ clickable: true }}
  spaceBetween={20}
  slidesPerView={6}
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
  className="products"
>
{data?.products?.slice(0, 10).map((product) => (

  <SwiperSlide key={product.id}>
 <div className="product flex flex-col gap-2 group relative border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300 h-full">
       
      {/* 1. قسم الصورة مع رابط التفاصيل */}
      <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
          <Link href={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
            // لو الصورة لسه ما ظهرتش، جرب تضيف onError
            onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} 
          /></Link>

           <div className="icons">
        
<button onClick={()=>handletoheart(product)} className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
  <FaHeart />
</button>

<button className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
  <PiShoppingCartBold />
</button>

<button className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
  <FaShare />
</button>

      </div>
        
       
        
       
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          <span className="bg-green-600 text-white text-[13px] px-2 py-0.5 rounded shadow">New</span>
          <span className="bg-red-600 text-white text-[13px] px-2 py-0.5 rounded shadow">-10%</span>
        </div>
      </div>

     
      <div className="info p-4 flex flex-col gap-2">
       
          <h3 className="font-bold text-gray-800 hover:text-green-600 transition-colors truncate">
            {product.title}
          </h3>
       

        <div className="stars flex text-yellow-400 text-xs">
          <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-green-600 font-bold">${product.price}</span>
          <span className="line-through text-gray-400 text-xs">$19.00</span>
        </div>

        
      </div>
      
      <button onClick={() => handleAddToCart(product)} className="bg-green-600 text-white w-full py-2 rounded-md mt-2 text-sm font-medium hover:bg-green-700 transition-all active:scale-95">
          Add to Cart
        </button>
    </div>      


  </SwiperSlide>
))}
</Swiper>
</div>

      </div>
  </div>
    <div className="container">
      <div className="vegetable flex flex-col gap-4 ">
        <div className="view flex justify-between items-center">
          <div className="flex items-center gap-7">
             <h3 className="text-[#18181b] font-bold text-2xl">Fresh Food & Meat</h3>
            <span className="count bg-gofarm-light-orange text-gofarm-green text-sm font-semibold rounded-full">15 Products</span>
          </div>
         
        <a className="flex items-center gap-2 text-[#00a844] hover:text-gofarm-light-green font-semibold text-sm lg:text-base hoverEffect group" href="#">View More   <IoIosArrowForward /></a>
        </div>
        <div className="relative">


  <div className="custom-prev absolute left-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
    <IoIosArrowBack size={50} />
  </div>

  <div className="custom-next absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
    <IoIosArrowForward size={50} />
  </div>
 
       <Swiper
  modules={[Navigation, Pagination]}
  navigation={{
  nextEl: ".custom-next",
  prevEl: ".custom-prev",
}}
  pagination={{ clickable: true }}
  spaceBetween={20}
  slidesPerView={6}
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
  className="products"
>
{data?.products?.slice(10, 20).map((product) => (
  <SwiperSlide key={product.id}>
 
    <div className="product  flex flex-col gap-2   group relative border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
     
     <div className="discount">
      <div className="bg-green-600 text-white rounded-md text-sm p-1">New</div>
      <div className="bg-red-600 text-white text-sm p-1 rounded-md">-10%</div>
     </div>
     
    
      <Link href={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
           
            onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} 
          /></Link>
        

      <div className="icons">
        
<button className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
  <FaHeart />
</button>

<button className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
  <PiShoppingCartBold />
</button>

<button className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
  <FaShare />
</button>

      </div>
      <div className=" info flex flex-col gap-1.5 p-4">
<h3>{product.title}</h3>

      <div className="stars flex text-yellow-400">
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
      </div>

     <div className="flex items-center gap-2.5">
  <span className="text-green-600 font-bold">
   {product.price}
  </span>
  <span className="line-through text-gray-400 text-sm">
    $19.00
  </span>
</div>

      
        <button className="bg-green-600 text-white px-3 py-1 rounded">
            Add to Cart
        </button>
      </div>
      
     
    </div>
 
  </SwiperSlide>
))}
</Swiper>
</div>

      </div>
  </div>
    <div className="container">
      <div className="vegetable flex flex-col gap-4 ">
        <div className="view flex justify-between items-center">
          <div className="flex items-center gap-7">
             <h3 className="text-[#18181b] font-bold text-2xl">Fresh Food & Meat</h3>
            <span className="count bg-gofarm-light-orange text-gofarm-green text-sm font-semibold rounded-full">15 Products</span>
          </div>
         
        <a className="flex items-center gap-2 text-[#00a844] hover:text-gofarm-light-green font-semibold text-sm lg:text-base hoverEffect group" href="#">View More   <IoIosArrowForward /></a>
        </div>
        <div className="relative">


  <div className="custom-prev absolute left-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
    <IoIosArrowBack size={50} />
  </div>

  <div className="custom-next absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
    <IoIosArrowForward size={50} />
  </div>
 
       <Swiper
  modules={[Navigation, Pagination]}
  navigation={{
  nextEl: ".custom-next",
  prevEl: ".custom-prev",
}}
  pagination={{ clickable: true }}
  spaceBetween={20}
  slidesPerView={6}
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
  className="products"
>
{data?.products?.slice(20 ).map((product) => (
  <SwiperSlide key={product.id}>
    <div className="product  flex flex-col gap-2   group relative border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
     
     <div className="discount">
      <div className="bg-green-600 text-white rounded-md text-sm p-1">New</div>
      <div className="bg-red-600 text-white text-sm p-1 rounded-md">-10%</div>
     </div>
     
     <Link href={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
            
            onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} 
          /></Link>
        
      <div className="icons">
        
<button className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
  <FaHeart />
</button>

<button className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
  <PiShoppingCartBold />
</button>

<button className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
  <FaShare />
</button>

      </div>
      <div className=" info flex flex-col gap-1.5 p-4">
<h3>{product.title}</h3>

      <div className="stars flex text-yellow-400">
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
      </div>

     <div className="flex items-center gap-2.5">
  <span className="text-green-600 font-bold">
   {product.price}
  </span>
  <span className="line-through text-gray-400 text-sm">
    $19.00
  </span>
</div>

      
        <button className="bg-green-600 text-white px-3 py-1 rounded">
            Add to Cart
        </button>
      </div>
      
     
    </div>
  </SwiperSlide>
))}
</Swiper>
</div>

      </div>
  </div>
</div>
<Homefarm/>
</div>

   </>
  );
}
