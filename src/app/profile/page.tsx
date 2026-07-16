"use client";
import React from "react";
import { useFavorites } from "../../components/FavoritesProvider";

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Perfil de usuario</h2>
      <div className="bg-white border p-4 rounded">
        <p className="font-medium">Nombre: Usuario de Prueba</p>
        <p className="text-zinc-600">Email: prueba@example.com</p>
        <p className="mt-3">Favoritos guardados: {favorites.length}</p>
      </div>
    </div>
  );
}
