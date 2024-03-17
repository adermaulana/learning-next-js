import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
};

export default function Products() {
  const productId = 100;
  return (
    <main>
      <h1>Products</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </main>
  );
}
