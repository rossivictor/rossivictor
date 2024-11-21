"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  // Set the initial theme state based on localStorage
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Apply the theme on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
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

  const buttonScroll = (e) => {
    e.preventDefault();
    const id = e.target.href.split('#')[1];
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = (e) => {
    e.preventDefault();
    const modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
  };

  return (
    <div className="container">    
      <ul className="flex flex-row items-center gap-6">
        <li className="grow">
          <a className="text-4xl font-bold" href="/">
            <Image src={logo} alt="Logo" width={200} height={70} />
          </a>
        </li>
        <li className="menuItem"><a href="#projects" className="text-vrblue dark:text-vryellow" onClick={buttonScroll}>meus projetos</a></li>
        <li className="menuItem"><a href="#about-me" className="text-vrblue dark:text-vryellow" onClick={buttonScroll}>sobre mim</a></li>
        <li className="menuItem"><a href="#" className="text-vrblue dark:text-vryellow" onClick={openModal}>fale comigo</a></li>
        <li id="switchLanguage">
          <a href="#" className="text-vrblue dark:text-vryellow">pt</a>
          <span className="text-vrblue dark:text-vryellow">/</span>
          <a href="#" className="text-vrblue dark:text-vryellow">en</a>
        </li>
        <li id="switchContainer">
          <input type="checkbox" id="switch" onChange={switchTheme} checked={theme === 'dark'} />
          <label htmlFor="switch" id="switchLabel">Toggle</label>
        </li>
      </ul>
    </div>
  );
}