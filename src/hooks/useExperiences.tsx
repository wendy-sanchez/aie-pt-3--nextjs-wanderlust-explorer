"use client";
import { useMemo } from "react";
import type { Experience } from "../types/experience";

export default function useExperiences(
  list: Experience[],
  term: string,
  category: string,
  destination: string
) {
  const filtered = useMemo(() => {
    let out = list;
    if (term) {
      try {
        const re = new RegExp(term, "i");
        out = out.filter((e) => re.test(e.title));
      } catch (e) {
        // invalid regex, fallback to includes
        out = out.filter((e) => e.title.toLowerCase().includes(term.toLowerCase()));
      }
    }
    if (category) out = out.filter((e) => e.category === category);
    if (destination)
      out = out.filter((e) =>
        e.destination.toLowerCase().includes(destination.toLowerCase())
      );
    return out;
  }, [list, term, category, destination]);

  return filtered;
}
