import React from "react";
import { experiences } from "../../../data/experiences";

import DetailClient from "./detailClient";

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const exp = experiences.find((e) => e.id === id);

  if (!exp) return <div className="p-6">Experiencia no encontrada</div>;

  return <DetailClient experience={exp} />;
}
