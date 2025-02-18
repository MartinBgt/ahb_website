import {useNavigate} from "react-router-dom";
import Cta from "../ui/Cta.jsx";

const ClubCards = ({imgURL, title = "Club", link}) => {
    const navigate = useNavigate(); // Hook pour naviguer programatiquement

    return (
        <div className="shadow-2xl shadow-p-beigeCards rounded-[20px]">
            <div
                className="w-[15vw] h-[15vw] rounded-[20px] bg-p-beigeCards shadow-custom flex items-center justify-center relative overflow-hidden"
            >
                <img className="absolute top-0 left-0 w-full h-full object-cover blur-[4px]" src={imgURL}/>
                <h1 className="font-leckerli text-4xl text-p-white z-10 text-center break-words leading-tight">{title}</h1>
                <Cta onClick={() => navigate(link)} className="absolute bottom-3 right-3">
                    Plus d'infos
                </Cta>
            </div>
        </div>
    )
};
export default ClubCards;



