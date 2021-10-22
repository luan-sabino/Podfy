import { BsFillPlayCircleFill } from 'react-icons/bs';

export default function PlayButton(props){

    return(
        <button><BsFillPlayCircleFill size="40px" className={"text-green-400 bg-white rounded-full shadow-button top-1/4 right-4 transform hover:scale-105 " + (props.display ? "absolute" : "hidden")}/></button>
    );

}