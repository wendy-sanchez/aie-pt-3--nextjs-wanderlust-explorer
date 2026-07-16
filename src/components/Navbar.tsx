"use client";
import Link from "next/link";
import React from "react";
import { useFavorites } from "./FavoritesProvider";

export default function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav className="w-full bg-white border-b p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-lg">
            Wanderlust
          </Link>
          <Link href="/experiences" className="text-sm text-zinc-600">
            Explorer
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/favorites" className="text-sm">
            Favoritos ({favorites.length})
          </Link>
          <Link href="/profile" className="text-sm">
            Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
}
