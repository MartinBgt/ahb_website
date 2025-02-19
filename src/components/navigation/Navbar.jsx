import {useEffect, useRef, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import Cta from "../ui/Cta.jsx";
import BurgerMenu from "../ui/BurgerMenu.jsx";
import {AnimatePresence, motion} from "framer-motion";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    const [isChecked, setIsChecked] = useState(false);

    const toggleMenu = () => {
        setIsChecked((prev) => !prev);
    };

    const isClubActive = ["/chevaigne", "/saulnieres", "/saint-gregoire"].includes(location.pathname);

    const SpanLinksStyle = ({isActive}) =>
        isActive
            ? "relative text-p-black leading-8 no-underline before:content-[''] before:absolute before:bottom-[-0.25rem] before:left-0 before:w-full before:h-[2px] before:bg-pink-light before:rounded-sm"
            : "relative text-p-black leading-8 no-underline before:content-[''] before:absolute before:bottom-[-0.25rem] before:right-0 before:w-0 before:h-[2px] before:bg-pink-light before:rounded-sm before:transition-all before:duration-400 hover:before:w-full hover:before:left-0";

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav
                className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center h-20 px-6 md:px-28 z-50">
                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <img className="h-12 md:h-16 w-auto" src="/Images/AHB/logo_sans_fon_noir.png" alt="Logo de L'AHB"/>
                </NavLink>

                {/* Menu Desktop */}
                <div className="hidden md:flex items-center space-x-10">
                    <NavLink to="/"
                             className={({isActive}) => `h-full flex items-center ${SpanLinksStyle({isActive})}`}>
                        Accueil
                    </NavLink>

                    {/* Dropdown "Nos Clubs" */}
                    <div
                        className="relative h-full flex items-center cursor-pointer"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        ref={dropdownRef}
                    >
                        <span className={`h-full flex items-center ${SpanLinksStyle({isActive: isClubActive})}`}>
                            Nos clubs
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </span>

                        {dropdownOpen && (
                            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 w-40 z-10">
                                <NavLink to="/chevaigne" className="block px-4 py-2 text-p-black hover:bg-p-gray">
                                    Chevaigné
                                </NavLink>
                                <NavLink to="/saint-gregoire" className="block px-4 py-2 text-p-black hover:bg-p-gray">
                                    Saint-Grégoire
                                </NavLink>
                                <NavLink to="/saulnieres" className="block px-4 py-2 text-p-black hover:bg-p-gray">
                                    Saulnières
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink to="/actualités"
                             className={({isActive}) => `h-full flex items-center ${SpanLinksStyle({isActive})}`}>
                        Actualités
                    </NavLink>
                    <NavLink to="/compétitions"
                             className={({isActive}) => `h-full flex items-center ${SpanLinksStyle({isActive})}`}>
                        Compétitions
                    </NavLink>
                    <NavLink to="/boutique"
                             className={({isActive}) => `h-full flex items-center ${SpanLinksStyle({isActive})}`}>
                        Boutique
                    </NavLink>
                </div>

                {/* CTA & Menu Burger */}
                <div className="flex items-center gap-4">
                    <NavLink to="/nous-rejoindre" className="hidden md:flex">
                        <Cta>Nous rejoindre</Cta>
                    </NavLink>

                    <BurgerMenu style="my-style" funct={() => {
                        toggleMenu(), setMobileMenuOpen(!mobileMenuOpen)
                    }} checked={isChecked}/>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -20}}  // Départ invisible, légèrement en haut
                        animate={{opacity: 1, y: 0}}  // Apparition fluide
                        exit={{opacity: 0, y: -20}}  // Disparition fluide vers le haut
                        transition={{duration: 0.3, ease: "easeInOut"}} // Animation douce
                        className="fixed top-20 left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-4 z-50"
                    >
                        <NavLink
                            to="/"
                            className="text-lg"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setIsChecked(false);
                            }}
                        >
                            Accueil
                        </NavLink>

                        {/* Dropdown Mobile */}
                        <div>
                            <button
                                className="text-lg flex justify-between w-full"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Nos clubs
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </button>

                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        initial={{opacity: 0, y: -10}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -10}}
                                        transition={{duration: 0.2}}
                                        className="pl-4 mt-2 space-y-2"
                                    >
                                        <NavLink
                                            to="/chevaigne"
                                            className="block"
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setIsChecked(false);
                                            }}
                                        >
                                            Chevaigné
                                        </NavLink>
                                        <NavLink
                                            to="/saint-gregoire"
                                            className="block"
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setIsChecked(false);
                                            }}
                                        >
                                            Saint-Grégoire
                                        </NavLink>
                                        <NavLink
                                            to="/saulnieres"
                                            className="block"
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setIsChecked(false);
                                            }}
                                        >
                                            Saulnières
                                        </NavLink>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <NavLink
                            to="/actualités"
                            className="text-lg"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setIsChecked(false);
                            }}
                        >
                            Actualités
                        </NavLink>
                        <NavLink
                            to="/compétitions"
                            className="text-lg"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setIsChecked(false);
                            }}
                        >
                            Compétitions
                        </NavLink>
                        <NavLink
                            to="/boutique"
                            className="text-lg"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setIsChecked(false);
                            }}
                        >
                            Boutique
                        </NavLink>

                        <NavLink
                            to="/nous-rejoindre"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setIsChecked(false);
                            }}
                        >
                            <Cta>Nous rejoindre</Cta>
                        </NavLink>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Pour éviter que le contenu soit caché derrière la navbar */}
            <div className="h-20"></div>
        </>
    );
};

export default Navbar;
