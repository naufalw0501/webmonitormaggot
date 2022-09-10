import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../assets/icons'

const footer = () => {
    return (
        <div className="w-full mx-auto bg-green-800 mt-32">
            <div className="flex flex-wrap md:w-10/12 w-full px-3 md:px-0 mx-auto justify-around items-start pt-4">
                <div className="md:w-4/12 w-full text-white text-normal p-3">
                    <img src={Logo} className="object-cover w-16" />
                    <h4 className="font-bold mt-4 text-xl">Kegiatan P2MD Universitas Diponegoro X UKM RnB</h4>
                    <address className="mt-3">
                    Jl. Prof. Sudarto No.13, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275
                    </address>
                </div>
                <div className="md:flex-1 w-3/12 text-white flex flex-col p-2 mt-20 md:pl-10 pl-0">
                    <h5 className="mt-1 font-bold text-xl">About Us</h5>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/">Home</Link>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/program">Program</Link>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/kegiatan">Kegiatan</Link>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/galeri">Galeri</Link>
                </div>
                <div className="md:flex-1 w-6/12 text-white flex flex-col p-2 mt-20">
                    <h5 className="mt-1 font-bold text-xl">Syarat &amp; Ketentuan</h5>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/">Surat Kegiatan P2MD</Link>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/program">Surat Persetujuan Mitra</Link>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/kegiatan">Koversi SKS</Link>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/galeri">Jadwal Kegiatan</Link>
                </div>
                <div className="md:flex-1 w-3/12 text-white flex flex-col p-2 mt-20 md:pl-10 pl-0">
                    <h5 className="mt-1 font-bold text-xl">Kontak Kami</h5>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/">Instagram</Link>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/program">Youtube</Link>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/kegiatan">Facebook</Link>
                </div>
            </div>
            <p className="text-center mt-8 text-white text-sm">©P2MD UNDIP x UKM RnB 2021</p>
        </div>
    )
}

export default footer
