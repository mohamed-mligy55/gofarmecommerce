import WishlistClient from './WishlistClient';

export const metadata = {
  title: "My Wishlist | GoFarm",
  description: "View and manage your favorite organic products in your wishlist.",
  robots: { index: false, follow: true }, // صفحات المفضلة الشخصية لا تحتاج أرشفة
};

export default function Page() {
  return <WishlistClient />;
}