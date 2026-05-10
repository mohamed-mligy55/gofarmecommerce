// components/Navbar.jsx
import { cookies } from 'next/headers';
import NavbarClient from './NavbarContent'; // سننشئ هذا المكون الصغير

export default async function Navbar() {


  return <NavbarClient  />;
}