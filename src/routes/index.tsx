import { createFileRoute } from "@tanstack/react-router";
import { AcademyPage } from "../components/AcademyPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Academia Empreende-Saber — Projectando Líderes Emergentes" },
      { name: "description", content: "Formação profissional, capacitação, consultoria e desenvolvimento empresarial em Angola." },
      { property: "og:title", content: "Academia Empreende-Saber" },
      { property: "og:description", content: "Conhecimento que transforma. Competências que geram oportunidades." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcademyPage,
});
