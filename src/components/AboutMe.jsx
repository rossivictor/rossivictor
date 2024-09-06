import React from "react";

export default function AboutMe() {
    return (
        <section id="about-me">
            <div className="overlay">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-x-20">
                        <div className="w-full md:w-5/12">
                            <h2>mais do que um<br />
                                <p className="leading-normal text-vrblue/70 dark:text-vryellow/70">desenvolvedor <span className="highlight">front-end</span></p>
                            </h2>
                            <p className="subtitle">minha jornada me possibilitou combinar sólidos conhecimentos em <strong>design</strong>, <strong>produto</strong>, <strong>marketing</strong> e <strong>negócios</strong>, de forma que minha atuação nunca fica restrita ao <strong>desenvolvimento</strong></p>
                        </div>
                        
                        <div id="skills">
                            <div>
                                <h3 className="h2">habilidades</h3>
                                <ul>
                                    <li>Gestão de marketing</li>
                                    <li>Gestão de produtos</li>
                                    <li>Gestão de projetos</li>
                                    <li>Autogestão</li>
                                </ul>

                                <h3 className="mt-16 h2">características</h3>
                                <ul className="flex flex-row flex-wrap gap-4 justify-end">
                                    <li>Líder</li>
                                    <li>Comunicativo</li>
                                    <li>Facilitador</li>
                                    <li>Criativo</li>
                                    <li>Detalhista</li>
                                    <li>Autogerenciável</li>
                                    <li>Comprometido</li>
                                    <li>Planejador</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul id="timeline">
                        <li>
                            <strong>2012</strong>
                            <p>Me formei em Marketing em São Paulo/SP e co-fundei uma agência de marketing digital para empresas B2B</p>
                        </li>
                        <li>
                            <strong>2017</strong>
                            <p>Depois de vender a agência, co-fundei uma produtora web para agências de marketing digital</p>
                        </li>
                        <li>
                            <strong>2019</strong>
                            <p>Aceitei o desafio de liderar as estratégias e pessoas de marketing de uma das startups B2B de maior relevância no Brasil</p>
                        </li>
                        <li>
                            <strong>2022</strong>
                            <p>Decidi tirar um período sabático e vivi a experiência de morar em Liverpool/UK, enquanto aprimorava o inglês</p>
                        </li>
                        <li>
                            <strong>2023</strong>
                            <p>De volta ao Brasil, decido me jogar de cabeça na área de desenvolvimento - minha verdadeira paixão!</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}