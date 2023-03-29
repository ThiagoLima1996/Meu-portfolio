import React from "react";

import { social } from '../data'

import Logo from '../assets/img/Th.svg'

const Footer = () => {
    return (
        <footer className="bg-tertiary py-12">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                    {/* social icons */}
                    <div className="flex space-x-6 items-center justify-center">
                        {social.map((item, index) => {
                            const { href, icon } = item;
                            return (
                                <a className="text-accent text-base" href={href} key={index}>
                                    {icon}
                                </a>
                            )
                        })}
                    </div>
                    {/* logo */}
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    {/* copyright */}
                    <p>&copy;copyright 2023</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;