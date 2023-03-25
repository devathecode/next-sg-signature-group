"use client";
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = (props: any) => {
    const router = usePathname();
    const commonSpanClass = 'block absolute h-0.5 w-full bg-white transition-all duration-700 ease-in-out';
    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState(false);
    const menuOptions = [
        {
            id: 1,
            title: 'Home',
            url: 'home'
        },
        {
            id: 2,
            title: 'Projects',
            url: 'home/properties'
        },
        {
            id: 3,
            title: 'About Us',
            url: 'home/about'
        },
        {
            id: 4,
            title: 'Contact Us',
            url: 'home/contact'
        }
    ];
    const handleHamburgerClick = () => {
        props.handleSubMenuOpen(!open);
        setOpen(!open);
    }

    const closeHamburger = () => {
        setOpen(false);
        props.handleSubMenuOpen(!open);
    }

    //navbar scroll changeBackground function
    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })
    return (
        <nav
            className={`px-2 sm:px-12 2xl:px-40 fixed top-0 left-0 right-0 bottom-auto z-50
             ${navbar ? 'bg-white border-b-2 border-yellow-700 py-1' : 'py-1.5 sm:py-2.5'}`}>
            <button
                onClick={scrollToTop}
                role="button"
                aria-label="gototop"
                className={`fixed bottom-4 right-4 bg-yellow-600 text-white rounded-full p-3 shadow-lg
                 focus:outline-none hover:bg-yellow-700 transition-all ease-in-out duration-700 flex justify-center items-center ${navbar ? 'opacity-100' : 'opacity-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                    <path d="M10 6.586l-4.95 4.95-1.414-1.414L10 3.758l6.364 6.364-1.414 1.414z"/>
                </svg>
            </button>
            <div className="grid grid-cols-12 gap-0 sm:gap-2">
                <div className="col-span-9 sm:col-span-3 justify-self-start my-auto">
                    <Link href="/home" className="flex flex-row cursor-pointer justify-center items-center text-white font-mono text-2xl font-bold">
                        <div className="ml-3 font-mono flex flex-row items-center">
                            <Image width="100" height="80" src="/images/sg-logo2.png" className="w-8 md:w-10 h-auto" alt=""/>
                            <div className="flex flex-col">
                                <span className="text-base lg:text-lg font-semibold tracking-tighter text-black">
                                    Signature
                                </span>
                                <span className="italic text-xs text-black -mt-1 tracking-widest">Group</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-span-3 sm:col-span-9 justify-self-end cursor-pointer block md:hidden"
                     onClick={handleHamburgerClick}>
                    <div className="w-6 relative mx-auto transition-all duration-700 ease-in-out rotate-0">
                        <div
                            className={`${commonSpanClass} bg-yellow-600 ${open ? 'rotate-[135deg] top-4' : 'rotate-0 top-2'}`}></div>
                        <div className={`${commonSpanClass} bg-yellow-600 ${open ? 'hidden' : 'rotate-0 top-4'}`}></div>
                        <div
                            className={`${commonSpanClass} bg-yellow-600 ${open ? '-rotate-[135deg] top-4' : 'rotate-0 top-6'}`}></div>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-9 place-self-end cursor-pointer hidden md:block my-auto">
                    <ul className="flex justify-between space-x-2">
                        {menuOptions.map((data) => {
                            return <li key={data.id} className={`${'/' + data.url === router.toString() ? 'text-white bg-yellow-700' : 'text-yellow-600'} hover:text-white hover:bg-yellow-700
                                             w-24 md:w-32 text-center transition-all ease-in-out duration-700 rounded-md py-px font-semibold uppercase text-xs md:text-base`}>
                                <Link href={data.url}>{data.title}</Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            <div
                className={`${open ? 'active left-0 block' : '-left-[200%]'} fixed z-50 top-12 w-full transition-all duration-700 bg-white h-full border-t-2 border-gray-400`}>
                <ul className="grid grid-cols-12 gap-0 sm:gap-5 gap-y-7 place-items-center mt-12">
                    {menuOptions.map((data) => {
                        return <li onClick={closeHamburger} key={data.id} className={`${data.url === router.toString() ? 'text-white bg-yellow-700' : 'text-yellow-600'} col-span-12
                                         hover:text-white hover:bg-yellow-700 w-full text-center transition-all ease-in-out duration-700 py-px font-semibold 
                                         font-semibold uppercase`}>
                            <Link href={data.url}>{data.title}</Link>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Header;