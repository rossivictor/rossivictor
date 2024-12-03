"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

export default function Header() {
  const { theme, toggleTheme } = useThemeContext();
  const { t, changeLanguage, language } = useLanguageContext();

  const logo =
    theme === "dark"
      ? "/logo-negativo-victor-rossi.svg"
      : "/logo-victor-rossi.svg";

  const buttonScroll = (e) => {
    e.preventDefault();
    const id = e.target.href.split("#")[1];
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const openModal = (e) => {
    e.preventDefault();
    const modal = document.getElementById("modal");
    modal.classList.toggle("hidden");
    modal.classList.toggle("flex");
  };

  return (
    <div className="container">
      <ul className="flex flex-row items-center gap-6">
        <li className="grow">
          <a className="text-4xl font-bold" href="/">
            <Image src={logo} alt="Logo" width={200} height={70} />
          </a>
        </li>
        <li className="menuItem">
          <a
            href="#projects"
            className="text-vrblue dark:text-vryellow"
            onClick={buttonScroll}
          >
            {t("header.projects")}
          </a>
        </li>
        <li className="menuItem">
          <a
            href="#about-me"
            className="text-vrblue dark:text-vryellow"
            onClick={buttonScroll}
          >
            {t("header.about")}
          </a>
        </li>
        <li className="menuItem">
          <a
            href="#"
            className="text-vrblue dark:text-vryellow"
            onClick={openModal}
          >
            {t("header.contact")}
          </a>
        </li>
        <li id="switchContainer">
          <input
            type="checkbox"
            id="switch"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <label htmlFor="switch" id="switchLabel">
            Toggle
          </label>
        </li>
        <li id="switchLanguage">
          {language === "pt" && (
            <button
              onClick={() => changeLanguage("en")}
              disabled={language === "en"}
            >
              🇬🇧 / 🇺🇸
            </button>
          )}
          {language === "en" && (
            <button
              onClick={() => changeLanguage("pt")}
              disabled={language === "pt"}
            >
              🇧🇷 / 🇵🇹
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
