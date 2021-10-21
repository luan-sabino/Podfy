import logo from '../img/logo_size.svg';
import { AiFillHome } from 'react-icons/ai'
import { BsSearch, BsFillPlusSquareFill } from 'react-icons/bs'
import { ImBooks } from 'react-icons/im'
import { IoHeartSharp } from 'react-icons/io5'
import NavBarAnchor from './NavBarAnchor';
import React from 'react';

function LeftSideBar() {

    const [navSelected, setNavSelected] = React.useState('home')

    return (
        <div className="flex flex-col min-w-241 h-full bg-black pt-6">
            <img src={logo} className="mx-6 mb-5" style={{height: "41px", width: "131px"}} alt="PodFy"></img>
            <ul className="h-min">
                <li className="px-2">
                    <NavBarAnchor name='Início' id='home' icon={<AiFillHome size='24px'/>} isSelected={navSelected} handleSelection={setNavSelected}/>
                </li>
                <li className="px-2">
                    <NavBarAnchor name='Buscar' id='search' icon={<BsSearch size='24px'/>} isSelected={navSelected} handleSelection={setNavSelected}/>
                </li>
                <li className="px-2">
                    <NavBarAnchor name='Sua Biblioteca' id='library' icon={<ImBooks size='24px'/>} isSelected={navSelected} handleSelection={setNavSelected}/>
                </li>
            </ul>
            <div className='px-2 mt-6'>
                <a className='navbar-button' href='/'>
                    <BsFillPlusSquareFill size="24px"/>
                    <span>Criar playlist</span>
                </a>
                <a className='navbar-button' href='/'>
                    <div className="bg-gradient-to-br from-purple-800 via-purple-600 to-purple-200 w-6 h-6 flex justify-center items-center filter grayscale-50 hover:grayscale-0"><IoHeartSharp size='14px'/></div>
                    <span>Podcasts Curtidos</span>
                </a>
                <div className="border-t mx-4 mt-6 border-primary"></div>
                <ul className="mx-4 mt-6 h-96 overflow-y-scroll">
                    <li className="h-8 w-max">Poucas</li>
                </ul>
            </div>
            
        </div>
    );
  }
  
export default LeftSideBar;
  