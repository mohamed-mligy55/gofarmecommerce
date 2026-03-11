"use server";

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// دالة تسجيل الدخول
export async function loginAction(data) {
  const cookieStore = await cookies();
  
  // تعيين الكوكي عند تسجيل الدخول الناجح
  cookieStore.set('auth_token', 'user_is_logged_in_secret', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24, 
    path: '/',
  });

  // بعد تسجيل الدخول، ننتقل للرئيسية
  redirect('/'); 
}

// دالة تسجيل الخروج
export async function logoutAction() {
  const cookieStore = await cookies();
  
  // مسح الكوكي
  cookieStore.delete('auth_token');
  
  // التوجيه لصفحة الـ signup مباشرة كما طلبت
  redirect('/signup');
}