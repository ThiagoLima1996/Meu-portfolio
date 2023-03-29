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
                    <p className="subtitle">Estes são alguns do projetos feitos por mim, ou, que eu participei da produção. </p>
                </div>
                <Projects />
            </div>
        </section>
    );
}

export default Portfolio;