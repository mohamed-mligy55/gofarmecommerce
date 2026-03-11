'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtoheart, deletefromheart, decreaseheart } from "../store/heartslice";
import { addToCart } from "../store/cartslice";
import toast from 'react-hot-toast';
import Image from 'next/image'; // للأداء العالي
import Link from 'next/link';

const WishlistClient = () => {
    const products = useSelector(state => state.heart || []);
    const dispatch = useDispatch();

    const removefromheart = (product) => {
        dispatch(deletefromheart(product));
        toast.success(`${product.title} removed`, {
            style: { borderRadius: '12px', background: '#fff', color: '#ef4444', border: '1px solid #fee2e2' }
        });
    };

    return (
        <main className="p-4 md:p-8 bg-white min-h-screen">
            {/* Breadcrumbs - تحسين الـ SEO الداخلي */}
            <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                <span>&gt;</span>
                <span className="text-green-600 font-medium">Wishlist</span>
            </nav>

            <header className="flex items-center gap-3 mb-10">
                <span className="text-2xl" aria-hidden="true">❤️</span>
                <h1 className="text-3xl font-bold text-[#1A1A1A]">My Wishlist</h1>
            </header>

            {products.length === 0 ? (
                <section className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <p className="text-gray-500 text-lg">Your wishlist is currently empty.</p>
                    <Link href="/collection" className="mt-4 inline-block text-green-600 font-bold hover:underline">
                        Explore Products
                    </Link>
                </section>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <article key={product.id} className="border border-gray-100 rounded-2xl p-5 relative group hover:shadow-xl transition-all duration-300">
                            
                            {/* زر الحذف المحسن إمكانية الوصول */}
                            <button 
                                onClick={() => removefromheart(product)}
                                aria-label={`Remove ${product.title} from wishlist`}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors z-10"
                            >
                                ✕
                            </button>

                            {/* صورة المنتج المحسنة بـ Next Image */}
                            <div className="relative flex justify-center mb-4 h-48 items-center bg-[#F4F4F4] rounded-xl overflow-hidden p-4">
                                <Image 
                                    src={product.thumbnail} 
                                    alt={product.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="space-y-3">
                                <h3 className="font-bold text-gray-800 text-lg truncate">{product.title}</h3>
                                
                                <div>
                                    <span className="bg-green-50 text-green-700 text-[10px] px-2 py-1 rounded-md font-black tracking-wider uppercase">
                                        {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </span>
                                </div>

                                <div className="text-2xl font-black text-[#1A1A1A]">
                                    ${(product.price * (product.quantity || 1)).toFixed(2)}
                                </div>

                                <div className="flex flex-col gap-3 pt-2">
                                    {/* التحكم في الكمية */}
                                    <div className="flex items-center justify-between border border-gray-100 rounded-full px-2 py-1 bg-gray-50/50">
                                        <button 
                                            onClick={() => dispatch(decreaseheart(product))}
                                            className="w-8 h-8 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-full transition-all"
                                            aria-label="Decrease quantity"
                                        >-</button>
                                        <span className="font-bold text-sm text-gray-700">{product.quantity || 1}</span>
                                        <button 
                                            onClick={() => dispatch(addtoheart(product))}
                                            className="w-8 h-8 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-full transition-all"
                                            aria-label="Increase quantity"
                                        >+</button>
                                    </div>

                                    {/* زر الإضافة للسلة */}
                                    <button 
                                        onClick={() => {
                                            dispatch(addToCart(product));
                                            toast.success('Added to cart!');
                                        }}
                                        className="w-full bg-[#00B207] hover:bg-[#008A05] text-white font-bold py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                                    >
                                        <CartIcon />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </main>
    );
};

// أيقونة منفصلة لنظافة الكود
const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
    </svg>
);

export default WishlistClient;