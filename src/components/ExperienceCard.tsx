"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  destination: string;
  price: number;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
};

export default function ExperienceCard({
  id,
  title,
  imageUrl,
  destination,
  price,
  isFavorite,
  onToggleFavorite,
}: Props) {
  return (
    <article className="border rounded-lg overflow-hidden bg-white">
      <Link href={`/experiences/${id}`}>
        <div className="relative h-44 w-full">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-3">
        <div className="flex items-start justify-between">
          <h3 className="text-sm font-medium">{title}</h3>
          <button
            aria-label={isFavorite ? "Quitar favorito" : "Agregar favorito"}
            onClick={() => onToggleFavorite(id)}
            className="ml-2"
          >
            {isFavorite ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="red">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.99 3.57 2.36h.87C13.46 4.99 14.96 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.99 3.57 2.36h.87C13.46 4.99 14.96 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
          </button>
        </div>
        <p className="text-xs text-zinc-500">{destination}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-semibold">${price}</span>
        </div>
      </div>
    </article>
  );
}
