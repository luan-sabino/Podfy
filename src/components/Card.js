import { useContext } from 'react';
import isLoadingContext from '../services/isLoadingContext';
import { BiLoaderAlt } from 'react-icons/bi'

export default function Card(props){

    var isLoading = useContext(isLoadingContext);

    if(!isLoading){
        return(
            <div className={"rounded-sm bg-card p-4 text-md w-full min-w-180 h-full hidden flex-col hover:bg-gray-200 hover:bg-opacity-20 cursor-pointer " + props.handleVisibility}>
                <img src={props.banner} alt='Banner' className="rounded-xl shadow-card mb-4 "/>
                <a className="min-h-61 text-white" href='/'>
                    <h1 className="truncate">{props.title}</h1>
                    <p className="text-unselected font-light truncate">{props.desc}</p>
                </a>
            </div>
        );
    }

    return(
        <div className={"rounded-sm bg-card p-4 text-md w-full min-w-180 h-full hidden flex-col " + props.handleVisibility}>
            <div alt='Banner' className="animate-pulse rounded-xl h-2/3 shadow-card mb-4 flex justify-center items-center text-white">
                <BiLoaderAlt size="60px" className="animate-spin"/>
            </div>
            <a className="min-h-61 text-white" href='/'>
                <h1 className="bg-black bg-opacity-30 animate-pulse rounded-md font-light text-transparent mb-2">Loading</h1>
                <p className="bg-black bg-opacity-30 animate-pulse rounded-md font-light text-transparent">Loading</p>
            </a>
        </div>
    );

    
}