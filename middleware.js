import { NextResponse } from 'next/server';

export function middleware(request) {
  // افترضنا أن اسم الكوكيز المسؤولة عن الجلسة هي 'auth_token'
  const token = request.cookies.get('auth_token');
  const { pathname } = request.nextUrl;

  // 1. إذا لم يكن مسجلاً للدخول ويحاول دخول أي صفحة غير (signup أو login)
  if (!token && pathname !== '/signup' && pathname !== '/login') {
    return NextResponse.redirect(new URL('/signup', request.url));
  }

  // 2. إذا كان مسجلاً للدخول ويحاول دخول صفحة (signup أو login)
  if (token && (pathname === '/signup' || pathname === '/login')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// تحديد المسارات التي يعمل عليها الـ Middleware
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};