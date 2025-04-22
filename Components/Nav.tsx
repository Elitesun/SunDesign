"use client";
import Brand from './Brand';
import ShinyText from './ui/ShinyText';
import { useState } from 'react';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    // const navigation = [
    //     // { title: "Home", path: "#home" },
    //     // { title: "Features", path: "#features" },
    //     // { title: "Footer", path: "#footer" },
    // ]

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            document.body.classList.remove("overflow-hidden");
            setIsNavOpen(false);
        }
    }

    return (
        <header>
            <nav className="w-full md:static md:text-sm">
                <div className="custom-screen items-center mx-auto md:flex">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Brand />
                        <button
                            className="md:hidden"
                            onClick={() => setIsNavOpen(!isNavOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isNavOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className={`${isNavOpen ? 'block' : 'hidden'} flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:flex md:items-center md:justify-end`}>
                        <ul className="text-gray-700 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-gray-600 md:font-medium">
                            {/* {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="duration-150 hover:text-gray-900">
                                            <a
                                                href={item.path}
                                                onClick={(e) => handleSmoothScroll(e, item.path)}
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })
                            } */}
                            <li>
                                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                                    <span className="text-white text-bold text-lg bg-gradient-to-r from-blue-800 via-indigo-900 to-indigo-700 py-2 px-4 rounded-lg hover:from-violet-900 hover:via-violet-800 hover:to-blue-900 hover:ring ring-transparent ring-offset-2 transition">
                                        <ShinyText text="Join Waiting List!" disabled={false} speed={3} className='custom-class' />
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;