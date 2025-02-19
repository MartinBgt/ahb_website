import ClubCards from "../cards/ClubCard.jsx";

const Clubs = () => {
    return (
        <section id="clubs" className="flex flex-col items-center justify-evenly bg-p-beige py-8 md:flex-row">
            <ClubCards imgURL="/Images/Chevaigné/salle.jpg" title="Chevaigné" link="chevaigne"/>
            <ClubCards imgURL="/Images/Saint-Grégoire/salle.jpg" title="Saint-Grégoire" link="saint-gregoire"/>
            <ClubCards imgURL="/Images/Saulnière/salle.jpg" title="Saulnières" link="saulnieres"/>
        </section>
    )
}
export default Clubs;