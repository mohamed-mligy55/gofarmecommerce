import GroceriesClient from './GroceriesClient';


export const metadata = {
  title: "Fresh Groceries Market | GoFarm",
  description: "Browse our collection of fresh organic groceries delivered to your home.",
  openGraph: {
    title: "Fresh Groceries Market | GoFarm",
    description: "Quality groceries at your fingertips.",
  }
};

// 2. جلب البيانات على السيرفر (Performance)
async function getProducts() {
  const res = await fetch('https://dummyjson.com/products/category/groceries', {
    next: { revalidate: 3600 } // تحديث البيانات كل ساعة (Caching)
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();
  return data.products;
}

export default async function GroceriesPage() {
  const initialProducts = await getProducts();

  return (
    <main>
       {/* تمرير البيانات للمكون التفاعلي */}
      <GroceriesClient initialProducts={initialProducts} />
    </main>
  );
}