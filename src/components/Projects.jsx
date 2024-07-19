import Image from "next/image";
import React from "react";
import Button from "./Button";
import Project from "./Project";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section className="bg-white dark:bg-[#23292b]">
            <div className="container">
                <h2 className="text-4xl font-light leading-loose mb-6">pode reparar:<br />
                    <p className="text-7xl font-light leading-normal text-vrblue dark:text-vryellow"><span className="bg-vrblue/10 dark:bg-vryellow/10 px-3">dedicação</span> e <span className="bg-vrblue/10 dark:bg-vryellow/10 px-3">capricho</span><br />em cada detalhe</p></h2>
                <p className="font-light text-xl mb-4 leading-9">cada projeto é uma prova do meu <strong>cuidado meticuloso</strong> com o <strong>design</strong> e a <strong>fluidez da informação</strong></p>
                <div className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-x-4 gap-y-0 my-12">
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
                <div className="flex flex-col justify-center gap-4 mt-8">
                    <h4 className="mx-auto text-3xl mb-4 text-vrblue dark:text-vryellow">quer ver mais?</h4>
                    <Button size="large" className="mx-auto">acesse aqui!</Button>
                </div>
            </div>
        </section>
    );
}