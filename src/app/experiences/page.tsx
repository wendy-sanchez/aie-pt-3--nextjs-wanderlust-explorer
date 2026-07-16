import React from "react";
import ExperiencesClient from "./ExperiencesClient";

export default function ExperiencesPage() {
  return (
    <React.Suspense fallback={<div className="p-6">Cargando experiencias…</div>}>
      <ExperiencesClient />
    </React.Suspense>
  );
}
