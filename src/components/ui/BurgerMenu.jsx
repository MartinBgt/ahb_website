const BurgerMenu = ({style, funct, checked}) => {
    return (
        <button className={style}>
            <label>
                <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                    <input
                        className="hidden peer"
                        type="checkbox"
                        checked={checked}
                        onChange={funct}
                    />
                    <div
                        className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
                    <div
                        className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
                    <div
                        className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
                </div>
            </label>
        </button>
    );
};
export default BurgerMenu;