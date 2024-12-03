"use client";

import React, { createContext, useState, useContext } from "react";
import translations from "../data/content";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    return (
      key.split(".").reduce((obj, keyPart) => {
        if (!obj || !obj[keyPart]) {
          console.warn(`Chave de tradução não encontrada: ${key}`);
          return null;
        }
        return obj[keyPart];
      }, translations[language]) || `{{${key}}}`
    );
  };

  return (
    <LanguageContext.Provider value={{ t, changeLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
