const PinkButton = ({children, onClick, className = ""}) => {
    return (
        <button
            className={`h-7 py-1 px-5 rounded-lg border border-p-black font-semibold text-xs text-p-black 
            bg-gradient-to-r from-pink-light via-pink-light to-pink-dark
            transition-colors ${className}`}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default PinkButton;
