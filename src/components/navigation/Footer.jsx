import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-p-gray text-p-black py-6 px-28">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 relative">
                {/* Première div à gauche */}
                <div className="col-span-1 row-span-2 flex flex-col space-y-1">
                    <Link to="/" className="w-max hover:text-pink-dark">Accueil</Link>
                    <Link to="/chevaigne" className="w-max hover:text-pink-dark">Club de Chevaigné</Link>
                    <Link to="/saint-gregoire" className="w-max hover:text-pink-dark">Club de Saint-Grégoire</Link>
                    <Link to="/saulnieres" className="w-max hover:text-pink-dark">Club de Saulnières</Link>
                    <Link to="/enseignants" className="w-max hover:text-pink-dark">Enseignants</Link>
                    <Link to="/actualités" className="w-max hover:text-pink-dark">Actualités</Link>
                    <Link to="/compétitions" className="w-max hover:text-pink-dark">Compétitions</Link>
                    <Link to="/boutique" className="w-max hover:text-pink-dark">Boutique</Link>
                    <Link to="/nous-rejoindre" className="w-max hover:text-pink-dark">Nous rejoindre</Link>
                </div>

                {/* Deuxième div en haut à droite */}
                <div className="col-start-2 row-start-1 flex flex-col items-end h-full space-y-1">
                    <a href="mailto:contact@parade-riposte.net"
                       className="hover:text-pink-dark">contact@parade-riposte.net</a>
                    <a href="https://www.facebook.com/Escrime.AHB/?locale=fr_FR"
                       target="_blank" className="hover:text-pink-dark">Facebook</a>
                    <a href="https://www.instagram.com/ahb_escrime/?hl=fr"
                       target="_blank" className="hover:text-pink-dark">Instagram</a>
                </div>


                {/* Span en bas à droite */}
                <span className="absolute bottom-0 right-0">
                    &copy; {new Date().getFullYear()} | Crée par Martin Bagot.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
