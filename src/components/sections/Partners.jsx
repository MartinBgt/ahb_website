import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div className="py-12 bg-p-white ">
            <Marquee className="bg-p-white" autoFill={true} speed={50} gradient={true} gradientWidth={200}>
                <img src="/Images/Partenaires/ffe.png" alt="Logo de la FFE"
                     className="w-48 h-32 object-contain rounded-lg mx-16"/>
                <img src="/Images/Partenaires/Logo_Ille_Vilaine.png" alt="Logo de l'ille Vilaine"
                     className="w-48 h-32 object-contain rounded-lg mx-16"/>
                <img src="/Images/Partenaires/mam-goz.jpg" alt="Logo de man goz"
                     className="w-48 h-32 object-contain rounded-lg mx-16"/>
                <img src="/Images/Partenaires/region-bretagne.jpg" alt="Logo de region bretagne"
                     className="w-48 h-32 object-contain rounded-lg mx-16"/>
                <img src="/Images/Partenaires/Saint-Grégoire-logo.png" alt="Logo de Saint-Grégoire"
                     className="w-48 h-32 object-contain rounded-lg mx-16"/>
                <img src="/Images/Partenaires/1bouchon1sourire_sans_fond.png" alt="Logo de 1 bouchon 1 sourire"
                     className="w-48 h-32 object-contain rounded-lg mx-16"/>
                <img src="/Images/Partenaires/cde_sans_fond.png" alt="Logo du cde 35"
                     className="w-48 h-32 object-contain rounded-lg mx-16"/>
                <img src="/Images/Partenaires/cmb_sans_fond.png" alt="Logo du crédit mutuel de Bretagne"
                     className="w-48 h-32 object-contain rounded-lg mx-16"/>
            </Marquee>
        </div>
    )
}

export default Partners;
