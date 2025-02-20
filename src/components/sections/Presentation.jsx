import React from "react"

const Presentation = ({title1, link, desc, classname}) => {
    return (
        <div className="relative w-full h-[80vh] overflow-hidden flex justify-center sm:justify-normal">
            {/* Image avec effet miroir */}
            <img
                className={`w-full h-full object-cover transform brightness-50 sm:brightness-100 ${classname}`}
                src={link}
                alt={desc}
            />

            {/* Gradient flouté */}
            <div
                className="absolute top-0 left-[-5%] w-[55%] h-full sm:bg-gradient-to-r from-black to-transparent opacity-70 blur-[4px]"></div>

            <div className="text-p-white flex justify-center absolute top-[20%] text-6xl text-center sm:text-start">
                <span
                    className="absolute bg-p-white h-2 w-[20%] md:w-[25%] top-5 left-0 rounded-tr-[10px] rounded-br-[10px] hidden sm:block"></span>
                <h1 className="font-leckerli sm:px-32 md:px-56 whitespace-pre-line tracking-wider">
                    {title1.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br/>
                        </React.Fragment>
                    ))}
                </h1>

                <span
                    className="absolute bg-p-white h-2 w-[20%] md:w-[25%] bottom-5 right-0 rounded-[10px] hidden sm:block"></span>
            </div>
        </div>
    );
};
export default Presentation;
