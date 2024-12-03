"use client";

import Button from "./Button";
import { useLanguageContext } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguageContext();

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
      <p>{t("hero.saudation")} &#128075;</p>
      <h1>
        {t("hero.title")}{" "}
        <span className="text-vrblue/100 dark:text-vryellow/100 ">
          {t("hero.name")}
        </span>
      </h1>
      <p className="font-light leading-snug text-xl md:text-3xl text-balance">
        {t("hero.subtitle")}
      </p>

      <div className="flex flex-row gap-6 mt-8">
        <Button onClick={openModal}>{t("hero.cta")}</Button>
        <Button onClick={scrollToProjects}>{t("hero.btn")}</Button>
      </div>
    </div>
  );
}
