import {Link, NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-p-white text-p-black py-8 px-[5%] border-t-p-black border-[1px]">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                {/* Logo ou espace réservé */}
                <div className="flex items-center hidden md:block justify-center">
                    <NavLink to="/" className="h-full flex justify-center items-center">
                        <img className="h-36 w-auto" src="/Images/AHB/logo_sans_fon_noir.png" alt="Logo de L'AHB"/>
                    </NavLink>
                </div>

                {/* Navigation principale */}
                <div className="flex justify-between">
                    <div className="flex flex-col w-full md:px-[10%]">
                        <h3 className="font-bold text-2xl pb-4">Navigation</h3>
                        <Link to="/" className="w-max hover:text-pink-dark">Accueil</Link>
                        <Link to="/chevaigne" className="w-max hover:text-pink-dark">Club de Chevaigné</Link>
                        <Link to="/saint-gregoire" className="w-max hover:text-pink-dark">Club de Saint-Grégoire</Link>
                        <Link to="/saulnieres" className="w-max hover:text-pink-dark">Club de Saulnières</Link>
                        <Link to="/actualités" className="w-max hover:text-pink-dark">Actualités</Link>
                        <Link to="/compétitions" className="w-max hover:text-pink-dark">Compétitions</Link>
                        <Link to="/boutique" className="w-max hover:text-pink-dark">Boutique</Link>
                        <Link to="/nous-rejoindre" className="w-max hover:text-pink-dark">Nous rejoindre</Link>
                    </div>
                    {/* Informations de contact et réseaux sociaux */}
                    <div className="flex flex-col w-full items-end md:items-start md:px-[10%]">
                        <h3 className="font-bold text-2xl pb-4">Contact</h3>
                        <a href="mailto:contact@parade-riposte.net" className="hover:text-pink-dark">
                            Email
                        </a>
                        <a href="https://www.facebook.com/Escrime.AHB/?locale=fr_FR"
                           target="_blank" rel="noopener noreferrer"
                           className="hover:text-pink-dark">
                            Facebook
                        </a>
                        <a href="https://www.instagram.com/ahb_escrime/?hl=fr"
                           target="_blank" rel="noopener noreferrer"
                           className="hover:text-pink-dark">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="flex justify-center items-center">
                <span className="text-center mt-4 text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} | Créé par Martin Bagot.
            </span>
            </div>
        </footer>
    );
};

export default Footer;
