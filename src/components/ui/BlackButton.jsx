const BlackButton = ({children, onClick, className = ""}) => {
    return (
        <div className="relative group">
            <button
                className={`relative inline-block p-px text-p-white
                rounded-lg ${className}`}
                onClick={onClick}
            >
                <span
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-light
                    to-pink-dark p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></span>
                <span className="h-7 flex items-center relative z-10 block py-1 px-5 rounded-lg bg-p-black">
                    <div className="relative z-10 flex items-center space-x-2">
                        <span>{children}</span>
                    </div>
                </span>
            </button>
        </div>
    );
};

export default BlackButton;
