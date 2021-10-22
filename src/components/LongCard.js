import { useContext, useState } from "react";
import isLoadingContext from "../services/isLoadingContext";
import { BiLoaderAlt } from 'react-icons/bi'
import PlayButton from "./PlayButton";

export default function LongCard(props){

    function generateRandomValue(){
        return Math.floor(Math.random() * (255 - 0)) + 0;
    }


    var isLoading = useContext(isLoadingContext);
    var rgb = `${generateRandomValue()},${generateRandomValue()},${generateRandomValue()}`
    const [showButton, setPlayButton] = useState(false);

    if(isLoading){
        return(
            <div className={"min-w-241 h-20 w-full rounded bg-gray-200 bg-opacity-5 items-center hover:bg-opacity-20 hidden " + props.handleVisibility}>
                <div className="animate-pulse w-20 h-20 rounded-l shadow-banner flex justify-center items-center"><BiLoaderAlt size="32px" className="animate-spin"/></div>
                <div className="animate-pulse p-4 bg-black bg-opacity-40 rounded-md w-2/4 ml-4"></div>
            </div>
        );
    }
    
    return(
        <div className={"min-w-241 h-20 w-full rounded bg-gray-200 bg-opacity-5 hidden items-center hover:bg-opacity-20 relative " + props.handleVisibility} onMouseOver={(e)=>{props.handleMouseOver(e); setPlayButton(true)}} onMouseLeave={()=> setPlayButton(false)}>
            <span id='rgb' className="hidden">{rgb}</span>
            <img src={props.banner} alt="Banner" className="w-20 h-20 rounded-l shadow-banner pointer-events-none"></img>
            <h3 className="p-4 pointer-events-none truncate">{props.title}</h3>
            <PlayButton display={showButton}/>
        </div>
    );
}