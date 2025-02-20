import Map from '../ui/Map.jsx'
import Cta from '../ui/Cta.jsx'

const Location = ({link, title, adress, email, tel, url}) => {
    return (
        <section className="flex items-center justify-center py-8 md:py-24 bg-p-beige">
            <div className="bg-p-beigeCards md:flex rounded-2xl shadow-2xl shadow-p-beigeCards">
                <Map link={link}/>
                <div className="flex flex-col pt-5 space-y-3 p-5">
                    <h3>{title}</h3>
                    <span>{adress}</span>
                    <a href={`mailto:${email}`} className="hover:text-pink-dark">
                        {email}
                    </a>
                    <span>{tel}</span>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="pt-6">
                        <Cta pad="px-3 py-[6px]" size="text-xs">Contrat d’engagement républicain</Cta>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Location