const Presentation = ({link, desc}) => {
    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            {/* Image avec effet miroir */}
            <img className="w-full h-full object-cover object-center transform scale-x-[-1]" src={link} alt={desc}/>

            {/* Gradient flouté */}
            <div
                className="absolute top-0 left-[-5%] w-[55%] h-full bg-gradient-to-r from-black to-transparent opacity-70 blur-[4px]"></div>

            <div className="text-p-white w-[40%] flex justify-center absolute top-1/4 text-6xl">
                <span
                    className="absolute bg-p-white h-2 w-[25%] top-5 left-0 rounded-tr-[10px] rounded-br-[10px]"></span>
                <h1 className="font-leckerli ]">L’AHB <br/> Clubs <br/> d’Escrime</h1>
                <span className="absolute bg-p-white h-2 w-[25%] bottom-5 right-0 rounded-[10px]"></span>
            </div>
        </div>
    );
};
export default Presentation;
