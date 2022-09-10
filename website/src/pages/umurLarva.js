import React, {useState, useEffect} from 'react'
import database from "../firebaseinit"

function UmurLarva() {
    const [scan, setScan] = useState(false);

    useEffect(()=>{
      let onDataChange = database.ref('/Scanning').on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          let childKey = childSnapshot.key;
          let childData = childSnapshot.val();
          let dateNow = Date.now();
          let date1 = new Date(childData[0]);
          let date2 = new Date(childData[1]);
          let timeleft1 = {
            days : Math.floor((dateNow-date1)/(1000 * 60 * 60 * 24)),
            hours : Math.floor(((dateNow-date1) / (1000 * 60 * 60)) % 24),
        }
        let timeleft2 = {
            days : Math.floor((dateNow-date2)/(1000 * 60 * 60 * 24)),
            hours : Math.floor(((dateNow-date2) / (1000 * 60 * 60)) % 24),
        }
          setScan({timeleft1,timeleft2});
        });
      });
    },[database])
  return (
    <div className='w-10/12 mx-auto pt-20'>
        <h1  className='text-center text-3xl font-bold text-green-900 mb-16'>Umur Larva</h1>

        { scan ? 
            <div className='flex flex-wrap justify-around'>

            <div className="shadow-lg rounded-2xl md:w-3/12 w-full p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center">
                    <span className="bg-teal-500 p-2 h-6 w-6 rounded-full relative">
                        <svg width="60" fill="currentColor" height="60" className="text-white h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <p className="text-md text-gray-700 dark:text-gray-50 ml-2 font-semibold">
                        Media Larva 1
                    </p>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
                        {scan.timeleft1.days}D {scan.timeleft1.hours}H
                    </p>
                    <div className="relative w-full h-2 bg-gray-200 rounded">
                        <div className="absolute top-0 h-2  left-0 rounded bg-teal-500 w-2/3">
                        </div>
                    </div>
                </div>
                <div>
                    <a href="#" className='w-full bg-teal-500 hover:bg-teal-800 block mt-6 rounded-lg py-1 font-semibold text-white text-center text-lg'>Reset</a>
                </div>
            </div>

            <div className="shadow-lg rounded-2xl md:w-3/12 w-full md:mt-0 mt-8 p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center">
                    <span className="bg-amber-500 p-2 h-6 w-6 rounded-full relative">
                        <svg width="60" fill="currentColor" height="60" className="text-white h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <p className="text-md text-gray-700 dark:text-gray-50 ml-2 font-semibold">
                        Media Larva 2
                    </p>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
                    {scan.timeleft2.days}D {scan.timeleft2.hours}H
                    </p>
                    <div className="relative w-full h-2 bg-gray-200 rounded">
                        <div className="absolute top-0 h-2  left-0 rounded bg-amber-500 w-2/3">
                        </div>
                    </div>
                </div>
                <div>
                    <a href="#" className='w-full bg-amber-500 hover:bg-amber-800 block mt-6 rounded-lg py-1 font-semibold text-white text-center text-lg'>Reset</a>
                </div>
            </div>


        </div>
        : null}
        
    </div>
  )
}

export default UmurLarva