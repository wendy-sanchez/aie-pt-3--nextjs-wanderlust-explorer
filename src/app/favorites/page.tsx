"use client";
import React from "react";
import { experiences as all } from "../../data/experiences";
import { useFavorites } from "../../components/FavoritesProvider";
import ExperienceCard from "../../components/ExperienceCard";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const list = all.filter((e) => favorites.includes(e.id));

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Tus favoritos</h2>
      {list.length === 0 ? (
        <p className="text-zinc-600">No tienes experiencias guardadas.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((e) => (
            <ExperienceCard
              key={e.id}
              id={e.id}
              title={e.title}
              imageUrl={e.imageUrl}
              destination={e.destination}
              price={e.price}
              isFavorite={favorites.includes(e.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
