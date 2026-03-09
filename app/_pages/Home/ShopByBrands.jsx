import React from 'react';

// يمكنك استبدال النصوص بـ images إذا كانت الشعارات صوراً
const brands = [
  { name: "FOOD", logo: "FOOD" },
  { name: "Cooking", logo: "Cooking" },
  { name: "Best Cook", logo: "Best Cook" },
  { name: "Marcises", logo: "Marcises" },
  { name: "Skialist", logo: "Skialist" },
  { name: "GRILL&BAR", logo: "GRILL&BAR" },
  { name: "Krungthep", logo: "Krungthep" },
  { name: "BestFood", logo: "BestFood" },
  { name: "COLAS", logo: "COLAS" },
  { name: "CookME", logo: "CookME" },
  { name: "TOPOLIS", logo: "TOPOLIS" },
  { name: "Let's Cook", logo: "Let's Cook" },
];

const ShopByBrands = () => {
  return (
    <section className=" py-15 bg-gray-100 px-4">
      {/* العنوان */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-[#fca311]"></div>
          <h2 className="text-4xl font-bold text-gray-900">Shop By Brands</h2>
          <div className="h-[1px] w-12 bg-[#fca311]"></div>
        </div>
        <p className="text-gray-500">Discover products from your favorite trusted brands</p>
        
        <button className="mt-6 border border-[#00B207] text-[#00B207] px-8 py-2 rounded-full hover:bg-[#00B207] hover:text-white transition-all">
          Explore All Brands →
        </button>
      </div>

      {/* Grid الشعارات */}
      <div className="container mx-auto max-w-6xl bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="h-32 flex items-center justify-center border border-gray-100 rounded-xl hover:border-[#fca311] hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <span className="font-bold text-gray-800 text-lg tracking-tight">{brand.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByBrands;