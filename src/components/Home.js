import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { TiArrowSortedDown } from 'react-icons/ti';
import profilePicture from '../img/profile.jpg';
import LongCard from './LongCard';

import banner from '../img/profile.jpg'
import banner2 from '../img/logo512.png'
import { useState } from 'react';
import CardCollection from './CardCollection';

function getAverageColor(img) {
    let context = document.createElement('canvas').getContext('2d');
    if (typeof img == 'string') {
        var src = img;
        img = new Image();
        img.setAttribute('crossOrigin', ''); 
        img.src = src;
    }
    context.imageSmoothingEnabled = true;
    context.drawImage(img, 0, 0, 1, 1);
    return context.getImageData(0, 0, 1, 1).data.slice(0,3);
}

export default function Home(){

    function handleBackgroundColor(e){
        let rgb = getAverageColor(e.currentTarget.querySelector("img"));
        let style = getComputedStyle(document.documentElement);
        document.documentElement.style.setProperty('--current-bg', 'rgb(' + rgb + ',0.50)');
    }

    return(
        <main className="grid gap-y-4 grid-cols-1">
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
                <div className="flex py-4 px-8 text-white w-full">
                    <section className="flex flex-col w-full">
                        <h2 className="text-3xl pb-4">Boa noite</h2>
                        <div className="grid grid-flow-col grid-rows-2 grid-cols-2 gap-y-4 gap-x-6 w-full" >
                            <LongCard banner={banner} title="Nerdcast RPG" handleMouseOver={handleBackgroundColor}></LongCard>
                            <LongCard banner={banner2} title="Nerdcast RPG" handleMouseOver={handleBackgroundColor}></LongCard>
                            <LongCard banner={banner} title="Nerdcast RPG" handleMouseOver={handleBackgroundColor}></LongCard>
                            <LongCard banner={banner2} title="Nerdcast RPG" handleMouseOver={handleBackgroundColor}></LongCard>
                        </div>
                    </section>
                </div>
            </div>
            <CardCollection title="Boas vindas"/>
            <CardCollection title="Boas vindas"/>
        </main>
    );
}