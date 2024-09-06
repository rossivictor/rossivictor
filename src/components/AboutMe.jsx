import React from "react";

export default function AboutMe() {
    return (
        <section className="py-0" id="about-me">
            <div className="py-32 bg-vryellow/90 dark:bg-vrblue/90">
                <div className="container">
                    <div className="flex flex-row justify-between items-center gap-x-20">
                        <div className="w-5/12">
                            <h2 className="text-4xl font-light leading-loose mb-6">mais do que<br />
                                <p className="text-6xl font-bold leading-normal text-vrblue/70 dark:text-vryellow/70">desenvolvedor <span className="text-vrblue/100 dark:text-vryellow/100 bg-vrblue/10 dark:bg-vryellow/10 px-3">front-end</span></p>
                            </h2>
                            <p className="font-light text-xl mb-4 leading-9">minha jornada me possibilitou combinar sólidos conhecimentos em <strong>design</strong>, <strong>produto</strong>, <strong>marketing</strong> e <strong>negócios</strong>, de forma que minha atuação nunca fica restrita ao <strong>desenvolvimento</strong></p>
                        </div>
                        
                        <div className="flex flex-row justify-around gap-x-10">
                            <div className="text-right">
                                <h4 className="mb-8"><strong className="text-4xl">habilidades</strong></h4>
                                <ul className="flex flex-row flex-wrap gap-4 justify-end">
                                    <li className="py-2 px-4 border text-base uppercase border-black/10 dark:border-white/10">Gestão de marketing</li>
                                    <li className="py-2 px-4 border text-base uppercase border-black/10 dark:border-white/10">Gestão de produtos</li>
                                    <li className="py-2 px-4 border text-base uppercase border-black/10 dark:border-white/10">Gestão de projetos</li>
                                    <li className="py-2 px-4 border text-base uppercase border-black/10 dark:border-white/10">Autogestão</li>
                                </ul>

                                <h4 className="mt-16 mb-8"><strong className="text-4xl">características</strong></h4>
                                <ul className="flex flex-row flex-wrap gap-4 justify-end">
                                    <li className="py-2 px-4 border text-base uppercase border-black/10 dark:border-white/10">Líder</li>
                                    <li className="py-2 px-4 border text-base uppercase border-black/10 dark:border-white/10">Comunicativo</li>
                                    <li className="py-2 px-4 border text-base uppercase border-black/10 dark:border-white/10">Facilitador</li>
                                    <li className="py-2 px-4 border text-base uppercase border-black/10 dark:border-white/10">Criativo</li>
                                    <li className="py-2 px-4 border text-base uppercase border-black/10 dark:border-white/10">Detalhista</li>
                                    <li className="py-2 px-4 border text-base uppercase border-black/10 dark:border-white/10">Autogerenciável</li>
                                    <li className="py-2 px-4 border text-base uppercase border-black/10 dark:border-white/10">Comprometido</li>
                                    <li className="py-2 px-4 border text-base uppercase border-black/10 dark:border-white/10">Planejador</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="flex flex-row gap-x-10 timeline text-base mt-24 border-t-2 border-vrblue dark:border-vryellow">
                        <li className="pt-10 mb-20 w-1/5">
                            <strong>2012</strong>
                            <p>Me formei em Marketing em São Paulo/SP e co-fundei uma agência de marketing digital para empresas B2B</p>
                        </li>
                        <li className="pt-10 mb-20 w-1/5">
                            <strong>2017</strong>
                            <p>Depois de vender a agência, co-fundei uma produtora web para agências de marketing digital</p>
                        </li>
                        <li className="pt-10 mb-20 w-1/5">
                            <strong>2019</strong>
                            <p>Aceitei o desafio de liderar as estratégias e pessoas de marketing de uma das startups B2B de maior relevância no Brasil</p>
                        </li>
                        <li className="pt-10 mb-20 w-1/5">
                            <strong>2022</strong>
                            <p>Decidi tirar um período sabático e vivi a experiência de morar em Liverpool/UK, enquanto aprimorava o inglês</p>
                        </li>
                        <li className="pt-10 mb-20 w-1/5">
                            <strong>2023</strong>
                            <p>De volta ao Brasil, decido me jogar de cabeça na área de desenvolvimento - minha verdadeira paixão!</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}