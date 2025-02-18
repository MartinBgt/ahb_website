import {useEffect, useRef, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import Cta from "../ui/Cta.jsx";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Référence à l'élément du dropdown
    const location = useLocation(); // Récupérer l'URL actuelle

    // Vérifie si l'URL actuelle est celle d'un club
    const isClubActive = ["/chevaigne", "/saulnieres", "/saint-gregoire"].includes(location.pathname);

    const SpanLinksStyle = ({isActive}) =>
        isActive
            ? "relative text-p-black leading-8 no-underline before:content-[''] before:absolute before:bottom-[-0.25rem] before:left-0 before:w-full before:h-[2px] before:bg-pink-light before:rounded-sm"
            : "relative text-p-black leading-8 no-underline before:content-[''] before:absolute before:bottom-[-0.25rem] before:right-0 before:w-0 before:h-[2px] before:bg-pink-light before:rounded-sm before:transition-all before:duration-400 hover:before:w-full hover:before:left-0";

    // Fermer le dropdown si un clic en dehors est détecté
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
        <nav className="bg-white shadow-md p-4 flex justify-between items-center h-20 px-28">
            <div className="flex items-center space-x-10">
                {/* Logo */}
                <NavLink to="/" className="h-full flex items-center mr-8">
                    <img className="h-16 w-auto" src="/Images/AHB/logo_sans_fon_noir.png" alt="Logo de L'AHB"/>
                </NavLink>

                {/* Liens de navigation */}
                <NavLink
                    to="/"
                    className={({isActive}) => `h-full flex items-center ${SpanLinksStyle({isActive})}`}
                >
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
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </span>

                    {/* Menu déroulant */}
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

                <NavLink
                    to="/enseignants"
                    className={({isActive}) => `h-full flex items-center ${SpanLinksStyle({isActive})}`}
                >
                    Enseignants
                </NavLink>
                <NavLink
                    to="/actualités"
                    className={({isActive}) => `h-full flex items-center ${SpanLinksStyle({isActive})}`}
                >
                    Actualités
                </NavLink>
                <NavLink
                    to="/compétitions"
                    className={({isActive}) => `h-full flex items-center ${SpanLinksStyle({isActive})}`}
                >
                    Compétitions
                </NavLink>
                <NavLink
                    to="/boutique"
                    className={({isActive}) => `h-full flex items-center ${SpanLinksStyle({isActive})}`}
                >
                    Boutique
                </NavLink>
            </div>

            {/* Bouton CTA */}
            <NavLink to="/nous-rejoindre" className="h-full flex items-center">
                <Cta>Nous rejoindre</Cta>
            </NavLink>
        </nav>
    );
};

export default Navbar;
