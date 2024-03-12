export default function Reviews({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) {
  return (
    <main>
      <h1>
        Reviews {params.reviewsId} for Product {params.productId}
      </h1>
    </main>
  );
}
