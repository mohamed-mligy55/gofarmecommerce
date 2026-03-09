"use client"
import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, Loader2 } from 'lucide-react';
import ProductCard from '../ProductCard'; // افترض وجود هذا المكون لديك
import { title } from 'process';
  


const GroceriesPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State للبحث والفلترة
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // 1. جلب البيانات من API
  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products/category/groceries');
        const data = await res.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchGroceries();
  }, []);

  // 2. معالجة البحث والفلترة معاً
  useEffect(() => {
    let result = [...products];

    // الفلترة بالبحث (Search)
    if (searchTerm) {
      result = result.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // الترتيب (Sorting)
    if (sortBy === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [searchTerm, sortBy, products]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-green-600 w-12 h-12" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Groceries Market</h1>
          <p className="text-gray-500 mt-1">Discover fresh products for your home</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <input 
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full sm:w-48">
            <select 
              className="w-full appearance-none pl-10 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500 cursor-pointer bg-white"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort by: Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
            <ArrowUpDown className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Search className="text-gray-300 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">No products found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filters to find what you're looking for.</p>
          <button 
            onClick={() => {setSearchTerm(""); setSortBy("default")}}
            className="mt-6 text-green-600 font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default GroceriesPage;