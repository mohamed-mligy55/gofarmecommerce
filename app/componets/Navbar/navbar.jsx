"use client"

import React from 'react'
import styles from "./Navbar.css"
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { ShoppingCart } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { Heart } from "lucide-react";
import { useSelector } from 'react-redux';



// components/Navbar.jsx
export default function Navbar() {
  const cart = useSelector(state => state.cart)
  return (
    <>
    <header className='flex flex-col gap-4 sticky top-0 z-40 bg-gofarm-white/95 backdrop-blur-md shadow-md transition-transform duration-500 ease-in-out translate-y-0' >
       <div className='top bg-[#009a62] w-full text-white text-center flex items-center justify-center gap-2.5  text-base font-bold'>
            <p>🎉 Get the Full Production Code!</p>
            <Link href="#">Buy Now →</Link>
          </div>
        <div className='container flex flex-col gap-4'>
          <div className='center  flex justify-between items-center '>
            <div className='image'>
              <Link href="/">
              <img src="https://gofarm.reactbd.com/logo.svg" loading='lazy'/>
              </Link>
        
          </div>
    <form >
      <CiSearch className='search'/>
    <input type='search' placeholder='Search Products...'/>
    <p>ctrl k</p>
    </form>
    <div className='signup flex items-center gap-8'>
      <div className='icons flex gap-5'>
     <Link href="/cart">  <div className='relative'>
        <ShoppingCart className="group-hover:text-gofarm-light-green hoverEffect" />
        <span>{cart.length}</span>
        </div>
        </Link> 
       <a href='/heart'>
        <div className='relative'>
          
<Heart className="group-hover:text-gofarm-light-green hoverEffect" />
       <span>0</span>
        </div>
        </a>
    
        </div>
        <div className='buttons flex gap-3 '>
          <Link href="#" className='login'>Login</Link>
          <Link href="#" className='register'>Register</Link>
        </div>
    </div>
    </div>
    <div className='bottom flex justify-between items-center'>
    <ul className='flex gap-5'>
    <li><Link href="#" className='active'>Home</Link></li>
    <li><Link href="#">Collection</Link></li>
    <li><Link href="#">Blog</Link></li>
    <li><Link href="#">Contact</Link></li>
    </ul>
    <div className='links'>
      <Link href="#" className='need text-[#6b7280] font-bold '>Need Help? </Link>
    </div>
    </div>
        </div>

    </header>
    
    </>
  )
}

