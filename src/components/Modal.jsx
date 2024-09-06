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
        <div className="hidden" id="modal">
            <div className="modal-overlay" onClick={closeModal}></div>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className="flex flex-col md:flex-row justify-center mb-10">
                    <a href="mailto:rossivictor90@gmail.com" className="transition-all mb-5 md:mb-0 md:w-1/2 md:border-e border-black/10 text-vrblue hover:text-vrblue/70 dark:text-vryellow hover:dark:text-vryellow/70">
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