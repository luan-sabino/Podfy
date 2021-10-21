

export default function LongCard(props){
    return(
        <div className="min-w-241 h-20 w-full rounded bg-gray-200 bg-opacity-5 flex items-center hover:bg-opacity-20" onMouseOver={props.handleMouseOver}>
            <img src={props.banner} alt="Banner" className="w-20 h-20 rounded-l shadow-banner pointer-events-none"></img>
            <h3 className="p-4 pointer-events-none">{props.title}</h3>
        </div>
    );
}