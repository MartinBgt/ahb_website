const Map = ({link}) => {
    return (
        <div className="rounded-[20px] overflow-hidden">
            <iframe
                src={link}
                className="w-[45vh] h-[45vh] rounded-[20px] border-none"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};
export default Map;