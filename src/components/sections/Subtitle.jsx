const Subtitle = ({children}) => {
    return (
        <div className="bg-p-white flex items-center justify-between h-24 text-3xl">
            <span
                className="h-1 w-[15%] bg-p-black rounded-tr-[2px] rounded-br-[2px] hidden xs:block md:w-[25%]"></span>
            <h2 className="mx-auto">{children}</h2>
            <span
                className="h-1 w-[15%] bg-p-black rounded-tl-[2px] rounded-bl-[2px] hidden xs:block md:w-[25%]"></span>
        </div>

    );
};
export default Subtitle;