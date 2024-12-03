import React from "react";
import Project from "./Project";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>
          pode reparar:
          <br />
          <p>
            <span className="highlight">dedicação</span> e{" "}
            <span className="highlight">capricho</span>
            <br />
            em <span className="highlight">cada detalhe</span>
          </p>
        </h2>
        <p className="subtitle">
          cada projeto é uma prova do meu <strong>cuidado meticuloso</strong>{" "}
          com o <strong>design</strong> e a{" "}
          <strong>fluidez da informação</strong>
        </p>
        <div id="projects-grid">
          {projects.slice(0, 4).map((project) => (
            <Project
              key={project.title}
              title={project.title}
              image={project.image}
              url={project.url}
              category={project.category}
              technologies={project.technologies}
              className={project.className}
            />
          ))}
        </div>
        {/* <div className="flex flex-col justify-center gap-4 mt-8">
                    <h4 className="mx-auto text-3xl mb-4 text-vrblue dark:text-vryellow">quer ver mais?</h4>
                    <Button size="large" className="mx-auto">acesse aqui!</Button>
                </div> */}
      </div>
    </section>
  );
}
