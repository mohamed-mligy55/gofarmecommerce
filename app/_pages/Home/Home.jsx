import React from 'react'
import { FaArrowRight } from "react-icons/fa";
  import { IoStorefront } from "react-icons/io5";
  import { FiTrendingUp } from "react-icons/fi";
  import { HiUsers } from "react-icons/hi";
  import { FiDollarSign } from "react-icons/fi";
  import "./home.css"




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
    </>
  )
}

export default Homefarm
