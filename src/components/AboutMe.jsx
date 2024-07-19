import React from "react";

export default function AboutMe() {
    return (
        <section id="about-me" className="bg-[#efefef] dark:bg-[#2B3133]">
            <div className="container">
                <div className="w-1/3">
                    <h2 className="text-4xl font-light leading-loose mb-6">muito além de um<br />
                        <p className="text-7xl font-light leading-normal text-vrblue dark:text-vryellow">desenvolvedor <span className="bg-vrblue/10 dark:bg-vryellow/10 px-3">front-end</span></p>
                    </h2>
                    <p className="font-light text-xl mb-4 leading-9">minha jornada me possibilitou combinar sólidos conhecimentos em <strong>design</strong>, <strong>produto</strong>, <strong>marketing</strong> e <strong>negócios</strong>, de forma que minha atuação nunca fica restrita ao <strong>desenvolvimento</strong></p>
                </div>
            </div>
        </section>
    )
}