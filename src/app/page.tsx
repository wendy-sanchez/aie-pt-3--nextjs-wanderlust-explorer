import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans min-h-[70vh]">
      <main className="w-full max-w-4xl p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Wanderlust Explorer</h1>
        <p className="text-lg text-zinc-600 mb-6">
          Encuentra experiencias locales inolvidables: tours, retiros, aventuras y
          más.
        </p>
        <Link
          href="/experiences"
          className="inline-block rounded bg-black text-white px-6 py-3"
        >
          Explorar experiencias
        </Link>
      </main>
    </div>
  );
}
