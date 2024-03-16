import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

//async function
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    });
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductList({ params }: Props) {
  if (parseInt(params.productId) > 1000) {
    return notFound();
  }
  return (
    <main>
      <h1>{params.productId} Details</h1>
    </main>
  );
}
