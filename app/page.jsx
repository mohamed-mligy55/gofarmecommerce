

import { IoIosArrowForward } from "react-icons/io";
import ProductSlider from "./ProductSlider";
import Homefarm from "./_pages/Home/Home";
import Image from 'next/image';
import "./page.css";
import banner from "../public/images/banner.webp"
  export const metadata = {
title:"home",
descerption:"the first page"

};


export default async function Home() {
 const res = await fetch("https://dummyjson.com/products/category/groceries",{
  next:{
    revalidate:3600
  }
 })
 const data = await res.json()

  return (
    <div className="main-content flex flex-col gap-30">
      {/* Banner */}
      <div className="banner">
        <Image 
          src={banner} // المسار يبدأ من داخل مجلد public مباشرة
          alt="Banner Image"
          fill // لجعل الصورة تملأ الحاوية
          className="object-cover" // لضمان عدم تشوه الصورة وتغطية المساحة
              priority // <--- مهم جداً: يخبر المتصفح بتحميل الصورة فوراً دون انتظار
        fetchPriority="high" //            // يفضل إضافتها للصور الكبيرة في أعلى الصفحة لتحسين الأداء
        />
   
        <div className="text">
          <h1 className="text-5xl text-[#18181b] font-bold leading-[1.2]">All you need for<br/> perfect breakfast</h1>
          <a href="#" className="flex gap-1.5 items-center">Shop Now <IoIosArrowForward /></a>
        </div>
      </div>

      <div className="feature flex flex-col gap-12">
        <div className="text text-center flex flex-col gap-2.5"> 
          <h2 className="text-3xl lg:text-4xl font-bold">Featured Products</h2>
          <p className="text-gray-500 text-lg">Discover our carefully curated selection</p>
        </div>

        {/* Sliders */}
        <ProductSlider 
          title="Fresh Food & Meat" 
          products={data?.products?.slice(0, 10)} 
          count="10" 
        />
        
        <ProductSlider 
          title="Daily Groceries" 
          products={data?.products?.slice(10, 20)} 
          count="10" 
        />

        <ProductSlider 
          title="Special Offers" 
          products={data?.products?.slice(20)} 
          count={data?.products?.length - 20} 
        />
      </div>

      <Homefarm />
    </div>
  );
}