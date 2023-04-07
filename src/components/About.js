import React from "react";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { Link } from "react-scroll";


const About = () => {
    return (
        <section id="about" className="section bg-secondary">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-24">
                    <div className="App hidden lg:flex flex-1 justify-end items-center h-full">
                        <Player
                            autoplay
                            speed={1.5}
                            loop
                            src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
                            style={{ height: "500px", width: "500px" }}
                        >
                            <Controls
                                visible={false}
                                buttons={[
                                    "play",
                                    "repeat",
                                    "frame",
                                    "debug",
                                    "snapshot",
                                    "background"
                                ]}
                            />
                        </Player>
                    </div>
                    {/* <img
                        className="object-cover h-full w-[566px] mb:mx-auto lg:mx-0 rounded-2x1"
                        src={Image} alt="" /> */}

                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className="section-title lg:text-4x1 font-medium lg:font-extrabold mb-3 before:content- relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">Thiago lima</h2>
                        </div>
                        <p className="mb-4 text-accent "> Desenvolvedor web</p>
                        <hr className="mb-8 opacity-5" />
                        <p className="mb-8">Olá! Sou Thiago Lima, um desenvolvedor web full stack apaixonado por criar aplicativos web incríveis. Ao longo da minha jornada na área de Ciência da Computação, tenho dedicado meu tempo e habilidades para desenvolver projetos que se destacam pela inovação e usabilidade. <br />
                            Em minha experiência profissional, tenho trabalhado com diversas tecnologias, incluindo HTML, CSS (Bootstrap e SASS), Javascript (React, Node.js, Next.js e jQuery), .NET e MySQL. Essas habilidades me permitem criar soluções completas, desde o front-end até o back-end, com foco em uma experiência do usuário excepcional.</p>
                        <Link to="contact">
                            <button className="btn btn-mb bg-accent hover:bg-accent-hover transition-all">
                                Fale comigo
                            </button>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    )
};

export default About;