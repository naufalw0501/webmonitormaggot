import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {MdCloudDone, MdDangerous} from 'react-icons/md'
import database from "../firebaseinit"
import {Link} from 'react-router-dom'

function Scanning() {
    const [auth,setAuth] = useState(false);

    let {mediaid} = useParams();


    useEffect(() => {
        let date = new Date();
        let time = date.getTime();
      if(mediaid){
        if(mediaid.slice(2) === "p2mdrnbundipjaya"){
            database.ref(`/Scanning/Media/${mediaid.slice(1,2)}`).set(time);
            setAuth(true)
        }
        else{
            setAuth(null)
        }
      }
    }, [])
    
  return (
    <div className='pt-96'>
        {auth === true ? 
        <div className='fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-30'>
          <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-80 m-auto">
              <div className="w-full h-full text-center">
                  <div className="flex h-full flex-col justify-between">
                    <div className='flex justify-center items-center mt-8'>
                      <MdCloudDone className='w-3/12 h-auto text-green-900' />
                    </div>
                      <p className="text-gray-600 mt-8 dark:text-gray-100 text-lg font-semibold py-2 px-6">
                          Berhasil Melakukan Reset pada Media Larva {mediaid.slice(1,2)}
                      </p>
                      <div className="flex items-center justify-between gap-4 w-full mt-8">
                          <Link to="/umur-larva" className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                              Lihat Sekarang
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        :
        auth == null ?
        <div className='fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-30'>
          <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-80 m-auto">
              <div className="w-full h-full text-center">
                  <div className="flex h-full flex-col justify-between">
                    <div className='flex justify-center items-center mt-8'>
                      <MdDangerous className='w-3/12 h-auto text-rose-900' />
                    </div>
                      <p className="text-gray-600 mt-8 dark:text-gray-100 text-lg font-semibold py-2 px-6">
                          Kode Yang Dimasukan Salah!
                      </p>
                      <div className="flex items-center justify-between gap-4 w-full mt-8">
                          <Link to="/" className="py-2 px-4  bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                              Kembali
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        :null}
    </div>
  )
}

export default Scanning