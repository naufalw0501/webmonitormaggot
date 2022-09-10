import React from 'react'
import { Link } from 'react-router-dom';
import { Heroimage, BSF, Larva, Hero2, Biopond1, Biopond2, Kandang1, Kandang3, Pakan, Panen, Kandang2 } from "../assets/images";

function program() {
    return (
        <div className="pt-32">

            {/* Programs */}
            <div className="md:w-10/12 w-11/12 mx-auto md:flex mt-32">
                <div className="md:w-4/12 ">
                <h3 className="text-left text-5xl font-black text-green-900 mt-32 uppercase">
                        Program Kami
                </h3>
                <Link
                    className="bg-green-800 px-8 py-2 text-xl text-white inline-block mt-16"
                    to="/kegiatan"
                    >
                    Lihat Lainnya
                </Link>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-1 md:mt-0 mt-16">
                        <div className="relative flex justify-center items-center text-xl w-full h-52 bg-cover produkImage"  style={{backgroundImage: `url(${Biopond1})`}}><p className="m-8 font-medium text-white" style={{textShadow: '2px 2px rgba(0,0,0,.3)'}}></p></div>
                        <div className="relative flex justify-center items-center text-xl col-span-2 bg-cover h-52 produkImage"  style={{backgroundImage: `url(${Kandang3})`}}><p className="m-8 font-medium text-white" style={{textShadow: '2px 2px rgba(0,0,0,.3)'}}>Pembuatan biopond</p></div>
                        <div className="relative flex justify-center items-center text-xl col-span-2 w-full h-52 bg-cover produkImage"  style={{backgroundImage: `url(${Pakan})`}}><p className="m-8 font-medium text-white" style={{textShadow: '2px 2px rgba(0,0,0,.3)'}}>Pemberian Pakan</p></div>
                        <div className="relative flex justify-center items-center text-xl  w-full h-52 bg-cover produkImage"  style={{backgroundImage: `url(${Panen})`}}><p className="m-8 font-medium text-white" style={{textShadow: '2px 2px rgba(0,0,0,.3)'}}>Pemanenan Telur</p></div>
                        <div className="relative flex justify-center items-center text-xl  w-full h-52 bg-cover produkImage"  style={{backgroundImage: `url(${Biopond2})`}}><p className="m-8 font-medium text-white" style={{textShadow: '2px 2px rgba(0,0,0,.3)'}}></p></div>
                        <div className="relative flex justify-center items-center text-xl col-span-2 w-full h-52 bg-cover produkImage"  style={{backgroundImage: `url(${Kandang1})`}}><p className="m-8 font-medium text-white" style={{textShadow: '2px 2px rgba(0,0,0,.3)'}}>Pembuatan Kandang</p></div>
                        <div className="relative flex justify-center items-center text-xl col-span-2 bg-cover h-52 produkImage"  style={{backgroundImage: `url(${Kandang2})`}}><p className="m-8 font-medium text-white" style={{textShadow: '2px 2px rgba(0,0,0,.3)'}}></p></div>
                </div>  
            </div>

           {/* Instagram Post */}
           <h2 className="text-center text-3xl font-black text-green-900 mt-32 uppercase">Postingan Kami</h2>
            <div className="md:w-10/12 mx-auto mt-8 flex md:flex-row flex-col justify-around">
                <iframe className="md:w-3/12 w-8/12 md:mt-0 mt-8 mx-auto filter shadow-lg rounded-xl" height="510" src="https://www.instagram.com/p/CVSd4DjJh-M/embed" frameborder="0"></iframe>
                <iframe className="md:w-3/12 w-8/12 md:mt-0 mt-8 mx-auto filter shadow-lg rounded-xl" height="510" src="https://www.instagram.com/p/CVkjft5JEv0/embed" frameborder="0"></iframe>
                <iframe className="md:w-3/12 w-8/12 md:mt-0 mt-8 mx-auto filter shadow-lg rounded-xl" height="510" src="https://www.instagram.com/p/CWKD226huqn/embed" frameborder="0"></iframe>
            </div> 

        </div>
    )
}

export default program
