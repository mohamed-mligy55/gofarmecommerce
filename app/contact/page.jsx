import React from 'react';
export const metadata = {
  title: "Contact Us | GoFarm Support",
  description: "Get in touch with GoFarm. We are here to help with your organic grocery inquiries, support, and feedback.",
  keywords: ["contact gofarm", "customer support", "organic grocery help"],
};

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { HiOutlineBookOpen, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock, HiOutlineChatAlt } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';

const ContactFullPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      
      {/* 1. الـ Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center text-sm text-gray-400">
        <AiFillHome className="mr-1" /> Home <span className="mx-2"><MdOutlineKeyboardArrowRight /></span> <span className="text-[#10a342]">Contact Us</span>
      </div>

      {/* 2. قسم الـ Hero (من الصورة الأولى) */}
      <div className="bg-[#10a342] py-16 px-4 text-center text-white mb-10">
        <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-xs font-medium mb-6">
          WE'RE HERE TO HELP
        </div>
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="max-w-xl mx-auto text-white/90 text-lg">
          Have questions about our products or need assistance? We'd love to hear from you. 
          Our team is here to help with any inquiries you may have.
        </p>
      </div>

      {/* 3. قسم معلومات الاتصال والنموذج (من الصورة الثانية) */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[350px,1fr] gap-8">
        
        {/* معلومات الاتصال */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#10a342] mb-8">Contact Information</h2>
          <div className="space-y-6">
            <InfoItem icon={<HiOutlineLocationMarker />} title="Visit Our Store" text="123 Shopping Street, Commerce District, New York, NY 10001, USA" />
            <InfoItem icon={<HiOutlinePhone />} title="Call Us" text="+1 (555) 123-4567" />
            <InfoItem icon={<HiOutlineMail />} title="Email Support" text="support@gofarm.com" />
            <InfoItem icon={<HiOutlineClock />} title="Business Hours" text="Mon-Fri: 9AM - 6PM, Sat-Sun: 10AM - 4PM" />
          </div>
          <div className="mt-8 bg-[#fffaf5] p-4 rounded-xl border border-[#fee4cc] flex items-center gap-3">
            <HiOutlineChatAlt className="text-orange-500 text-xl" />
            <div>
              <p className="font-bold text-gray-800">Quick Response</p>
              <p className="text-sm text-gray-600">2-4 hours during business hours</p>
            </div>
          </div>
        </div>

        {/* نموذج المراسلة */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#10a342] mb-8">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Full Name *" placeholder="Enter your full name" />
              <InputField label="Email Address *" placeholder="your.email@example.com" />
            </div>
            <InputField label="Subject *" placeholder="Brief description of your inquiry" />
            <TextAreaField label="Message *" placeholder="Please provide detailed information about your inquiry..." />
            <button className="bg-[#10a342] text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#0d8536] transition shadow-md">
              <FiSend /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// مكونات مساعدة
const InfoItem = ({ icon, title, text }) => (
  <div className="flex gap-4">
    <div className="text-2xl text-[#10a342] bg-[#f0f9f2] p-2 rounded-lg h-fit">{icon}</div>
    <div>
      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-gray-500 text-sm leading-tight">{text}</p>
    </div>
  </div>
);

const InputField = ({ label, placeholder }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <input className="w-full border border-gray-200 rounded-lg p-3 focus:border-[#10a342] focus:ring-1 focus:ring-[#10a342] outline-none transition" placeholder={placeholder} />
  </div>
);

const TextAreaField = ({ label, placeholder }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <textarea className="w-full border border-gray-200 rounded-lg p-3 h-32 focus:border-[#10a342] focus:ring-1 focus:ring-[#10a342] outline-none" placeholder={placeholder} />
  </div>
);

export default ContactFullPage;