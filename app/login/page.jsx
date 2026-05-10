"use client";
import React, { useState, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRouter, useSearchParams } from 'next/navigation';
import { loginAction } from '@/actions/auth'; 
import signupImg from "../../public/images/signin-image.webp"; 
import Image from "next/image";

// 1. Schema التحقق من البيانات
const signInSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// 2. فصل محتوى الفورم في مكون داخلي لاستخدام useSearchParams بأمان
const SignInForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  // جلب الـ callbackUrl من الرابط (المسار الذي حاول المستخدم دخوله قبل تسجيل الدخول)
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/'; 

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await loginAction(data); 

      if (res?.success) {
        // التوجه للرابط المطلوب (مثل السلة) ثم عمل refresh لتحديث حالة الجلسة
        router.push(callbackUrl);
        router.refresh(); 
      } else {
        // عرض الخطأ القادم من السيرفر (Action)
        alert(res?.error || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-4xl font-bold mb-2">Sign in</h1>
      <p className="text-gray-500 mb-6">Welcome back! Please enter your details.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input 
            {...register("email")}
            type="email" 
            placeholder="example@mail.com"
            className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md outline-none focus:ring-1 focus:ring-green-600 transition`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Password</label>
          <div className="relative">
            <input 
              {...register("password")}
              type={showPass ? "text" : "password"}
              placeholder="••••••••"
              className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md outline-none focus:ring-1 focus:ring-green-600 transition`}
            />
            <div 
              onClick={() => setShowPass(!showPass)} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
            >
              {showPass ? <AiOutlineEye size={20}/> : <AiOutlineEyeInvisible size={20}/>}
            </div>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-green-600 text-white py-3 rounded-md font-bold hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed transition-all shadow-md"
        >
          {loading ? "Logging in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
};

// 3. المكون الرئيسي المغلف بـ Suspense
const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-white py-10">
      <div className="flex w-full max-w-6xl items-center gap-16 px-6">
        
        {/* ملف الـ Form مغلف بـ Suspense لضمان عمل useSearchParams في Next.js */}
        <Suspense fallback={<div className="w-full md:w-1/2 text-center">Loading form...</div>}>
          <SignInForm />
        </Suspense>

        <div className="hidden md:block w-1/2">
          <Image 
            src={signupImg} 
            width={600} 
            height={600} 
            alt="Login Illustration" 
            priority 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;