"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const logo = theme === 'dark' ? '/logo-negativo-victor-rossi.svg' : '/logo-victor-rossi.svg';

  return (
    <div className="container">    
          <ul className="flex flex-row items-center gap-6">
            <li className="grow">
              <a className="text-4xl font-bold" href="/">
                <Image src={logo} alt="Logo" width={200} height={70} />
              </a>
            </li>
            <li className="menuItem"><a href="#" className="text-vrblue dark:text-vryellow">o que faço</a></li>
            <li className="menuItem"><a href="#" className="text-vrblue dark:text-vryellow">meus projetos</a></li>
            <li className="menuItem"><a href="#" className="text-vrblue dark:text-vryellow">fale comigo</a></li>
            <li id="switchContainer">
              <input type="checkbox" id="switch" onChange={switchTheme} checked={theme === 'dark'} />
              <label htmlFor="switch" id="switchLabel">Toggle</label>
            </li>
        </ul>
    </div>
  );
}
