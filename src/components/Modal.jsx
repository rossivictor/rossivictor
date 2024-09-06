"use client"

import React from "react";
import { IconContext } from "react-icons";
import { PiEnvelopeOpenThin, PiWhatsappLogoThin } from "react-icons/pi";

export default function Modal() {
    const closeModal = (e) => {
        e.preventDefault();
        const modal = document.getElementById('modal');
        modal.classList.toggle('hidden');
        modal.classList.toggle('flex');
    }

    return (
        <div className="modal hidden items-center fixed w-screen h-screen top-0 left-0 z-10 text-center" id="modal">
            <div className="z-20 absolute w-full h-full top-0 left-0 bg-white/70 dark:bg-black/70" onClick={closeModal}></div>
            <div className="z-30 relative modal-content h-auto max-w-[768px] mx-auto p-10 bg-vryellow dark:bg-vrblue">
                <span className="close-button absolute h-10 w-10 rounded-full flex items-center justify-center -top-5 -right-5 text-lg cursor-pointer bg-vryellow dark:bg-vrblue" onClick={closeModal}>&times;</span>
                <div className="flex md:flex-row justify-evenly mb-10">
                    <a href="mailto:rossivictor90@gmail.com" className="transition-all md:w-1/2 md:border-e border-black/10 text-vrblue hover:text-vrblue/70 dark:text-vryellow hover:dark:text-vryellow/70">
                        <IconContext.Provider value={{ size: "4rem", className: "mx-auto" }}>
                            <PiEnvelopeOpenThin />
                        </IconContext.Provider>
                        enviar um e-mail
                    </a>
                    <a href="https://wa.me/5518998107550" target="_blank" className="transition-all md:w-1/2 text-vrblue hover:text-vrblue/70 dark:text-vryellow hover:dark:text-vryellow/70">
                        <IconContext.Provider value={{ size: "4rem", className: "mx-auto" }}>
                            <PiWhatsappLogoThin />
                        </IconContext.Provider>
                        chamar no WhatsApp
                    </a>
                </div>
                <div className="text-sm">
                    <p>outras formas de entrar em contato ou saber mais sobre mim:</p>
                    <div className="flex flex-row justify-center gap-x-4 py-2">
                        <a target="_blank" href="https://www.linkedin.com/in/victorrossi/" className="text-vrblue dark:text-vryellow">LinkedIn</a>
                        <a target="_blank" href="https://github.com/rossivictor" className="text-vrblue dark:text-vryellow">GitHub</a>
                        <a target="_blank" href="https://www.instagram.com/rossivictor90/" className="text-vrblue dark:text-vryellow">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
}