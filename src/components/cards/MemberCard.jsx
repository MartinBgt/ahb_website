const MemberCard = ({link, names, statue}) => {
    return (
        <div
            className="relative bg-p-beigeCards flex-col inline-flex w-[70%] xs:w-[50%] md:w-[30%] lg:w-[20%] my-8 pb-4 rounded-2xl shadow-2xl shadow-p-beigeCards">
            <div className="w-full h-48 min-h-48 max-h-48 overflow-hidden rounded-2xl">
                <img className="w-full h-full object-cover object-top" src={link} alt={names}/>
            </div>
            <div className="px-4">
                <h3 className="text-xl pt-2">{names}</h3>
                <span className="block">{statue}</span>
            </div>
        </div>
    )
}
export default MemberCard;