// components/Navbar.jsx
import { cookies } from 'next/headers';
import NavbarClient from './NavbarContent'; // سننشئ هذا المكون الصغير

export default async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token');
  const isLoggedIn = !!token;

  return <NavbarClient isLoggedIn={isLoggedIn} />;
}