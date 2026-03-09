import React from 'react';
import { ShieldCheck, Truck, CreditCard, Headphones, RotateCcw, Award, Zap, HeartHandshake } from 'lucide-react';

const features = [
  { title: "Secure Shopping", desc: "100% secure payment with SSL encryption", icon: <ShieldCheck size={32} />, color: "text-blue-500", bar: "bg-blue-500" },
  { title: "Free Delivery", desc: "Free shipping on orders over $50", icon: <Truck size={32} />, color: "text-green-500", bar: "bg-green-500" },
  { title: "Easy Payments", desc: "Multiple payment options available", icon: <CreditCard size={32} />, color: "text-purple-500", bar: "bg-purple-500" },
  { title: "24/7 Support", desc: "Dedicated customer support anytime", icon: <Headphones size={32} />, color: "text-orange-500", bar: "bg-orange-500" },
  { title: "Easy Returns", desc: "30-day hassle-free return policy", icon: <RotateCcw size={32} />, color: "text-pink-500", bar: "bg-pink-500" },
  { title: "Quality Assured", desc: "100% authentic products guaranteed", icon: <Award size={32} />, color: "text-yellow-500", bar: "bg-yellow-500" },
  { title: "Fast Processing", desc: "Orders processed within 24 hours", icon: <Zap size={32} />, color: "text-indigo-500", bar: "bg-indigo-500" },
  { title: "Best Price", desc: "Competitive pricing with great deals", icon: <HeartHandshake size={32} />, color: "text-red-500", bar: "bg-red-500" },
];

const WhyShop = () => {
  return (
    <section className=" bg-white px-4">
      {/* العنوان */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="h-[1px] w-20 bg-green-600"></div>
        <h2 className="text-4xl font-bold text-gray-900">Why Shop With Us</h2>
        <div className="h-[1px] w-20 bg-green-600"></div>
      </div>

      {/* الشبكة */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_12px_15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300">
            <div className={`${item.color} mb-6`}>{item.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm mb-6">{item.desc}</p>
            {/* الشريط الملون في الأسفل */}
            <div className={`h-1 w-16 rounded-full ${item.bar}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyShop;