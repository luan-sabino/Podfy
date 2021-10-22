import Card from "./Card";
import isLoadingContext from "../services/isLoadingContext";
import { useContext } from "react";

export default function CardCollection(props){

    var isLoading = useContext(isLoadingContext);

    function setResponsiveClass(i){
        switch(i){
            case 1: case 2:  return "sm:flex";
            case 3: return "lg:flex";
            case 4: return "xl:flex";
            case 5: return "1/2xl:flex";
            case 6: return "2/4xl:flex"; 
            case 7: return "3/4xl:flex";
            case 8: return "4/4xl:flex";
            case 9: return "2xl:flex";
            default: console.log('some issue'); break;
        }
    }

    function handleLoading(){
        let elements = []
        let visibilityValue = "";
        for(let i = 1; i <= 9; i++){
            visibilityValue = setResponsiveClass(i);
            elements.push(<Card key={i} handleVisibility={visibilityValue}/>)
        }
        return elements;
    }

    if(isLoading !== true){
        
        let data = JSON.parse(localStorage.getItem(props.index));
        let title = data.name;
        data = data.podcasts;
        
        return(
            <section className="px-8 py-4 mb-4">
                <header className="flex justify-between pb-4 text-white items-center">
                    <h1 className="text-2xl pb-4">{title}</h1>
                    <a className="uppercase text-xs hover:underline" href='/'>Ver tudo</a>
                </header>
                <div className="grid grid-flow-col h-56 w-full gap-x-6 min-h-300">
                    {(data != null ? data.map((podcast, index)=>{
                        if(index <= 8){
                            return <Card key={index} banner={podcast.thumbnail} title={podcast.title} desc={podcast.description} handleVisibility={setResponsiveClass(index+1)} handleMouseOver={props.backgroundHandler}/>
                        }
                        return '';    
                    }) : '')}
                </div>
            </section>
        );
    }

    return(
        <section className="px-8 py-4 mb-4">
            <header className="flex justify-between pb-4 text-white items-center">
                <h1 className="text-2xl pb-4 bg-black bg-opacity-30 animate-pulse w-1/6 text-transparent rounded-md">Loading</h1>
                <a className="uppercase text-xs text-transparent animate-pulse bg-black bg-opacity-30 rounded hover:underline" href='/'>Ver tudo</a>
            </header>
            <div className="grid grid-flow-col h-56 w-full gap-x-6 min-h-300">
                {handleLoading()}
            </div>
        </section>
    );

    
}