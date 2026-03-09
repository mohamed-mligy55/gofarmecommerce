"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation';



// 1. تعريف مخطط التحقق باستخدام Zod
const signInSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  // 2. إعداد React Hook Form مع Zod Resolver
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit =  (data) => {
    console.log("Login data:", data);
    router.push('/');

};
    // بعد نجاح التحقق، ننتقل إلى الصفحة الرئيسية


  return (
    <div className="flex items-center justify-center bg-white py-7">
      <div className="flex w-full max-w-5xl items-center gap-16 px-4">
        
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-2">Sign in</h1>
          <p className="text-gray-500 mb-8">
            Don't have an account? <span className="text-green-600 font-medium cursor-pointer hover:underline">Register here</span>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input 
                {...register("email")}
                type="email" 
                placeholder="Enter email" 
                className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-green-600"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold mb-1">Password</label>
              <div className="relative">
                <input 
                  {...register("password")}
                  type={showPass ? "text" : "password"}
                  placeholder="Enter password" 
                  className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-green-600"
                />
                <div 
                  onClick={() => setShowPass(!showPass)} 
                  className="absolute right-3 top-4 text-gray-400 cursor-pointer"
                >
                  {showPass ? <AiOutlineEye size={20}/> : <AiOutlineEyeInvisible size={20}/>}
                </div>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md font-bold hover:bg-green-700 transition">
              Sign in
            </button>
          </form>
          
          {/* ... بقية الأجزاء (Google/Github) ... */}
        </div>

        <div className="hidden md:flex w-1/2 justify-center">
          <img src="https://gofarm.reactbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsignin-image.56cc179c.webp&w=1080&q=75" alt="Login Illustration" className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
}
;

export default SignIn;