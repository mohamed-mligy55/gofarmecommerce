'use client';
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletefromcart, addToCart, decreaseQuantity } from "../../app/store/cartslice";
import toast from 'react-hot-toast';
import Image from 'next/image'; // مهم جداً للأداء
import Link from 'next/link';

const CartClient = () => {
  const products = useSelector(state => state.cart || []);
  const dispatch = useDispatch();

  // تحسين الأداء: لا تحسب السعر الإجمالي إلا إذا تغيرت المنتجات
  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0);
  }, [products]);

  const handleRemove = (product) => {
    dispatch(deletefromcart(product));
    toast.error(`${product.title} removed`, {
      style: { borderRadius: '12px', background: '#fff', color: '#ef4444', border: '1px solid #fee2e2' }
    });
  };

  return (
    <main className="max-w-7xl mx-auto p-4 md:p-10 bg-white min-h-screen font-sans">
      {/* 1. هيكلية HTML (Semantic HTML) - استخدام header و section */}
      <header className="flex items-baseline justify-between mb-12 border-b border-gray-100 pb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Shopping Cart</h1>
        <p className="text-gray-400 font-medium" aria-live="polite">{products.length} items</p>
      </header>

      {products.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* قائمة المنتجات */}
          <section className="flex-[2] w-full" aria-label="Cart Items">
            <div className="divide-y divide-gray-100">
              {products.map((product) => (
                <article key={product.id} className="flex flex-col sm:flex-row items-center py-8 group transition-all">
                  
                  {/* Image Optimization */}
                  <div className="relative w-32 h-32 bg-[#f9f9f9] rounded-2xl overflow-hidden shadow-sm transition-transform group-hover:scale-105">
                    <Image 
                      src={product.thumbnail || product.image} 
                      alt={product.title} 
                      fill 
                      sizes="128px"
                      className="object-contain p-4 mix-blend-multiply"
                      priority={false} // لا تعطه أولوية لأنه قد يكون أسفل الصفحة
                    />
                  </div>

                  <div className="flex-1 sm:ml-8 mt-4 sm:mt-0 w-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">{product.title}</h3>
                        <p className="text-sm text-gray-400 mt-1 uppercase tracking-widest text-[10px] font-bold">{product.category}</p>
                      </div>
                      <button 
                        onClick={() => handleRemove(product)} 
                        className="text-gray-300 hover:text-red-500 transition-all p-2"
                        aria-label={`Remove ${product.title} from cart`}
                      >
                        <TrashIcon />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-100 rounded-full bg-white shadow-sm px-2 py-1">
                        <button 
                          onClick={() => dispatch(decreaseQuantity(product))} 
                          className="w-8 h-8 flex items-center justify-center hover:bg-red-50 rounded-full transition-colors text-gray-400 hover:text-red-500"
                          aria-label="Decrease quantity"
                        > − </button>
                        <span className="px-4 font-bold text-sm text-gray-700">{product.quantity}</span>
                        <button 
                          onClick={() => dispatch(addToCart(product))} 
                          className="w-8 h-8 flex items-center justify-center hover:bg-green-50 rounded-full transition-colors text-gray-400 hover:text-green-600"
                          aria-label="Increase quantity"
                        > + </button>
                      </div>
                      <p className="font-bold text-gray-900 text-xl tracking-tight">${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ملخص الحساب */}
          <aside className="flex-1 w-full lg:sticky lg:top-10">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">Order Summary</h2>
              
              <div className="space-y-5">
                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-gray-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                  <span>Standard Shipping</span>
                  <span className="text-green-500 font-bold uppercase text-[10px] tracking-widest">Free</span>
                </div>
                
                <div className="pt-6 border-t border-gray-50 flex justify-between items-end">
                  <span className="font-bold text-gray-900 text-base">Total Amount</span>
                  <p className="text-3xl font-black text-gray-900 tracking-tighter">${totalPrice.toFixed(2)}</p>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white mt-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-black transition-all duration-500 active:scale-[0.97] shadow-lg shadow-green-100">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </aside>
        </div>
      ) : (
        <div className="text-center py-20 flex flex-col items-center justify-center">
          <EmptyCartIcon />
          <p className="text-gray-400 text-lg font-medium">Your shopping bag is empty.</p>
          <Link href="/collection" className="mt-6 text-sm font-black text-black underline tracking-widest hover:text-green-600 transition-colors">
            CONTINUE SHOPPING
          </Link>
        </div>
      )}
    </main>
  );
};

// مكونات صغيرة للأيقونات لتحسين نظافة الكود
const TrashIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
);

const EmptyCartIcon = () => (
  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
    <svg className="w-10 h-10 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
  </div>
);

export default CartClient;