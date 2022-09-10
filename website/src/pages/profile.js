import React from 'react'
import {Profile} from "../assets/images"

function profile() {
    return (
        <div className="pt-32">
            
            {/* Profile Jabungan */}
            <div className="md:w-10/12 mx-auto w-11/12">
                <div className="flex md:flex-row flex-col justify-center items-center">
                    <div className="flex-1 flex justify-center">
                        <img src={Profile} />
                    </div>
                    <div className="flex-1 ml-8">
                        <h1 className="text-5xl font-black text-green-900 tracking-wide ">Desa Jabungan</h1>
                        <p className="text-xl mt-8 text-green-900 tracking-wide ">Jabungan merupakan sebuah kelurahan di Kecamatan Banyumanik, Kota Semarang, provinsi Jawa Tengah, Indonesia.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheet.</p>
                    </div>
                </div>
            </div>

            {/* Instagram Post */}
            <h2 className="text-center text-3xl font-black text-green-900 mt-32 uppercase">Postingan Kami</h2>
            <div className="md:w-10/12 mx-auto mt-8 flex md:flex-row flex-col justify-around">
                <iframe className="md:w-3/12 w-8/12 md:mt-0 mt-8 mx-auto filter shadow-lg rounded-xl" height="510" src="https://www.instagram.com/p/CWIpsp-p0n_/embed" frameborder="0"></iframe>
                <iframe className="md:w-3/12 w-8/12 md:mt-0 mt-8 mx-auto filter shadow-lg rounded-xl" height="510" src="https://www.instagram.com/p/CVm2CSZpNvt/embed" frameborder="0"></iframe>
                <iframe className="md:w-3/12 w-8/12 md:mt-0 mt-8 mx-auto filter shadow-lg rounded-xl" height="510" src="https://www.instagram.com/p/CVUTIV8JHK0/embed" frameborder="0"></iframe>
            </div>

            {/* Lokasi Pelaksanaan */}
            <h3 className="text-center text-3xl font-black text-green-900 mt-32 uppercase">
                Lokasi Desa Jabungan
            </h3>
            <div className="md:w-8/12 w-11/12 mx-auto">
                <div>
                <iframe
                    className="mt-8 rounded-xl filter drop-shadow-md"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jabungan,%20Banyumanik,%20Semarang%20City,%20Central%20Java%2050266+(Lokasi%20P2MD)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                </iframe>
                </div>
            </div>
        </div>
    )
}

export default profile
