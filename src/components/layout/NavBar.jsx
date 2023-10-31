import React, { useState } from 'react'
import { BsSuitHeart, BsSearch } from 'react-icons/bs'
import { MdOutlineClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import { Link, animateScroll as scroll } from 'react-scroll';

const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About Us", to: "about" },
    { name: "Shop", to: "shop" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact Us", to: "contact" },
];
const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    const handleisOpen = () => {
        setOpen((prev) => !prev);
    }
    const currentRoute = window.location.pathname;

    const handleSetActive = (to) => {
        console.log(to);
    };
    return (
        <header id='header'>
            <div className='w-full bg-light h-32 top-0 left-0 right-0 z-50'>
                <div className='flex justify-between items-center h-full px-16'>
                    <h1 className='flex item-center text-lg font-bold underline underline-offset-8'>
                        <Link href="/">Coffeelab</Link>
                    </h1>
                    <ul className='hidden md:flex items-center gap-4 font-sans lg:gap-8'>
                        {navLinks.map(({ name, to }) =>
                            <li key={name + to}
                                className={`hover:text-orange cursor-pointer text-${currentRoute === to ? "orang" : "brown"
                                    }`}
                            >
                                <Link
                                    activeClass="active"
                                    to={to}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    onSetActive={handleSetActive}
                                    className='text-xl md:text-sm lg:text-2xl'>{name}</Link>
                            </li>
                        )}
                    </ul>
                    <div className='hidden md:flex items-center gap-5'>
                        <div>
                            <BsSearch />
                        </div>
                        <div>
                            <BsSuitHeart />
                        </div>
                        <button className="text-white text-2xl border-2 bg-orange rounded-xl px-10 py-3 hover:text-orange hover:bg-white md:text-xl md:px-4">
                            Call Now
                        </button>

                    </div>

                    <div className='pr-2 md:hidden'>
                        {isOpen ? (<MdOutlineClose
                            className='text-red font-bold text-xl w-7'
                            onClick={handleisOpen}
                        />
                        ) : (
                            <FiMenu

                                className='text-red font-bold text-xl w-7'
                                onClick={handleisOpen}
                            />
                        )}
                    </div>
                </div>
                
                {isOpen && (
                    <div className='bg-light-grey p-4 absolute w-full md:hidden'>
                        <ul className='md:hidden flex flex-col items-start gap-4'>
                            {navLinks.map(({ name, to }) =>
                                <li key={name + to}
                                    className={`text-white hover:text-orange hover:cursor-pointer text-${currentRoute === to ? "orang" : "brown"
                                        } transition-colors duration-300`}
                                >
                                    <Link
                                        activeClass="active"
                                        to={to}
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        onSetActive={handleSetActive}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <div className='mt-4 md:hidden flex items-center justify-between gap-6'>
                            <div>
                                <BsSearch />
                            </div>
                            <button className="text-white text-1xl bg-orange rounded-xl px-4 py-2 hover:text-orange hover:bg-white md:text-xl md:px-4">
                                Call Now
                            </button>
                            <div>
                                <BsSuitHeart />
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default NavBar