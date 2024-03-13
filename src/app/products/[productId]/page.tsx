import { notFound } from "next/navigation";
export default function ProductList({
  params,
}: {
  params: { productId: string };
}) {
  if (parseInt(params.productId) > 1000) {
    return notFound();
  }
  return (
    <main>
      <h1>Product {params.productId} Details</h1>
    </main>
  );
}
