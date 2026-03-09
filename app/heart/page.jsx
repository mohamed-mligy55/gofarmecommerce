"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import   {addtoheart, deletefromheart} from "../store/heartslice"
import {decreaseheart} from "../store/heartslice"
import {addToCart} from "../store/cartslice"
import toast from 'react-hot-toast'

const WishlistPage = () => {
    const products = useSelector(state => state.heart || [])
    const dispatch = useDispatch()
const removefromheart = (product)=>{
    dispatch(deletefromheart(product))
  
    toast.success(`${product.title}  deleted from wishlist`,{
       style:{
        borderRadius: '12px',
            background: '#fff',
            color: '#ef4444',
            border: '1px solid #fee2e2',
       }
    })
}
  
    return (
        <div className="p-8 bg-white min-h-screen">
            {/* Header Section */}
            <div className="mb-8">
                <nav className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                    <span className="hover:text-green-600 cursor-pointer">Home</span>
                    <span>&gt;</span>
                    <span className="text-green-600 font-medium">Wishlist</span>
                </nav>
                <div className="flex items-center gap-2">
                    <span className="text-red-500 text-2xl">❤️</span>
                    <h1 className="text-3xl font-bold text-[#1A1A1A]">My Wishlist</h1>
                </div>
            </div>

            {/* Grid */}
            {products.length === 0 ? (
                <div className="text-center py-20 text-gray-400 border-2 border-dashed rounded-xl">
                    Your wishlist is currently empty.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border border-gray-100 rounded-2xl p-5 relative group hover:shadow-lg transition-all duration-300">
                            
                            {/* زر الحذف X */}
                            <button onClick={()=>removefromheart(product)}
                                
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors z-10"
                            >
                                ✕
                            </button>

                            {/* صورة المنتج */}
                            <div className="flex justify-center mb-4 h-48 items-center bg-[#F4F4F4] rounded-xl p-4 overflow-hidden">
                                <img 
                                    src={product.thumbnail} 
                                    alt={product.title} 
                                    className="max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* التفاصيل */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-gray-800 text-lg truncate">{product.title}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="bg-green-50 text-green-700 text-[11px] px-2 py-1 rounded-md font-bold">
                                        {product.stock} IN STOCK
                                    </span>
                                </div>

                                <div className="text-2xl font-black text-[#1A1A1A] pt-1">
                                    ${product.price * product.quantity?.toFixed(2)}
                                </div>

                                {/* صف الأزرار: التحكم في الكمية + زر الإضافة للسلة */}
                                <div className="flex flex-col gap-3 mt-4">
                                    {/* التحكم في الكمية */}
                                    <div className="flex items-center justify-between border border-gray-200 rounded-full px-2 py-1 bg-white">
                                        <button onClick={()=>dispatch(decreaseheart(product))} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full text-gray-500">-</button>
                                        <span className="font-semibold text-sm text-gray-700">{product.quantity}</span>
                                        <button onClick={()=>dispatch(addtoheart(product))} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full text-gray-500">+</button>
                                    </div>

                                    {/* زر Add to Cart الأخضر */}
                                    <button 
                                        onClick={() =>dispatch(addToCart(product))}
                                        className="w-full bg-[#00B207] cursor-pointer hover:bg-[#008A05] text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-95"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                                        </svg>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default WishlistPage