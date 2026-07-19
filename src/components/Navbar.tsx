"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useFavorites } from "./FavoritesProvider";

export default function Navbar() {
  const { favorites } = useFavorites();
  const pathname = usePathname();

  function linkClass(active: boolean) {
    return `text-sm px-2 py-1 rounded transition-colors ${
      active ? "bg-black text-white" : "text-zinc-600 hover:text-zinc-900"
    }`;
  }

  return (
    <nav className="w-full bg-white border-b px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between sm:justify-start gap-4">
          <Link href="/" className="font-bold text-lg">
            Wanderlust
          </Link>
          <Link
            href="/experiences"
            className={linkClass(pathname.startsWith("/experiences"))}
          >
            Explorer
          </Link>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Link
            href="/favorites"
            className={linkClass(pathname.startsWith("/favorites"))}
          >
            Favoritos ({favorites.length})
          </Link>
          <Link
            href="/profile"
            className={linkClass(pathname.startsWith("/profile"))}
          >
            Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
}
