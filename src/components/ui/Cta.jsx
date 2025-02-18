const Cta = ({children, onClick, className = "", pad = "px-4 py-2", size = "text-sm"}) => {
    return (
        /* From Uiverse.io by 00Kubi */
        <button
            className={`group ${pad} text-p-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 ${className}`}
            onClick={onClick}
        >
            <div
                className="absolute inset-0 bg-gradient-to-br from-pink-light to-pink-dark rounded-full transition-all duration-300 group-hover:scale-110 animate-gradient"
            ></div>

            <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-white blur-xl"
            ></div>

            <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="glitter-container">
                    <div className="glitter"></div>
                    <div className="glitter"></div>
                    <div className="glitter"></div>
                </div>
            </div>

            <div
                className="absolute inset-0 rounded-full border-2 border-white opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-300"
            ></div>

            <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="wave"></div>
            </div>

            <span className="relative z-10 flex items-center gap-2">
            <span className={`tracking-wider ${size}`}>{children}</span>
                <span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-p-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                ></span>
            </span>
        </button>

    )
}
export default Cta;