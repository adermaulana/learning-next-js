export default function ProductList({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <main>
      <h1>Product {params.productId} Details</h1>
    </main>
  );
}
