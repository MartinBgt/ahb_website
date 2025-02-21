import Presentation from "../sections/Presentation.jsx";
import Subtitle from "../sections/Subtitle.jsx";
import Members from "../sections/Members.jsx";
import Location from "../sections/Location.jsx";

const SaulnieresPage = () => {
    return (
        <>
            <Presentation link="/Images/Saulnière/salle2.jpg" title1={`Club de\nSaulnières`}
                          classname="object-center"></Presentation>
            <Subtitle>Les Membres</Subtitle>
            <Members link1="/Images/Saulnière/severine-antin.jpeg" names1="Séverine Antin" statue1="Présidente"
                     imgClass1="object-center"
                     link2="/Images/Saulnière/laeticia-dargaud.jpeg" names2="Laetitia Dagaud"
                     statue2="Présidente" imgClass2="object-center" nb={"2"}/>
            <Subtitle>Nous trouver</Subtitle>
            <Location
                link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1351.0001001194194!2d-1.5844264610908372!3d47.9142408928049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480f24b38ecc8e69%3A0xfaa55282551813d0!2s35%20Les%20Croix%2C%2035320%20Saulni%C3%A8res!5e1!3m2!1sfr!2sfr!4v1740125804455!5m2!1sfr!2sfr"
                title="Escrimez Vous Saulnières" adress="35 Les Croix, 35320 Saulnières"
                email="saulnieresriposte@outlook.fr" tel="06 47 03 53 94"
                url=""/>
        </>
    )
}
export default SaulnieresPage;