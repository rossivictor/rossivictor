"use client";

import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IconContext } from "react-icons";
import { PiArrowSquareInLight } from "react-icons/pi";

const Project = (props) => {
  const {
    title,
    image,
    wImage,
    hImage,
    url,
    category,
    technologies,
    className,
  } = props;
  const { t } = useLanguageContext();

  return (
    <div className={`project-container ${className && className}`}>
      <Link className="btn btn-image" href={url} target="_blank" passHref>
        <Image
          src={image}
          alt={`Captura de tela: ${title}`}
          width={wImage ? wImage : 800}
          height={hImage ? hImage : 1006}
        />
        <div className="project-label flex flex-row items-middle justify-center text-vrblue dark:text-vryellow">
          <p className="me-2">{t("projects.btnLabel")}</p>
          <IconContext.Provider value={{ size: "24px" }}>
            <PiArrowSquareInLight />
          </IconContext.Provider>
        </div>
      </Link>
      <div
        className={`absolute w-full flex flex-col h-auto -mt-20 z-10 pe-4 bottom-0`}
      >
        <div className="flex flex-row gap-x-4 items-center justify-between ps-4 pe-3 pb-4">
          <div className="tags">
            <span className="tag">{category}</span>
          </div>
          <div className="flex flex-row gap-x-2">
            {technologies.map((tech) => (
              <Image
                className="project-image"
                key={tech}
                src={`/logos/${tech}.png`}
                alt={tech}
                width={30}
                height={21}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
