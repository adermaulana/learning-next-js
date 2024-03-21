"use client";

import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function Reviews({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error Loading Reviews");
  }

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
