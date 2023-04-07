import React from "react";

import Projects from "../components/Projects";

const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className="section bg-primary min-h-[1400px]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title before:content- relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">Meus Projetos </h2>
                    <p className="subtitle">Meus projetos são frutos de minha dedicação em estudar constantemente e me manter atualizado com as melhores práticas do mercado. Busco sempre entender as necessidades dos usuários e desenvolver soluções personalizadas para atender a essas demandas de forma eficiente e eficaz. <br /> Nesta seção do meu portfólio, apresento alguns dos meus projetos mais recentes, nos quais tive o prazer de trabalhar. Cada projeto foi uma oportunidade de aprendizado e aprimoramento, e estou orgulhoso de compartilhar essas realizações com você.</p>
                </div>
                <Projects />
            </div>
        </section>
    );
}

export default Portfolio;