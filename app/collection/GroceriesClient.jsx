'use client';
import React, { useState, useMemo } from 'react';
import { Search, ArrowUpDown } from 'lucide-react';
import ProductCard from '../ProductCard';
import "./collection.css"

const GroceriesClient = ({ initialProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // تحسين الأداء: استخدام useMemo بدلاً من useEffect لتصفية المنتجات
  // هذا يمنع العمليات الحسابية المكررة عند كل رندرة
  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    if (searchTerm) {
      result = result.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchTerm, sortBy, initialProducts]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Groceries Market</h1>
        <p className="text-gray-500 mt-1">Discover fresh products for your home</p>
      </header>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="relative flex-1">
          <label htmlFor="search" className="sr-only">Search products</label>
          <input 
            id="search"
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
        </div>

        <div className="relative">
          <select 
            aria-label="Sort products"
            className="w-full sm:w-48 appearance-none pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white cursor-pointer"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort by: Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
          <ArrowUpDown className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Grid */}
      <section >
        {filteredProducts.length > 0 ? (
          <div className="collection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed">
             <p className="text-gray-500">No products found for "{searchTerm}"</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default GroceriesClient;