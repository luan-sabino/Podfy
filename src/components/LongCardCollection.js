import LongCard from "./LongCard";
import useWindowSize from "../services/useWindowSize";
import isLoadingContext from "../services/isLoadingContext";
import { useContext } from "react";

export default function LongCardCollection(props){

    var isLoading = useContext(isLoadingContext);

    function handleLoading(){
        let elements = []
        for(let i = 0; i < 4; i++){
            elements.push(<LongCard key={i}/>)
        }
        return elements;
    }

    if(isLoading !== true){
        let data = JSON.parse(localStorage.getItem('best_podcasts'));
        data = data.podcasts;

        return(
            <section className="flex flex-col py-4 px-8 text-white w-full mb-4">
                <header className="flex justify-between pb-4 text-white items-center">
                    <h1 className="text-3xl pb-4">Boa noite</h1>
                </header>
                <div className="grid grid-flow-col grid-rows-2 gap-y-4 gap-x-6 w-full" >
                    {(data != null ? data.map((podcast, index)=>{
                        if(index < 6)
                            return <LongCard key={index} banner={podcast.thumbnail} title={podcast.title} handleVisibility="sm:flex" handleMouseOver={props.backgroundHandler}/>
                        return '';    
                    }) : '')}
                </div>
            </section>
        );
    }

    return(
        <section className="flex flex-col py-4 px-8 text-white w-full mb-4">
            <header className="flex justify-between pb-4 text-white items-center">
                <h1 className="text-3xl pb-4">Boa noite</h1>
            </header>
            <div className="grid grid-flow-col grid-rows-2 gap-y-4 gap-x-6 w-full" >
                {handleLoading()}
            </div>
        </section>
    );

}