import React from 'react'
import {Picture1, Picture2,Picture3,Picture4,Picture5,Picture6,Picture7,Picture8,Picture9} from "../assets/images"

function kegiatan() {
    return (
        <div className="pt-32">

            {/* Gallery */}
            <h2 className="text-center text-4xl font-black text-green-900 uppercase">Kegiatan Kami</h2>
            <div className="md:w-10/12 mt-8 w-11/12 mx-auto">
                <div className="grid grid-cols-3 gap-1">
                    <div className="w-full h-64 col-span-2"><img src={Picture1} className="object-cover w-full h-full" /></div>
                    <div className="w-full h-64 "><img src={Picture4} className="object-cover w-full h-full" /></div>
                    <div className="w-full h-64 "><img src={Picture3} className="object-cover w-full h-full" /></div>
                    <div className="w-full h-64 col-span-2"><img src={Picture2} className="object-cover w-full h-full" /></div>
                    <div className="w-full h-64 "><img src={Picture8} className="object-cover w-full h-full" /></div>
                    <div className="w-full h-64 "><img src={Picture7} className="object-cover w-full h-full" /></div>
                    <div className="w-full h-64 "><img src={Picture5} className="object-cover w-full h-full" /></div>
                    <div className="w-full h-64 "><img src={Picture6} className="object-cover w-full h-full" /></div>
                    
                    
                </div>
            </div>

        </div>
    )
}

export default kegiatan
