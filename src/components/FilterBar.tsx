"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CATEGORIES = ["Adventure", "Culture", "Food", "Wellness", "Nature"];

export default function FilterBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full">
      <select
        value={selectedCategory}
        onChange={(e) => updateParam("category", e.target.value)}
        className="border rounded p-2 w-full sm:w-auto"
      >
        <option value="">Todas las categorías</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <input
        className="border rounded p-2 w-full sm:flex-1"
        placeholder="Filtrar por destino (ciudad o país)"
        value={destination}
        onChange={(e) => updateParam("destination", e.target.value)}
      />
    </div>
  );
}
