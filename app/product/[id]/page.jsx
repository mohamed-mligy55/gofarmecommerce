
  import { 
  FaStar, FaHome, FaChevronRight, FaShoppingCart, FaRegHeart, 
  FaExchangeAlt, FaQuestionCircle, FaTruck, FaShareAlt, FaChevronDown, 
  FaUndo, FaShieldAlt, FaCheckCircle, FaBox, FaSyncAlt 
} from "react-icons/fa";
import  {addToCart} from "../../store/cartslice"
import { useDispatch } from "react-redux";
import AddToCartBtn from "../AddToCartBtn";

export default async function ProductPage({ params }) {
  
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();


  return (
<div className=" pt-[25px] pb-20 min-h-screen bg-white font-sans overflow-x-hidden">
      {/* الـ Container الأساسي */}
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Breadcrumbs - المسار العلوي */}
        <nav className="flex items-center gap-2 text-gray-400 text-sm mb-8">
          <FaHome className="text-xs" /> 
          <span>Home</span> <FaChevronRight className="text-[10px]" />
          <span>Product</span> <FaChevronRight className="text-[10px]" />
          <span className="text-green-600 font-medium">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* الجانب الأيسر: برواز الصورة */}
          <div className="border border-gray-200 rounded-lg p-10 flex items-center justify-center bg-white shadow-sm h-fit">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full max-w-[450px] object-contain"
            />
          </div>

          {/* الجانب الأيمن: البيانات */}
          <div className="flex flex-col gap-4">
            
            {/* Let's Cook Badge */}
            <span className="bg-[#f0f9f4] text-[#00a859] px-3 py-1 rounded text-[16px] font-bold w-fit border border-[#e0f2e9]">
              Let's Cook
            </span>

            {/* العنوان باللون الأخضر الغامق */}
            <h1 className="text-[50px] font-bold text-green-600">
              {product.title}
            </h1>

            {/* الوصف */}
            <p className="text-gray-600 text-[16px] leading-relaxed max-w-lg mt-2">
              {product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Veritatis aliquid architecto molestiae voluptas odio earum fugit amet.
            </p>

            {/* النجوم */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-yellow-500 text-sm">
                 <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="text-gray-400 text-[11px]">No reviews yet</span>
            </div>

            <hr className="border-gray-100 my-2" />

            {/* السعر والخصم */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-[#00a859]">${product.price}</span>
              <span className="text-xl text-gray-400 line-through font-semibold">$28.00</span>
              <span className="bg-[#feebee] text-[#eb5757] text-[10px] font-bold px-2 py-0.5 rounded">
                -10%
              </span>
            </div>

            {/* اختيار المقاس */}
            <div className="mt-4 space-y-3">
              <h4 className="text-[13px] font-bold text-gray-800">Select Size</h4>
              <div className="flex gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button 
                    key={size}
                    className={`w-11 h-9 border border-gray-200 rounded-md text-[11px] font-medium transition-all ${
                      size === 'M' ? 'bg-white border-gray-300' : 'text-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* In Stock & Counter */}
            <div className="flex items-center gap-3 mt-4">
              <div className="bg-[#e8f5e9] text-[#00a859] text-[20px] font-bold px-3 py-1.5 rounded">
                In Stock
              </div>
              
              {/* مربعات العداد */}
              <div className="flex gap-1">
                {[9, 'S', 'gray:20', 'tett berstr', 'border 40'].map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded px-2 py-1 text-[15px] text-gray-400">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* شريط التوفير البرتقالي */}
            <div className="bg-[#fff4e5] p-3 rounded-lg flex items-center gap-2 mt-4 relative overflow-hidden">
               <span className="text-xs">💰</span>
               <p className="text-[#855e2d] text-[18px] font-medium">
                 Save 10% on this item!
               </p>
               {/* التدرج البرتقالي اللي في الصورة */}
               <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#ffcc80] to-transparent opacity-40"></div>
            </div>



            <div className="flex flex-col gap-6 mt-8 w-full max-w-lg">
  
  {/* أزرار الـ Add to Cart والـ Heart */}
  <div className="flex gap-3">
    <AddToCartBtn product={product} />
    <button className="w-14 h-14 border-2 border-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm">
      <FaRegHeart size={20} />
    </button>
  </div>

  {/* قسم الخصائص - Accordion Style */}
 <div className="border-t border-[#f0f0f0] pt-2 mb-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-bold text-[16px] italic uppercase tracking-tight">{product.title}: Characteristics</h3>
                <FaChevronDown className="text-[#999] text-sm" />
              </div>
            </div>

            {/* التفاعل السريع - 4 أزرار */}
            <div className=" flex gap-4 pt-7">
              <div className="flex items-center gap-2 text-[14px] font-bold text-[#1a1a1a] cursor-pointer hover:text-[#00a859]">
                <FaExchangeAlt className="text-[#999]" /> Compare Product
              </div>
              <div className="flex items-center gap-2 text-[14px] font-bold text-[#1a1a1a] cursor-pointer hover:text-[#00a859]">
                <FaQuestionCircle className="text-[#999]" /> Ask a question
              </div>
              <div className="flex items-center gap-2 text-[14px] font-bold text-[#1a1a1a] cursor-pointer hover:text-[#00a859]">
                <FaTruck className="text-[#999]" /> Delivery & Return
              </div>
              <div className="flex items-center gap-2 text-[14px] font-bold text-[#1a1a1a] cursor-pointer hover:text-[#00a859]">
                <FaShareAlt className="text-[#999]" /> Share
              </div>
            </div>

            {/* قسم التوصيل النهائي - مطابق للصورة الخامسة والسادسة */}
            <div className="border border-[#e0e0e0] rounded-xl p-5 space-y-6 relative">
              <div className="flex items-start gap-4">
                <FaTruck className="text-[#ff9800] text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-[16px]">Free Delivery</h4>
                  <p className="text-[#999] text-[13px]">
                    Enter your Postal code for Delivery Availability. <span className="text-[#1a1a1a] font-bold underline cursor-pointer">Check now</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <FaUndo className="text-[#ff9800] text-xl mt-1" />
                <div>
                  <h4 className="font-bold text-[16px]">Return Delivery</h4>
                  <p className="text-[#999] text-[13px]">
                    Free 30 days Delivery Returns. <span className="text-[#1a1a1a] font-bold underline cursor-pointer">Details</span>
                  </p>
                </div>
              </div>

              
            </div>

          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
      <div className="border border-[#f0f0f0] rounded-2xl p-8 mt-20 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-[4px] h-[24px] bg-[#ff9800] rounded-full"></div>
            <h2 className="text-[24px] font-bold text-[#00a859]">Description</h2>
          </div>
          <div className="space-y-6 text-[#666] text-[15px] leading-[1.8]">
             <p>In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum. Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et. Repellendus ab ipsa in non doloremque tenetur est doloremque.</p>
             <p>Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit deleniti.</p>
             <p>Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae. Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.</p>
          </div>
        </div>

{/* 3. Trust Badges Section (مطابق للصورة الأخيرة - الجزء العلوي) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <FaShieldAlt />, title: "Secure Payment", desc: "100% secure payment with SSL encryption" },
            { icon: <FaTruck />, title: "Fast Delivery", desc: "Free shipping on orders over $50" },
            { icon: <FaSyncAlt />, title: "Easy Returns", desc: "30-day hassle-free returns" }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#f0f0f0] rounded-2xl p-8 shadow-sm flex flex-col items-center text-center group hover:border-[#00a859] transition-all">
              <div className="text-[#ff9800] text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-[#00a859] font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

       
        {/* 5. Detailed Info Grid (مطابق للصورة الأخيرة - الجزء السفلي) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Info */}
          <div className="bg-white border border-[#f0f0f0] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-[#ff9800]">
              <FaBox /> <span className="text-[#1a1a1a] font-bold">Product Info</span>
            </div>
            <div className="space-y-4 text-[13px]">
              <div className="flex justify-between">
                <span className="text-[#999]">Stock:</span>
                <span className="bg-[#e8f5e9] text-[#00a859] px-2 py-0.5 rounded font-bold">{product.stock} Available</span>
              </div>
              <div className="flex justify-between font-bold">
                <span className="text-[#999] font-normal">Brand:</span> <span>{product.brand || 'Brand'}</span>
              </div>
              <div className="flex justify-between text-[#999]">
                <span>SKU:</span> <span>#Y-CHILLI</span>
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="bg-white border border-[#f0f0f0] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-[#ff9800]">
              <FaTruck /> <span className="text-[#1a1a1a] font-bold">Shipping</span>
            </div>
            <div className="space-y-4 text-[13px]">
              <div className="flex items-center gap-2 text-[#00a859] font-bold italic">
                <FaCheckCircle /> Free Shipping
              </div>
              <div className="text-[#999]">Estimated: <span className="text-[#666] font-medium">2-5 business days</span></div>
              <div className="text-[#999]">Express: <span className="text-[#666] font-medium">1-2 business days</span></div>
            </div>
          </div>

          {/* Warranty */}
          <div className="bg-white border border-[#f0f0f0] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-[#ff9800]">
              <FaShieldAlt /> <span className="text-[#1a1a1a] font-bold">Warranty</span>
            </div>
            <div className="space-y-4 text-[13px]">
              <div className="text-[#999]"><span className="text-[#00a859] font-bold">1 Year</span> Manufacturer Warranty</div>
              <div className="text-[#999]"><span className="text-[#00a859] font-bold">30 Days</span> Return Policy</div>
              <div className="text-[#666] font-medium italic">Free Tech Support</div>
            </div>
          </div>

          {/* Quality */}
          <div className="bg-white border border-[#f0f0f0] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-[#ff9800]">
              <FaCheckCircle /> <span className="text-[#1a1a1a] font-bold">Quality</span>
            </div>
            <div className="space-y-4 text-[13px] text-[#00a859] font-bold italic">
              <div className="flex items-center gap-2"><FaCheckCircle /> Quality Tested</div>
              <div className="flex items-center gap-2"><FaCheckCircle /> Authentic Product</div>
              <div className="flex items-center gap-2"><FaCheckCircle /> Secure Packaging</div>
            </div>
          </div>
        </div>
</div>


    </div>
    </div>
  );
}