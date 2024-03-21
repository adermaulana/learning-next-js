"use client";

//done move it to products folder (route)

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message}{" "}
      <button
        className="py-2 px-4 rounded text-slate-300 font-bold bg-red-700 hover:bg-red-300 duration-300 bo"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  );
}
