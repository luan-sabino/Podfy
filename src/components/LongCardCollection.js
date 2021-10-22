import LongCard from "./LongCard";
//import useWindowSize from "../services/useWindowSize";
import isLoadingContext from "../services/isLoadingContext";
import { useContext } from "react";

export default function LongCardCollection(props){

    var isLoading = useContext(isLoadingContext);

    function setResponsiveClass(i){
        switch(i){
            case 1: case 2:  return "sm:flex";
            case 3: case 4:  return "md:flex";
            case 5: case 6:  return "lg:flex";
            case 7: case 8:  return "2xl:flex";
            case 9: case 10: return "2xl:flex";
            default: console.log('some issue: ', i); break;
        }
    }

    function handleLoading(){
        let elements = []
        let visibilityValue = "";
        for(let i = 1; i <= 10; i++){
            visibilityValue = setResponsiveClass(i);
            elements.push(<LongCard key={i} handleVisibility={visibilityValue}/>)
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
                        if(index <= 9){
                            return <LongCard key={index} banner={podcast.thumbnail} title={podcast.title} handleVisibility={setResponsiveClass(index+1)} handleMouseOver={props.backgroundHandler}/>
                        }
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