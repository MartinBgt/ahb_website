import Cta from "../ui/Cta.jsx";

const MasterCards = ({link, names, tel, email, linkCta}) => {

    return (
        <div
            className="relative bg-p-beigeCards flex-col inline-flex w-1/6 pb-16 rounded-2xl shadow-2xl shadow-p-beigeCards">
            <div className="w-full h-48 min-h-48 max-h-48 overflow-hidden rounded-2xl">
                <img className="w-full h-full object-cover object-top" src={link} alt={names}/>
            </div>
            <div className="px-4">
                <h3 className="text-xl py-1">{names}</h3>
                <span className="block">{tel}</span>
                <span className="block">{email}</span>
            </div>
            <a href={linkCta} target="_blank" rel="noopener noreferrer">
                <Cta className="absolute bottom-3 right-3" pad="px-3 py-[6px]" size="text-xs">Carte
                    Professionnelle</Cta>
            </a>
        </div>
    )
}
export default MasterCards;