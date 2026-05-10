"use server";
import { cookies } from 'next/headers';

export async function loginAction(data) {
  // 1. تحقق من البيانات مع قاعدة البيانات/API
  // 2. إذا نجح الدخول، احصل على التوكن
  const token = "الـ توكن الخاص بك";

  // 3. حفظ التوكن في الكوكيز من جهة السيرفر
  (await cookies()).set('auth_token', token, {
    httpOnly: true, // أمان أكثر
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // يوم واحد
    path: '/',
  });

  return { success: true };
}