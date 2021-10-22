import { useContext } from "react";
import isLoadingContext from "../services/isLoadingContext";
import { BiLoaderAlt } from 'react-icons/bi'

export default function LongCard(props){

    var isLoading = useContext(isLoadingContext);

    if(isLoading){
        return(
            <div className={"min-w-241 h-20 w-full rounded bg-gray-200 bg-opacity-5 items-center hover:bg-opacity-20 flex "}>
                <div className="animate-pulse w-20 h-20 rounded-l shadow-banner flex justify-center items-center"><BiLoaderAlt size="32px" className="animate-spin"/></div>
                <div className="animate-pulse p-4 bg-black bg-opacity-40 rounded-md w-2/4 ml-4"></div>
            </div>
        );
    }
    
    return(
        <div className={"min-w-241 h-20 w-full rounded bg-gray-200 bg-opacity-5 hidden items-center hover:bg-opacity-20 " + props.handleVisibility} onMouseOver={props.handleMouseOver}>
            <img src={props.banner} alt="Banner" className="w-20 h-20 rounded-l shadow-banner pointer-events-none"></img>
            <h3 className="p-4 pointer-events-none truncate">{props.title}</h3>
        </div>
    );
}