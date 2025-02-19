import MasterCard from "../cards/MasterCard.jsx";

const Masters = () => {
    return (
        <section id="clubs" className="flex items-center justify-evenly bg-p-beige py-8 md:py-24 flex-col md:flex-row">
            <MasterCard link="/Images/Enseignants/abraham.jpg" names="Abraham Legrand" tel="06 42 83 38 29"
                        email="abraham.legrand@parade-riposte.net"
                        linkCta="https://recherche-educateur.sports.gouv.fr/CartePro/03516ED0007"/>
            <MasterCard link="/Images/Enseignants/morgan-fraboulet1.jpg" names="Morgan Fraboulet" tel="06 25 66 82 28"
                        email="morgan.fraboulet@parade-riposte.net"
                        linkCta="https://recherche-educateur.sports.gouv.fr/CartePro/03502ED0346"/>
        </section>
    )
}
export default Masters;