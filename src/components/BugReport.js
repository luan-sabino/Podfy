import { useState } from 'react';
import { AiFillBug } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

export default function BugReport(props){

    const [isModalOpen, setModalOpen] = useState(false);
    const [isSubmited, setSubmit] = useState(false);
    const [typeBug, setTypeBug] = useState(-1);

    function handleSubmit(e){
        e.preventDefault();
        setModalOpen(false);
        setSubmit(true);
        /*
        var data = new FormData(e);
        fetch('www.somewhere.br/new/user', {method:'POST', body: JSON.stringify(data)}).then(res => console.log(res)).catch(err => console.log(err));
        */

    }

    if(isSubmited === true){
        return(
            <div id='bg' className="absolute w-full h-full bg-black bg-opacity-40 top-0 left-0 flex items-center justify-center" onClick={(e) => e.target.id === 'bg' ? setSubmit(false) : ''}>
                <div id='modal' className="w-2/5 bg-card rounded-md shadow-2xl z-50 flex flex-col justify-center items-center transition-all">
                    <TiTick size="128px" className="text-green-600 m-4"/>
                    <h1 className="text-center text-4xl mb-6 mx-4 text-white">Reportado com sucesso</h1>
                </div>
            </div>
        );
    }

    if(isModalOpen === true){
        return(
            <div id='bg' className="absolute w-full h-full bg-black bg-opacity-40 top-0 left-0 flex items-center justify-center" onClick={(e) => e.target.id === 'bg' ? setModalOpen(false) : ''}>
                <div id='modal' className="w-2/5 h-5/6 bg-card rounded-md shadow-2xl flex">
                    <form method="POST" onSubmit={(e)=> handleSubmit(e)} className="flex flex-col w-full h-full p-4 justify-evenly">
                        <h1 className="text-center text-white text-3xl m-4">Bug Report</h1>
                        <select name="problemType" className="p-2 rounded-md" value={typeBug} onChange={(e)=>setTypeBug(e.value)} required>
                            <option value="-1" defaultValue disabled>Qual o tipo de problema?</option>
                            <option value="1">Lorem ipsum dolor</option>
                            <option value="2">Lorem ipsum dolor</option>
                            <option value="3">Lorem ipsum dolor</option>
                            <option value="4">Lorem ipsum dolor</option>
                            <option value="5">Lorem ipsum dolor</option>
                        </select>
                        <textarea className="p-2 h-1/3 w-full rounded-md border-0" type="text" placeholder="Descreva o problema que encontrou" required/>
                        <textarea className="p-2 h-1/3 w-full rounded-md border-0" type="text" placeholder="Você consegue replicar? Se sim, indique os passos" required/>
                        <input className="p-3 bg-green-600 text-white w-1/2 rounded-sm text-xl font-bold z-50 cursor-pointer" type='submit' value="Reportar"/>
                    </form>
                </div>
            </div>
        );
    }

    return(
        <button className="rounded-full bg-green-400 shadow-button absolute right-6 bottom-6 transform hover:scale-105" onClick={()=>setModalOpen(true)}>
            <AiFillBug size="32px" className="m-2"/>
        </button>
    )

}