"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-5 !text-black">
      <h1 className="text-4xl font-bold">An error occurred</h1>
      <p className="text-lg text-gray-500">{error.message}</p>
    </div>
  );
}
