import Location from "../sections/Location.jsx";
import Presentation from "../sections/Presentation.jsx";
import Subtitle from "../sections/Subtitle.jsx";
import Members from "../sections/Members.jsx";

const ChevaignePage = () => {
    return (
        <>
            <Presentation link="/Images/Chevaigné/accueil.jpg" title1={`Club de\nChevaigné`}
                          classname="object-top"></Presentation>
            <Subtitle>Les Membres</Subtitle>
            <Members link1="/Images/Chevaigné/marc-legrand.jpg" names1="Marc Legrand" statue1="Président"
                     link2="/Images/Chevaigné/Annie-Lis.jpg" names2="Annie Lis" statue2="Trésorière"
                     link3="/Images/Chevaigné/logo.jpg" names3="Guillaume Bramouille" statue3="Secrétaire"/>
            <Subtitle>Nous trouver</Subtitle>
            <Location
                link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1038.2844456365106!2d-1.6320645111108312!3d48.21359633154589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480edcbbec1f392f%3A0x6ab53c51bf2b0e49!2s7%20Rte%20de%20la%20Motte%2C%2035250%20Chevaign%C3%A9!5e1!3m2!1sfr!2sfr!4v1740047846724!5m2!1sfr!2sfr"
                title="Cercle d’Escrime de Chevaigné" adress="7 route de la Motte, 35250 Chevaigné"
                email="escrime.chevaigne@orange.fr" tel="06 89 11 45 82"
                url="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://parade-riposte.net/wp-content/uploads/2022/06/CER-sign%C3%A9-Pdt-CEC-19.06.2022.pdf"/>
        </>
    )
}
export default ChevaignePage;