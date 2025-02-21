import Presentation from "../sections/Presentation.jsx";
import Subtitle from "../sections/Subtitle.jsx";
import Members from "../sections/Members.jsx";
import Location from "../sections/Location.jsx";

const SaintGregoirePage = () => {
    return (
        <>
            <Presentation link="/Images/Saint-Grégoire/salle2.jpg" title1={`Club de\nSaint-\nGrégoire`}
                          classname="object-top"></Presentation>
            <Subtitle>Les Membres</Subtitle>
            <Members link1="/Images/Saint-Grégoire/olivierPoulet.jpg" names1="Olivier Poulet" statue1="Président"
                     imgClass1="object-center"
                     link2="/Images/Saint-Grégoire/ELISABETH-cHATOUX.jpg" names2="Elisabeth Chatoux"
                     statue2="Trésorière"
                     link3="/Images/Saint-Grégoire/stéphanie-chapel.jpg" names3="Stéphanie Chapel"
                     statue3="Secrétaire" imgClass3="object-center"/>
            <Subtitle>Nous trouver</Subtitle>
            <Location
                link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.567900622889!2d-1.6856697235410727!3d48.209094371251446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480edd40529180d9%3A0xd4e4f2ae9dfb6e91!2s28%20Les%20Guimondi%C3%A8res%2C%2035520%20Melesse!5e1!3m2!1sfr!2sfr!4v1740125150915!5m2!1sfr!2sfr"
                title="Association Grégorienne d’Escrime" adress="28 Les Guimondières, 35520 Melesse"
                email="contact@parade-riposte.net" tel="06 81 56 19 18"
                url="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://parade-riposte.net/wp-content/uploads/2022/06/Contrat-Engagement-R%C3%A9publicain-Affiche-AGE.pdf"/>
        </>
    )
}
export default SaintGregoirePage;
