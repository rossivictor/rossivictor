"use client";

import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

export default function AboutMe() {
  const { t, language } = useLanguageContext();
  const hardSkillsArray = t("about.hardSkillsArray");
  const softSkillsArray = t("about.softSkillsArray");

  return (
    <section id="about-me">
      <div className="overlay">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-20">
            <div className="w-full md:w-5/12">
              <h2>
                {t("about.pretitle")}
                <br />
                <p className="leading-normal text-vrblue/70 dark:text-vryellow/70">
                  {language === "pt"
                    ? t("about.developerWord")
                    : t("about.frontendWord")}
                  <br />
                  <span className="highlight">
                    {language === "pt"
                      ? t("about.frontendWord")
                      : t("about.developerWord")}
                  </span>
                </p>
              </h2>
              <p className="subtitle">{t("about.subtitle")}</p>
            </div>

            <div id="skills">
              <div>
                <h3 className="h2">{t("about.hardSkills")}</h3>
                <ul>
                  {hardSkillsArray.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>

                <h3 className="mt-16 h2">{t("about.softSkills")}</h3>
                <ul className="flex flex-row flex-wrap gap-4 justify-end">
                  {softSkillsArray.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ul id="timeline">
            <li>
              <strong>2012</strong>
              <p>{t("about.timelineFirstYear")}</p>
            </li>
            <li>
              <strong>2017</strong>
              <p>{t("about.timelineSecondYear")}</p>
            </li>
            <li>
              <strong>2019</strong>
              <p>{t("about.timelineThirdYear")}</p>
            </li>
            <li>
              <strong>2022</strong>
              <p>{t("about.timelineFourthYear")}</p>
            </li>
            <li>
              <strong>2023</strong>
              <p>{t("about.timelineFifthYear")}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
