"use client";
import { useState, useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";

import { IoCall } from "react-icons/io5";
import { TbClockHour4Filled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaArrowUp, FaGithub,FaLinkedinIn,FaFacebookF  } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import "./footer.css"









const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-white border-t border-gray-200 bo pt-12 pb-8 flex flex-col gap-8 font-bold">
      {/* الجزء العلوي: معلومات الاتصال */}
   <div className=" ">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-start gap-8">
        
        {/* Visit Us */}
        <div className="flex items-start gap-3">
          <span className="text-2xl text-gray-950"><FaLocationDot /></span>
          <div>
            <h4 className="font-bold text-gray-900">Visit Us</h4>
            <p className="text-gray-500 text-sm">123 Shopping Street, Commerce<br />District, New York, NY 10001, USA</p>
          </div>
        </div>

        {/* Call Us */}
        <div className="flex items-start gap-3">
          <span className="text-xl"><IoCall /></span>
          <div>
            <h4 className="font-bold text-gray-900">Call Us</h4>
            <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start gap-3">
          <span className="text-xl"><TbClockHour4Filled /></span>
          <div>
            <h4 className="font-bold text-gray-900">Working Hours</h4>
            <p className="text-gray-500 text-sm">Monday - Friday: 9AM - 6PM</p>
          </div>
        </div>

        {/* Email Us */}
        <div className="flex items-start gap-3">
          <span className="text-xl"><MdEmail /></span>
          <div>
            <h4 className="font-bold text-gray-900">Email Us</h4>
            <p className="text-gray-500 text-sm">support@gofarm.com</p>
          </div>
        </div>

      </div>
    </div>

      {/* الجزء الرئيسي: الأعمدة الأربعة */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* اللوجو والنبذة */}
        <div className='flex flex-col gap-2.5' >
          <img src="https://gofarm.reactbd.com/logo.svg " className='h-8 w-[140px]'/>
          <p className="text-gray-500 ">Discover fresh, organic farm products at GoFarm, your trusted online destination.</p>
          
          <div className='icons '>
            <a href='#'><FiYoutube /></a>
           <a href='#'><FaGithub /></a> 
           <a href='#'><FaLinkedinIn/></a> 
           <a href='#'><FaFacebookF/></a> 

          </div>
        </div>

        {/* Quick Links */}
        <div className='flex flex-col gap-2'>
          <h3 className="font-bold text-lg ">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
           <li> <a href='#'>About us</a> </li>
           <li> <a href='#'>Contact us</a> </li>
           <li> <a href='#'>Terms & Conditions</a> </li>
           <li> <a href='#'>Privacy Policy</a> </li>
           <li> <a href='#'>FAQs</a> </li>
           <li> <a href='#'>Help</a> </li>
            
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold text-lg mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-600">
            <li> <a href='#'>Ice and Cold</a> </li>
           <li> <a href='#'>Dry Food</a> </li>
           <li> <a href='#'>Fast Food</a> </li>
           <li> <a href='#'>Frozen</a> </li>
           <li> <a href='#'>Meat</a> </li>
           <li> <a href='#'>Fish</a> </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">Subscribe to our newsletter.</p>
          <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded mb-2" />
          <button className="w-full bg-green-600 text-white py-2 rounded font-bold hover:bg-green-700">Subscribe</button>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="text-center  text-gray-500">© 2026 GOFARM. All rights reserved.</div>

      {/* زر العودة للأعلى */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-green-600 cursor-pointer text-white p-3 rounded-lg shadow-xl hover:bg-green-700 transition-all"
        >
          <FaArrowUp />

        </button>
      )}
    </footer>
  );
};

export default Footer;