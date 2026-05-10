import { NextResponse } from 'next/server';

export function middleware(request) {
  // 1. جلب التوكن
  const token = request.cookies.get('auth_token')?.value; 
  
  const { pathname, search } = request.nextUrl;

  // 2. التحقق من الحماية (للسلة وللقلب/المفضلة)
  // أضفنا شرط التحقق من /heart هنا
  if (!token && (pathname.startsWith('/cart') || pathname.startsWith('/heart'))) {
    
    const loginUrl = new URL('/login', request.url);
    
    // حفظ المسار الحالي (سواء كان سلة أو قلب) للعودة إليه بعد اللوجن
    loginUrl.searchParams.set('callbackUrl', pathname + search);
    
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/cart/:path*',
    '/heart/:path*', // إضافة المسار هنا ليعمل عليه الـ Middleware
  ],
};