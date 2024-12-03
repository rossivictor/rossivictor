"use client";

import Button from "./Button";

export default function Hero() {
  const openModal = (e) => {
    e.preventDefault();
    const modal = document.getElementById("modal");
    modal.classList.toggle("hidden");
    modal.classList.toggle("flex");
  };

  const scrollToProjects = () => {
    // Scroll page to the projects section
    const projects = document.getElementById("projects");
    projects.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="banner" className="container">
      <p>olá, visitante &#128075;</p>
      <h1>
        me chamo{" "}
        <span className="text-vrblue/100 dark:text-vryellow/100 ">
          Victor Rossi
        </span>
      </h1>
      <p className="font-light leading-snug text-xl md:text-3xl text-balance">
        sou um desenvolvedor front-end com ótimas noções de design e sólida
        experiência em marketing
      </p>

      <div className="flex flex-row gap-6 mt-8">
        <Button onClick={openModal}>entrar em contato</Button>
        <Button onClick={scrollToProjects}>ver os projetos</Button>
      </div>
    </div>
  );
}
