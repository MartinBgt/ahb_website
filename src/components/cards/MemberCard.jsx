import {motion, useInView} from "framer-motion";
import {useRef} from "react";

const MemberCard = ({link, names, statue, imgClass = "object-top"}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.6, ease: "easeOut"}}
            className="relative bg-p-beigeCards flex-col inline-flex w-[70%] xs:w-[50%] md:w-[30%] lg:w-[20%] my-8 pb-4 rounded-2xl shadow-2xl shadow-p-beigeCards"
        >
            <div className="w-full h-48 min-h-48 max-h-48 overflow-hidden rounded-2xl">
                <img className={`w-full h-full object-cover ${imgClass}`} src={link} alt={names}/>
            </div>
            <div className="px-4">
                <h3 className="text-xl pt-2">{names}</h3>
                <span className="block">{statue}</span>
            </div>
        </motion.div>
    )
}
export default MemberCard;