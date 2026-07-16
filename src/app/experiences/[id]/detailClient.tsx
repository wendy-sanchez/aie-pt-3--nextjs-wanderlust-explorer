"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import type { Experience } from "../../../types/experience";

export default function DetailClient({ experience }: { experience: Experience }) {
  useEffect(() => {
    document.title = `${experience.title} — Wanderlust`;
  }, [experience.title]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{experience.title}</h1>
      <p className="text-zinc-600 mb-4">{experience.destination} • {experience.category}</p>
      <div className="relative h-64 w-full mb-4">
        <Image src={experience.imageUrl} alt={experience.title} fill className="object-cover rounded" />
      </div>
      <p className="mb-4">{experience.description}</p>
      <p className="font-semibold">Precio: ${experience.price}</p>
      <p className="text-sm text-zinc-500">Rating: {experience.rating}</p>
    </div>
  );
}
