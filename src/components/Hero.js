import React from "react";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { Link } from "react-scroll";



const Hero = () => {
    return (
        <section id='home' className="lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden ">
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full pt-8 ">
                    {/* lado esquerdo */}
                    <div className="flex-1 flex flex-col items-center lg:items-start">
                        <p className="text-lg text-accent mb-[22px]">Oi! prazer, sou Thiago Lima</p>
                        <h1 className="text-4x1 leading-[44px] md:text-5x1 md:leading-tight lg:text-7x1 lg:leading-[1.2] font-bold md:tracking-[-2px]">Devenvolvedor<br /> fullStack</h1>
                        <p className="pt-4 pb-8 mb:pt-6 mb:pb-12 max-w-[480px] text-lg text-center lg:text-left">
                            Desenvolvedor apaixonado, focado na aréa de desenvolvimento web.
                        </p>
                        <Link to="contact">
                            <button className="btn btn-md bg-accent hover:bg-accent-hover mb:btn-lg transition-all ">
                                Entre em contato
                            </button>
                        </Link>
                    </div>
                    <div className="hidden lg:flex flex-1 justify-end items-center h-full">
                        {/* espaço pata imagem */}
                        <div className="App">
                        <Player
                            autoplay
                            speed={1.5}
                            loop
                            src="https://assets9.lottiefiles.com/packages/lf20_xrmk3h1x.json"
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero