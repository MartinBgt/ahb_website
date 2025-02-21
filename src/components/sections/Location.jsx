import Map from '../ui/Map.jsx'
import Cta from '../ui/Cta.jsx'
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

const Location = ({link, title, adress, email, tel, url}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true}); // Animation déclenchée une seule fois

    return (
        <section className="flex items-center justify-center py-8 md:py-24 bg-p-beige">
            <motion.div
                ref={ref}
                initial={{opacity: 0, y: 50}}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.6, ease: "easeOut"}}
                className="bg-p-beigeCards md:flex rounded-2xl shadow-2xl shadow-p-beigeCards">
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
            </motion.div>
        </section>
    )
}
export default Location