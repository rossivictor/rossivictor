"use client";

import React from "react";
import Project from "./Project";
import { projects } from "../data/projects";
import { useLanguageContext } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguageContext();

  return (
    <section id="projects">
      <div className="container">
        <h2>
          {t("projects.pretitle")}
          <br />
          <p>
            <span className="highlight">{t("projects.firstKeyword")}</span>{" "}
            {t("general.and")}{" "}
            <span className="highlight">{t("projects.secondKeyword")}</span>
            <br />
            {t("general.to")}{" "}
            <span className="highlight">{t("projects.thirdKeyword")}</span>
          </p>
        </h2>
        <p className="subtitle">{t("projects.subtitle")}</p>
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
