import React,{useState} from 'react'
import {Undip, Rnb, Logo} from "../assets/icons"
import {Link, useLocation} from 'react-router-dom'
import NavigationStyle from "./navigation.css"

const Navigation = () => {

    const [handleDrop, setHandleDrop] = useState(false);

    const handleDropDown = () =>{
        setHandleDrop(!handleDrop);
    }

    // Gather location information
    const location = useLocation()

    // State for opening navigation
    const [navbar,setNavbar] = useState(false);
    const handleNav = (e) =>{
        e.preventDefault()
        setNavbar(!navbar)
    }
    return (
        <nav className="mx-auto w-full fixed z-50">

                <div className="md:w-10/12 w-full md:px-0 px-5 pt-1 mx-auto flex justify-between items-center bg-slate-50 bg-opacity-80">
                    <div className="flex justify-center">
                        <img src={Undip} className="w-12 mr-4 object-contain" />
                        <img src={Rnb} className="w-12 mr-4 object-contain" />
                        <img src={Logo} className="w-12 object-contain" />
                    </div>
                    <div className="md:flex justify-aroud  items-center hidden">
                        <Link className={`ml-10 text-lg text-green-900 ${location.pathname === '/' ? `font-bold border-b-2 border-green-900` : ``}`} to="/">Home</Link>
                        <Link className={`ml-10 text-lg text-green-900 ${location.pathname === '/profile' ? `font-bold border-b-2 border-green-900` : ``}`} to="/profile">Profile</Link>
                        <Link className={`ml-10 text-lg text-green-900 ${location.pathname === '/program' ? `font-bold border-b-2 border-green-900` : ``}`} to="/program">Program</Link>
                        <Link className={`ml-10 text-lg text-green-900 ${location.pathname === '/kegiatan' ? `font-bold border-b-2 border-green-900` : ``}`} to="/kegiatan">Kegiatan</Link>                      
                        <div className="relative inline-block text-left">
                            <div>
                                <button type="button" onClick={handleDropDown} className="ml-10 border border-gray-300 bg-white shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-green-900  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                                    Monitoring
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            {handleDrop ? 
                            (<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <Link onClick={handleDropDown} to="/media-larva" className="block block px-4 py-2 text-md text-green-900 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                    <span className="flex flex-col">
                                        <span>
                                            Media Larva
                                        </span>
                                    </span>
                                </Link>
                                <Link onClick={handleDropDown} to="/umur-larva" className="block block px-4 py-2 text-md text-green-900 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                    <span className="flex flex-col">
                                        <span>
                                            Umur Larva
                                        </span>
                                    </span>
                                </Link>
                                <Link onClick={handleDropDown} to="/automasi-spray" className="block block px-4 py-2 text-md text-green-900 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                    <span className="flex flex-col">
                                        <span>
                                            Automasi Spray
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>)
                            : null}
                            
                        </div>

                    </div>
                    <div className="md:hidden">
                        <a href="#" onClick={handleNav}>
                        {navbar ? 
                        (<svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 text-green-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>)
                        :
                        (<svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 text-green-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>)}
                        
                        </a>
                    </div>
                </div>

                <div className="w-screen h-screen fixed bg-green-800 bg-opacity-90 hidden" id={navbar?"OpenNav":""}>
                    <div className="font-sans">
                        <ul className="flex-col w-screen h-screen text-center pt-32 justify-around items-center text-xl tracking-wide text-white">
                            <li onClick={handleNav} className="mr-8 py-3 font-normal hover:underline" >
                            <Link className={`ml-10 text-lg text-white ${location.pathname === '/' ? `font-bold border-b-2 border-white ` : ``}`} to="/">Home</Link>
                            </li>
                            <li onClick={handleDropDown} className="mr-8 py-3 font-normal hover:underline" >
                            <Link className='ml-10 text-lg text-white font-bold' to="/">Monitoring</Link>
                            </li>
                            {handleDrop ? 
                                <div>
                                    <li onClick={handleNav} className="mr-8 py-3 font-normal hover:underline" >
                                    <Link className={`ml-10 text-lg text-yellow-200 ${location.pathname === '/media-larva' ? `font-bold border-b-2 border-white ` : ``}`} to="/media-larva">Media Larva</Link>
                                    </li>
                                    <li onClick={handleNav} className="mr-8 py-3 font-normal hover:underline" >
                                    <Link className={`ml-10 text-lg text-yellow-200 ${location.pathname === '/umur-larva' ? `font-bold border-b-2 border-white ` : ``}`} to="/umur-larva">Umur Larva</Link>
                                    </li> 
                                    <li onClick={handleNav} className="mr-8 py-3 font-normal hover:underline" >
                                    <Link className={`ml-10 text-lg text-yellow-200 ${location.pathname === '/automasi-spray' ? `font-bold border-b-2 border-white ` : ``}`} to="/automasi-spray">Automasi Spray</Link>
                                    </li> 
                                </div>
                             : null}
                            <li onClick={handleNav} className="mr-8 py-3 font-normal hover:underline">
                            <Link className={`ml-10 text-lg text-white ${location.pathname === '/profile' ? `font-bold border-b-2 border-white  ` : ``}`} to="/profile">Profile</Link>
                            </li>
                            <li onClick={handleNav} className="mr-8 py-3 font-normal hover:underline">
                            <Link className={`ml-10 text-lg text-white ${location.pathname === '/program' ? `font-bold border-b-2 border-white  ` : ``}`} to="/program">Program</Link>
                            </li>
                            <li onClick={handleNav} className="mr-8 py-3 font-normal hover:underline">
                            <Link className={`ml-10 text-lg text-white ${location.pathname === '/kegiatan' ? `font-bold border-b-2 border-white ` : ``}`} to="/kegiatan">Kegiatan</Link>
                            </li>
                        </ul>
                    </div>

                </div>

        </nav>
    )
}

export default Navigation
