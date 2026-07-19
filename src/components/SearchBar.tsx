"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initial = searchParams.get("q") ?? "";

  function apply(q: string) {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (q) params.set("q", q);
    else params.delete("q");
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        apply((data.get("q")?.toString() ?? "").trim());
      }}
    >
      <input
        key={initial}
        name="q"
        className="w-full border rounded p-2"
        placeholder="Buscar por título..."
        defaultValue={initial}
      />
    </form>
  );
}
