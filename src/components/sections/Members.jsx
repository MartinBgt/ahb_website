import MemberCard from "../cards/MemberCard.jsx";

const Members = ({link1, names1, statue1, link2, names2, statue2, link3, names3, statue3}) => {
    return (
        <section id="clubs" className="flex items-center justify-evenly bg-p-beige py-8 md:py-24 flex-col md:flex-row">
            <MemberCard link={link1} names={names1} statue={statue1}/>
            <MemberCard link={link2} names={names2} statue={statue2}/>
            <MemberCard link={link3} names={names3} statue={statue3}/>
        </section>
    )
}
export default Members;