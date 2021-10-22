import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { TiArrowSortedDown } from 'react-icons/ti';
import profilePicture from '../img/profile.jpg';
import CardCollection from './CardCollection';
import LongCardCollection from './LongCardCollection';
import FetchApi from '../services/fetchApi';
import { useEffect, useState } from 'react';
import isLoadingContext from '../services/isLoadingContext';

/*Infelizmente não funciona com Imagens Cross-origin
async function getAverageColor(img) {
    let context = document.createElement('canvas').getContext('2d');
    var data;
    if (typeof img == 'string') {
        var src = img;
        img = await new Image();
        img.setAttribute('crossOrigin', '');
        img.src = src;
        img.onload = ()=>{
            context.imageSmoothingEnabled = true;
            context.drawImage(img, 0, 0, 1, 1);
            data = context.getImageData(0, 0, 1, 1).data.slice(0,3);
        }
    }
    
    return data;
}*/


export default function Home(){

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        FetchApi.getBestsPodcasts();
        FetchApi.setDataByGenres();
        setIsLoading(false);
    }, [])

    function handleBackgroundColor(e){
        let rgb = e.currentTarget.querySelector("#rgb").textContent
        document.documentElement.style.setProperty('--current-bg', 'rgb(' + rgb + ',0.30)');
    }

    function renderCardCollections(){
        var elements = [];
        for(let i = 1; i <= 5; i++){
            elements.push(<CardCollection key={i} index={i}/>)
        }
        return elements;
    }

    return(
        <isLoadingContext.Provider value={isLoading}>
            <main className="grid gap-y-4 grid-cols-1 pb-6">
                <div className={"bg-gradient-to-b from-currentBG to-transparent"}>
                    <header className={"flex py-4 px-8 justify-between"}>
                        <div className="flex">
                            <button className="mr-4 rounded-full bg-black bg-opacity-30 text-unselected text-opacity-70 p-1">
                                <IoIosArrowBack size="24px"/>
                            </button>
                            <button className="mr-4 rounded-full bg-black bg-opacity-30 text-unselected text-opacity-70 p-1">
                                <IoIosArrowForward size="24px"/>
                            </button>
                        </div>
                        <div className="flex rounded-full bg-black bg-opacity-80 w-150 text-white p-0.5 items-center text-sm justify-between">
                            <img src={profilePicture} alt="Profile" className="w-7 h-7 rounded-full"/>
                            <span>Luan Sabino</span>
                            <TiArrowSortedDown size="18px" className='mr-1.5'/>
                        </div>
                    </header>
                    <LongCardCollection backgroundHandler={handleBackgroundColor}/>    
                </div>
                {renderCardCollections()}
            </main>
        </isLoadingContext.Provider>
    );
}