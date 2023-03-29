import React, { useState, useEffect } from "react";

// Imagem de logo 
import Logo from '../assets/img/Th.svg';

//componentes do cabeçalho
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from '../components/Socials';

//cabeçalho
const Header = () => {
    //Efeito de navegação
    const [bg, setBg] = useState(false);
    
    useEffect(()=>{
        window.addEventListener('scroll', () =>{
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        })
    })

    //conteudos do HTML
    return (
    <header 
    className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
        <div 
        className="container mx-auto h-full flex items-center justify-between">
            {/* logo */}
            <a href="#">
                <img src={Logo} alt="Logo art" />
            </a>
            {/* navbar */}
            <div className="hidden lg:block">
                <Nav />
            </div>
            {/* Redes sociais */}
            <div className="hidden lg:block">
                <Socials />
            </div>
             {/* navbar mobile */}
             <div className="lg:hidden">
                <NavMobile />
            </div>
        </div>
    </header>
    )
};

export default Header;