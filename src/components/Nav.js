import React from "react";

// item da navbar. vem de uma lista no arquivo data
import { navigation } from "../data";
//efeito do scroll ao clicar no link
import { Link } from "react-scroll";
import { list } from "postcss";

const Nav = () => {
    //conteudos do HTML
    return (
        <nav>
            <ul 
            className="flex space-x-8 capitalize text-[15px]">
                {navigation.map((item, index)=>{
                    return (
                        <li 
                        className="text-white hover:text-accent cursor-pointer"
                        key={index}>
                            <Link 
                            to={item.href}
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className='transition-all duration-300'>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav