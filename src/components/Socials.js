import React, { useLayoutEffect } from "react";

// item das redes socias. vem de uma lista no arquivo data
import {social} from '../data'

const Socials = () => {
    //conteudos do HTML
    return (
        <ul className="flex space-x-6 ">
            {social.map((item, index)=>{
                return <li 
                className="flex justify-center items-center text-accent "
                key={index}>
                    <a 
                    className="text-base " 
                    href={item.href}
                    target="_blank">{item.icon}</a>
                </li>
            })}
        </ul>
    )
}

export default Socials
