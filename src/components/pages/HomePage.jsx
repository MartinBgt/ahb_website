import Presentation from "../sections/Presentation.jsx";
import Subtitle from "../sections/Subtitle.jsx";
import Clubs from "../sections/Clubs.jsx";
import Masters from "../sections/Masters.jsx";
import Partners from "../sections/Partners.jsx";

const HomePage = () => {
    return (
        <>
            <Presentation link="/Images/Compétition/compet.jpg"/>
            <Subtitle>Nos clubs</Subtitle>
            <Clubs/>
            <Subtitle>Nos Enseignants</Subtitle>
            <Masters/>
            <Partners/>
        </>
    )
}
export default HomePage;