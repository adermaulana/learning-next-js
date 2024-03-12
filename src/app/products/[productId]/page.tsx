export default function ProductList({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <main>
      <h1>Product Details {params.productId} </h1>
    </main>
  );
}
