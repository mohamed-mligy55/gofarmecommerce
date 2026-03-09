import React from 'react'
import { FaArrowRight } from "react-icons/fa";
  import { IoStorefront } from "react-icons/io5";
  import { FiTrendingUp } from "react-icons/fi";
  import { HiUsers } from "react-icons/hi";
  import { FiDollarSign } from "react-icons/fi";
  import "./home.css"
import WhyShop from "./whyShop";
import ShopByBrands from "./ShopByBrands";
  import { LayoutGrid, ArrowRight } from 'lucide-react';
  import { 
  PiBowlFood, 
  PiSnowflake, 
  PiLeaf, 
  PiEggCrack, 
  PiFish, 
  PiAppleLogo, 
  PiPizza, 
  PiIceCream 
} from "react-icons/pi"; // مكتبة Phosphor Icons
const categories = [
  { id: 1, title: "Frozen", icon: <PiBowlFood size={40} />, link: "/frozen" },
  { id: 2, title: "Ice and Cold", icon: <PiSnowflake size={40} />, link: "/cold" },
  { id: 3, title: "Vegetables", icon: <PiLeaf size={40} />, link: "/vegetables" },
  { id: 4, title: "Meat", icon: <PiEggCrack size={40} />, link: "/meat" },
  { id: 5, title: "Fish", icon: <PiFish size={40} />, link: "/fish" },
  { id: 6, title: "Fruit", icon: <PiAppleLogo size={40} />, link: "/fruit" },
  { id: 7, title: "Fast Food", icon: <PiPizza size={40} />, link: "/fastfood" },
  { id: 8, title: "Dry Food", icon: <PiIceCream size={40} />, link: "/dryfood" },
];




const Homefarm = () => {
  return (
    <>
  <section className=" selling  ">
        <div className='container flex justify-between items-center'>
            <div className='our-join w-[45%] flex flex-col gap-8 '>
                <div className=''>
                    <span className='head text-[#008a38] bg-[#e1f5e9]  w-fit p-3'>Join Our Vendor Community</span>
                </div>
                
                <div className='text flex flex-col gap-3'>
                    <h2 className="text-4xl  inline leading-tight font-bold">Start Selling on <span className="text-green-600">GoFarm</span></h2>
                    <p className='text-gray-600 leading-[1.6] '>Turn your passion into profit. Join thousands of successful vendors who trust GoFarm to grow their business and reach new customers every day.</p>
                </div>
                <div className='buttons'>
                    <button className='flex items-center gap-1'>Become a Vendor <FaArrowRight /> </button>
                    <button>Learn More</button>
                </div>
                <div className='all-number flex items-center gap-6'>

               
                <div className='number'>
                    <p>500+</p>
                    <p>Active Vendors</p>
                </div>
                <div className='number'>
                    <p>10K+</p>
                    <p>Monthly Orders</p>
                </div>
                <div className='number'>
                    <p>98%</p>
                    <p>Success Rate</p>
                </div>
                 </div>
            </div>
            <div className='sales w-[45%] grid grid-cols-2 gap-4 lg:gap-6' >
                <div className='box'>
                  
                        <div className='text'>
                        <div className="icon">
                            <IoStorefront />
                        </div>
                        
                        <h3>Your Storefront</h3>
                        <p>Create your own digital store</p>
                         </div>
                    
                    
                </div>
                <div className='box'>
                    <div className='text'>
                        <div className='icon'>
                         <FiTrendingUp/>
                        </div>
                       
                        <h3>Grow Sales</h3>
                        <p>Reach thousands of customers</p>
                         </div>
                </div>
                <div className='box'>
                    <div className='text '>
                       <div className='icon '>
                         <HiUsers/>
                        </div>
                        <h3>Your Storefront</h3>
                        <p>Create your own digital store</p>
                         </div>
                </div>
                <div className='box'>
                    <div className='text'>
                       <div className='icon'>
                         <FiDollarSign/>
                        </div>

                        <h3>Earn More</h3>
                        <p>Competitive commission rates</p>
                         </div>
                </div>

            </div>

        </div>
    </section>



    <section className=" bg-white flex flex-col items-center text-center px-4">
      {/* الخطوط الجانبية والعنوان الرئيسي */}
      <div className="flex items-center gap-4 mb-4 w-full max-w-4xl justify-center">
        <div className="h-[1px] bg-gradient-to-r from-transparent to-[#00B207] flex-1"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
          Popular Categories
        </h2>
        <div className="h-[1px] bg-gradient-to-l from-transparent to-[#00B207] flex-1"></div>
      </div>

      {/* الوصف */}
      <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-4">
        Explore our most popular product categories and find what you need
      </p>

      {/* السطر الصغير مع الأيقونة */}
      <div className="flex items-center gap-2 mb-10">
        <span className="text-lg">✨</span>
        <span className="text-[#00B207] font-medium">
          Curated collections for your convenience
        </span>
      </div>

   

        {/* --- شبكة البطاقات (The Grid) --- */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-11 px-11 rounded-3xl shadow-2xl">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="group  shadow-[0_12px_15px_rgba(0,0,0,0.1)] bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:shadow-green-50 hover:border-[#00B207] cursor-pointer"
          >
            {/* الأيقونة بخلفية خفيفة */}
            <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center text-[#00B207] mb-6 group-hover:bg-[#00B207] group-hover:text-white transition-colors duration-300">
              {cat.icon}
            </div>

            {/* العنوان */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">{cat.title}</h3>

            {/* الخط الفاصل الصغير */}
            <div className="w-full h-[1px] bg-gray-100 mb-6"></div>

            {/* زر Explore Now */}
            <button className="flex items-center gap-2 text-[#00B207] font-semibold text-sm hover:underline">
              Explore Now 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>

    </section>

<WhyShop/>
<ShopByBrands/>

    </>

  )
}

export default Homefarm
