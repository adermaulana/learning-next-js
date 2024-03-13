import { notFound } from "next/navigation";

export default function Reviews({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) {
  if (parseInt(params.reviewsId) > 1000) {
    return notFound();
  }
  return (
    <main>
      <h1>
        Reviews {params.reviewsId} for Product {params.productId}
      </h1>
    </main>
  );
}
