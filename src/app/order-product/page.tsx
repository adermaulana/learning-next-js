"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleButton = () => {
    console.log("Your Order is Placed");
    router.push("/");
    // router.replace("/");
    // router.back("/");
    // router.forward("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButton}
      >
        Place Order
      </button>
    </>
  );
}
