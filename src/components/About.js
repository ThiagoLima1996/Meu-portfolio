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
                        <p className="mb-8">Oi! Me chamo Thiago Lima, estudante de ciência da computação, tenho 26 anos de idade e crio aplicativos web. Sou desenvolvedor web full Stack apaixonado pela área tecnológica. Por isso estou sempre estudando e me dedicando para me tornar cada vez um profissional melhor. Atualmente sei coda em HTML, CSS (Bootstrap e SASS) e Javascript (React, Node.js, next.js e Jquery). Para me torna um profissional de excelencia estou estudando .net e MySQL.</p>
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