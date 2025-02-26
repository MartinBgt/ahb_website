import {useEffect, useRef, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import Cta from "../ui/Cta.jsx";
import BurgerMenu from "../ui/BurgerMenu.jsx";
import {AnimatePresence, motion} from "framer-motion";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenMobile, setDropdownOpenMobile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const dropdownRefDesk = useRef(null);
    const dropdownRefMobile = useRef(null);
    const location = useLocation();

    const [isChecked, setIsChecked] = useState(false);

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scroll vers le bas -> cacher la navbar
                setIsVisible(false);
                setIsChecked(false);
                setDropdownOpen(false);
                setDropdownOpenMobile(false);
                setMobileMenuOpen(false);
            } else {
                // Scroll vers le haut -> afficher la navbar
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

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
            const dropDown = document.querySelector(".dropdown")

            if (window.innerWidth < 768) { // Vérifie si la largeur est inférieure à md (768px)
                if (dropdownRef.current && !dropdownRef.current.contains(event.target) && dropDown && !dropDown.contains(event.target)) {
                    setIsChecked(false);
                    setMobileMenuOpen(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClickOutsideDesktop = (event) => {
            if (dropdownRefDesk.current && !dropdownRefDesk.current.contains(event.target)) {
                setDropdownOpen(false);
            }

        };
        document.addEventListener("mousedown", handleClickOutsideDesktop);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideDesktop);
        };
    }, []);

    useEffect(() => {
        const handleClickOutsideMobile = (event) => {
            if (window.innerWidth < 768) {
                console.log("test")
                if (dropdownRefMobile.current && !dropdownRefMobile.current.contains(event.target)) {
                    console.log("test2")
                    setDropdownOpenMobile(false);
                }
            }

        };
        document.addEventListener("mousedown", handleClickOutsideMobile);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideMobile);
        };
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center h-20 px-6 md:px-8 lg:px-28 z-50 transition-transform duration-300 ${
                    isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
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
                        onClick={() => {
                            setDropdownOpen(!dropdownOpen)
                        }}
                        ref={dropdownRefDesk}
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
                    <a href="https://ker-crea.fr/367-assaut-de-haute-bretagne"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="h-full flex items-center">
                        Boutique
                    </a>
                </div>

                {/* CTA & Menu Burger */}
                <div className="flex items-center gap-4">
                    <NavLink to="/nous-rejoindre" className="hidden md:flex">
                        <Cta>Nous rejoindre</Cta>
                    </NavLink>

                    <div ref={dropdownRef}>
                        <BurgerMenu style="md:hidden" funct={() => {
                            toggleMenu(), setMobileMenuOpen(!mobileMenuOpen)
                        }} checked={isChecked}/>
                    </div>
                </div>
            </nav>


            <AnimatePresence>
                {mobileMenuOpen && (<>
                        <motion.div
                            initial={{opacity: 0, y: -20}}  // Départ invisible, légèrement en haut
                            animate={{opacity: 0.5, y: 0}}  // Apparition fluide
                            exit={{opacity: 0, y: -20}}  // Disparition fluide vers le haut
                            transition={{duration: 0.3, ease: "easeInOut"}} // Animation douce
                            className="top-20 bg-p-black opacity-50 h-[100vh] w-[100vw] fixed z-50 transition-opacity duration-300"
                        />

                        <motion.div
                            initial={{opacity: 0, y: -20}}  // Départ invisible, légèrement en haut
                            animate={{opacity: 1, y: 0}}  // Apparition fluide
                            exit={{opacity: 0, y: -20}}  // Disparition fluide vers le haut
                            transition={{duration: 0.3, ease: "easeInOut"}} // Animation douce
                            className="fixed top-20 left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-4 z-50 dropdown"
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
                                    onClick={() => setDropdownOpenMobile(!dropdownOpenMobile)}
                                    ref={dropdownRefMobile}
                                >
                                    Nos clubs
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>
                                </button>

                                <AnimatePresence>
                                    {dropdownOpenMobile && (
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
                            <a
                                href="https://ker-crea.fr/367-assaut-de-haute-bretagne"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setIsChecked(false);
                                }}
                            >
                                Boutique
                            </a>

                            <NavLink
                                to="/nous-rejoindre"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setIsChecked(false);
                                }}
                                className="w-max"
                            >
                                <Cta>Nous rejoindre</Cta>
                            </NavLink>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>


            {/* Pour éviter que le contenu soit caché derrière la navbar */}
            <div className="h-20"></div>
        </>
    );
};

export default Navbar;
