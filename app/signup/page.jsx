"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { User, Mail, Eye, EyeOff, Lock } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image" 
// الخطأ كان هنا: "...webp "
import signupImg from "../../public/images/signin-image.webp"; // المسار الصحيح بدون مسافة





// قواعد التحقق
const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "At least 6 characters").required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  terms: yup.boolean().oneOf([true], "You must accept terms")
}).required();

const SignupForm = () => {
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const router = useRouter()

  const onSubmit = (data) => {
    toast.success("Account created successfully!");
    router.push("/login")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* الفورم */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Create Account</h2>
          <p className="text-gray-500 mb-8">
            Already have an account? <Link href="/login" className="text-green-600 font-semibold hover:underline">Sign in here</Link>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* الحقول (Full Name, Email, Password, Confirm Password) */}
            {[
              { name: "fullName", label: "Full Name", icon: <User size={18} /> },
              { name: "email", label: "Email", icon: <Mail size={18} /> },
              { name: "password", label: "Password", icon: <Lock size={18} />, type: "password" },
              { name: "confirmPassword", label: "Confirm Password", icon: <Lock size={18} />, type: "password" }
            ].map((field) => (
              <div key={field.name} className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                <div className="relative flex items-center">
                  <input 
                    {...register(field.name)}
                    type={field.type === "password" && showPass ? "text" : field.type || "text"}
                    className="w-full pl-3 pr-10 py-2 border border-gray-200 rounded-lg outline-none focus:border-green-500 transition-colors"
                  />
                  <div className="absolute right-3 text-gray-400">{field.icon}</div>
                </div>
                {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name]?.message}</p>}
              </div>
            ))}

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" {...register("terms")} className="accent-green-600" />
              <span className="text-sm text-gray-600">I agree to the <Link href="#" className="text-green-600 underline">Terms and Conditions</Link></span>
            </div>
            {errors.terms && <p className="text-red-500 text-xs">{errors.terms.message}</p>}

            <button type="submit" className=" cursor-pointer w-full bg-green-600 text-white font-bold py-3 rounded-full hover:bg-green-700 transition-all shadow-lg shadow-green-200">
              Sign up
            </button>
          </form>
        </div>

        {/* الصورة الجانبية */}
        <Image
  src={signupImg}
  width={500}
  height={500}
  alt="Login"
  priority
/>
      </div>
    </div>
  );
};

export default SignupForm;