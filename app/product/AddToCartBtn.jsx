"use client"; // ضروري جداً هنا

import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartslice";
import { FaShoppingCart } from "react-icons/fa";

export default function AddToCartBtn({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
    // اختياري: ممكن تضيف هنا alert أو toast بسيط
    console.log("Product added:", product.title);
  };

  return (
    <button
      onClick={handleAdd}
      className="flex-1 border-2 hover:border-[#00a859] bg-[#00a859] text-white py-2 rounded-lg flex items-center justify-center gap-2 font-bold transition-all"
    >
      <FaShoppingCart className="text-2xl" />
      Add to Cart
    </button>
  );
}