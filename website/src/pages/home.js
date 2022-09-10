import React from "react";
import { Link } from "react-router-dom";
import { Kampus, Rnb, Undip, Semarang } from "../assets/icons";
import { Heroimage, BSF, Larva, Hero2, Biopond1, Biopond2, Kandang1, Kandang3, Pakan, Panen, Kandang2 } from "../assets/images";

function home() {
  return (
    <div className="pt-32">

      {/* Header Desktop */}
      <div className="md:w-10/12 md:flex-row flex-col w-11/12 mx-auto md:flex justify-center items-center hidden">
        <div className="flex-1 md:order-1 order-2">
          <h1 className="text-5xl font-black text-green-900 tracking-wide ">
            P2MD UNIVERSITAS DIPONEGORO
          </h1>
          <h2 className="text-xl mt-8 text-green-900 tracking-wide ">
            Mari Bergabung Bersama Kami Untuk Mengabdikan Diri Kepada Masyarakat
            Sekitar Desa Jabungan
          </h2>
          <div className="mt-11">
            <Link
              className="bg-green-800 px-8 py-2 text-xl text-white"
              to="/program"
            >
              Lihat Program
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:order-2 order-1">
          <img src={Heroimage} className="object-cover w-2/3" />
        </div>
      </div>

      {/* Header Small */}
      <div  style={{backgroundImage: `url(${Hero2})`, backgroundPosition:'center',backgroundAttachment:'fixed'}} className="md:hidden block">
                <div className="container pt-36 pb-36 s:w-screen w-4/5 mx-auto flex justify-center"  >
                    <div className="flex-1 ">
                        <h1 style={{textShadow: '1.5px 1.5px 0 rgba(10,10,10,.5)'}} className="text-5xl font-black text-white tracking-wide ">
                          <span className="text-green-900">P2MD</span> UNIVERSITAS DIPONEGORO
                        </h1>
                        <h2 style={{textShadow: '1.5px 1.5px 0 rgba(10,10,10,.5)'}} className="text-xl mt-8 text-white tracking-wide ">
                          Mari Bergabung Bersama Kami Untuk Mengabdikan Diri Kepada Masyarakat
                          Sekitar Desa Jabungan
                        </h2>
                        <div className="mt-11">
                        <Link
                          className="bg-white font-bold px-8 py-2 text-xl text-green-900"
                          to="/program"
                        >
                          Lihat Program
                        </Link>
                      </div>
                    </div>

                </div>
           </div>

      {/* Pencerdasan 1 */}
      <div className="md:w-10/12 w-11/12 md:flex-row flex-col mt-32 mx-auto flex justify-center items-center">
        <div className="flex-1 flex justify-center">
          <img src={BSF} className="object-cover md:w-1/2 w-8/12" />
        </div>
        <div className="flex-1 md:mt-0 mt-11">
          <h2 className="text-4xl font-black text-green-900 tracking-wide ">
            Black Soldier Fly
          </h2>
          <h3 className="italic text-3xl mt-2 text-green-900 tracking-wide ">
            Hermetia illucens
          </h3>
          <p className="text-lg text-green-900 tracking-wide mt-8">
            Black Soldier Fly (BSF) merupakan jenis lalat yang berukuran 3 kali
            lalat biasa. Selain berguna untuk mengurangi dampak negatif dari
            penumpukan material organik di alam, larva BSF juga sangat baik dan
            ekonomis untuk dimanfaatkan sebagai pakan hewan hias dan ternak
          </p>
        </div>
      </div>

      {/* Pencerdasan 2 */}
      <div className="md:w-10/12 w-11/12 md:flex-row flex-col mt-32 mx-auto flex justify-center items-center">
        <div className="flex-1 md:order-2 flex justify-center">
          <img src={Larva} className="object-cover md:w-1/2 w-8/12" />
        </div>
        <div className="flex-1 md:order-1 md:mt-0 mt-11">
          <h2 className="text-4xl font-black text-green-900 tracking-wide ">
            Fase Larva
          </h2>
          <p className="text-lg text-green-900 tracking-wide mt-8">
            Black Soldier Fly (BSF) merupakan jenis lalat yang berukuran 3 kali
            lalat biasa. Selain berguna untuk mengurangi dampak negatif dari
            penumpukan material organik di alam, larva BSF juga sangat baik dan
            ekonomis untuk dimanfaatkan sebagai pakan hewan hias dan ternak
          </p>
        </div>
      </div>

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
      
      {/* Lokasi Pelaksanaan */}
      <h3 className="text-center text-3xl font-black text-green-900 mt-32 uppercase">
        Lokasi Pelaksanaan
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

        {/* Support By */}
        <h3 className="text-center text-3xl font-black text-green-900 mt-32 uppercase">
            Support By
        </h3>
        <div className="w-10/12 mx-auto flex justify-around items-center mt-8 flex-wrap">
            <img src={Undip} className="w-32 mr-4 mt-8 object-contain"/>
            <img src={Rnb} className="w-32 mr-4 mt-8 object-contain"/>
            <img src={Kampus} className="w-52 mr-4 mt-8 object-contain"/>
            <img src={Semarang} className="w-32 mr-4 mt-8 object-contain"/>
        </div>

        

    </div>
  );
}

export default home;
