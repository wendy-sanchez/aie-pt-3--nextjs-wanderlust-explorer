"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { experiences as allExperiences } from "../../data/experiences";
import useExperiences from "../../hooks/useExperiences";
import ExperienceCard from "../../components/ExperienceCard";
import SearchBar from "../../components/SearchBar";
import FilterBar from "../../components/FilterBar";
import { useFavorites } from "../../components/FavoritesProvider";

export default function ExperiencesClient() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  const list = useExperiences(allExperiences, q, category, destination);
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Explorar experiencias</h2>
      <div className="mb-4 flex gap-4">
        <SearchBar />
        <FilterBar />
      </div>

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
    </div>
  );
}
