"use client"
import Link from 'next/link';
import { FaHeart, FaShare } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { RiStarSFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartslice";
import { addtoheart } from "./store/heartslice";
import toast from 'react-hot-toast';
import Image from 'next/image';
import { memo } from 'react';

const ProductCard = memo(({ product }) => {
  const dispatch = useDispatch();

  const handleAction = (action, message) => {
    dispatch(action);
    toast.success(message, {
      style: { borderRadius: '10px', background: '#333', color: '#fff' },
      iconTheme: { primary: '#16a34a', secondary: '#FFFAEE' },
    });
  };

  return (
    <div className="product flex flex-col gap-2 group relative border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300 h-full">
      <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
       <Link href={`/product/${product.id}`}>
  <Image
    src={product.thumbnail}
    alt={product.title}
    width={200} // حدد أبعاد تقريبية
    height={200}
    className="object-contain hover:scale-110 transition-transform duration-500"
    sizes="(max-width: 768px) 100vw, 200px"
      priority
    
  />
</Link>
        <div className="icons">
          <button onClick={() => handleAction(addtoheart(product), `${product.title} Added To Wishlist!`)} 
                  className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
            <FaHeart />
          </button>
          <button onClick={() => handleAction(addToCart(product), `${product.title} added to cart!`)}
                  className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
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
        <h3 className="font-bold text-gray-800 hover:text-green-600 transition-colors truncate">{product.title}</h3>
        <div className="stars flex text-yellow-400 text-xs">
          {[...Array(5)].map((_, i) => <RiStarSFill key={i} />)}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-600 font-bold">${product.price}</span>
          <span className="line-through text-gray-400 text-xs">$19.00</span>
        </div>
      </div>
      <button onClick={() => handleAction(addToCart(product), `${product.title} added to cart!`)} 
              className="bg-green-600 text-white w-full py-2 rounded-md mt-auto text-sm font-medium hover:bg-green-700 transition-all">
        Add to Cart
      </button>
    </div>
  );
});

export default ProductCard;