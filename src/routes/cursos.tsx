import { createFileRoute } from "@tanstack/react-router";
import { AcademyFooter } from "../components/AcademyFooter";
import { AcademyHeader } from "../components/AcademyHeader";
import { CoursesPage } from "../components/CoursesPage";

function CoursesRoute() {
  return (
    <>
      <AcademyHeader />
      <CoursesPage />
      <AcademyFooter />
    </>
  );
}

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title: "Cursos e Áreas de Actuação — Academia Empreende-Saber" },
      {
        name: "description",
        content:
          "Explore as áreas de formação, consultoria, tecnologia, empreendedorismo e os cursos em destaque da Academia Empreende-Saber.",
      },
    ],
  }),
  component: CoursesRoute,
});
