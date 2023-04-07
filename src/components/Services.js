import React from "react";

import { services } from '../data'


const Services = () => {
    return(
        <section id="services" className="section bg-tertiary">
            <div className="container mx-auto">
                {/* section title */}
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title before:content-serviços relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">Nos meus serviços</h2>
                    <p className="subtitle">No meu cotidiano de trabalho e estudo, utilizo uma variedade de linguagens e metodologias para desenvolvimento de projetos. Com base nisso, decidi compartilhar as quatro principais ferramentas e metodologias que fazem parte do meu dia a dia.</p>
                </div>
                {/* item with grid */}
                <div className="grid lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const {icon, name, description} = service;
                        return <div className="bg-secondary p-6 rounded-2xl" key={index}>
                            {/* icons */}
                            <div className="text-accent rounded-sm w-12 h-12 dlex justify-center mb-24 text-[28px]">
                                {icon}
                            </div>
                            <h4 className="text-xl font-medium mb-2">{name}</h4>
                            <p>{description}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>  
    );
}

export default Services;