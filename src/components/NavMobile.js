import React, { useState } from "react";

// item da navbar. vem de uma lista no arquivo data
import { navigation } from '../data'

//icons navmobile
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';

//elementos do socials(não esta sendo usado por enquanto)
import { Socials } from "./Socials";

//framer motion
import { motion } from 'framer-motion'

//efeito do scroll ao clicar no link
import { Link } from "react-scroll";

const NavMobile = () => {

    const [isOpen, setIsOpen] = useState(false);

    // frame motion variants
    const circleVariants = {
        hidden: {
            scale: 0,
        },
        visible: {
            scale: 180,
            transition: {
                type: 'spring',
                stiffness: 160,
                damping: 60,
            },
        },
    };

    const ulVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1,
            },
        },
    };


    return (
        <nav className="relative">
            {/* menu humburgue */}

            <div onClick={() => setIsOpen(true)} className="cursor-pointer text-white">
                <MenuAlt3Icon className="w-8 h-8 " />
            </div>

            {/* menu bg */}

            <motion.div
                variants={circleVariants}
                initial='hidden'
                animate={isOpen ? 'visible' : 'hidden'}
                className='w-4 h-4 rounded-full bg-accent fized top-0 right-0 '></motion.div>

            {/* menu */}

            <motion.ul
                variants={ulVariants}
                initial='hidden'
                animate={isOpen ? 'visible' : ''}
                className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}>

                {/* close */}
                <div onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-6 right-5">
                    <XIcon className="w-8 h-8 " />
                </div>

                {
                    navigation.map((item, index) => {
                        return (
                            <li key={index} className='mb-8 cursor-pointer'>
                                <Link
                                    to={item.href}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className='text-xl capitalize '>{item.name}</Link>
                            </li>
                        );
                    })
                }
            </motion.ul>
        </nav>
    )
}

export default NavMobile