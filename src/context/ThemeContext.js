"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        document.documentElement.classList.add(storedTheme);
        return storedTheme;
      }
      document.documentElement.classList.add("dark");
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useThemeContext = () => useContext(AppContext);
