import React from 'react';
import { HiOutlineBookOpen, HiOutlineUsers, HiOutlineEye } from 'react-icons/hi'; // أيقونات مشابهة للصورة
import { AiFillHome } from 'react-icons/ai';

const contact = () => {
  return (
   <>




    <div className="w-full bg-white flex flex-col items-center py-8 px-4 font-sans">
      
      {/* Breadcrumbs Section */}
      <div className="w-full max-w-5xl mb-6 flex items-center text-sm text-gray-400">
        <AiFillHome className="mr-1 text-gray-500" />
        <span className="hover:underline cursor-pointer">Home</span>
        <span className="mx-2 font-light">{'>'}</span>
        <span className="text-[#10a342] font-semibold">Blog</span>
      </div>

      {/* Main Banner Card */}
      <div className="w-full max-w-5xl bg-[#10a342] rounded-[24px] py-16 px-6 md:px-12 text-center text-white shadow-xl relative overflow-hidden">
        
        {/* Top Badge: "Our Blog" */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[13px] font-medium mb-6 border border-white/20">
          <HiOutlineBookOpen className="mr-2 text-lg" />
          Our Blog
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Stories, Tips & Insights
        </h1>

        {/* Subtitle / Description */}
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-[1.6] mb-12">
          Discover the latest trends, expert advice, and behind-the-scenes stories from our team. 
          Stay informed with our curated collection of articles.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          
          {/* Card 1: Articles */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center transition-all hover:bg-white/15">
            <div className="flex items-center text-white/70 text-sm mb-2 gap-2">
              <HiOutlineBookOpen size={18} />
              <span>Articles</span>
            </div>
            <span className="text-3xl font-bold tracking-tight">12</span>
          </div>

          {/* Card 2: Readers */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center transition-all hover:bg-white/15">
            <div className="flex items-center text-white/70 text-sm mb-2 gap-2">
              <HiOutlineEye size={18} />
              <span>Readers</span>
            </div>
            <span className="text-3xl font-bold tracking-tight">15K+</span>
          </div>

          {/* Card 3: Authors */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center transition-all hover:bg-white/15">
            <div className="flex items-center text-white/70 text-sm mb-2 gap-2">
              <HiOutlineUsers size={18} />
              <span>Authors</span>
            </div>
            <span className="text-3xl font-bold tracking-tight">5+</span>
          </div>

        </div>
      </div>
    </div>

   </>
  )
}

export default contact