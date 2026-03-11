import CartClient from './CartClient';

export const metadata = {
  title: 'Shopping Cart | GoFarm',
  description: 'Review your items and proceed to checkout for fresh organic products.',
  robots: { index: false, follow: true }, // سلة التسوق عادة لا تُفهرس في جوجل ولكن الروابط بداخلها تُتبع
};

export default function CartPage() {
  return <CartClient />;
}