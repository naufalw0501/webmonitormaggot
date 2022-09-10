import React from 'react'

function Media({name, suhu, kelembapan}) {
  return (
    <div className='md:w-5/12 w-full px-16 py-6 mt-8 rounded-xl -lg bg-white '>
        <h2 className='text-lg text-green-900 font-bold'>{name}</h2>

        <div className='flex flex-wrap mt-4'>
            
            <div>
                <div className="bg-white rounded-lg w-72 block p-4 m-auto">
                    <div>
                        <span className="text-xs inline-block py-1 px-4 uppercase font-semibold rounded-full text-amber-800 bg-amber-200">
                            Suhu
                        </span>
                    </div>
                    <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                        <div style={{width: `${suhu}%`}} className="h-full text-center text-xs text-white bg-amber-400 rounded-full">
                            {suhu} °C 
                        </div>
                    </div>
                </div>
            </div>

            
            <div>
                <div className="bg-white rounded-lg w-72 block p-4 m-auto">
                    <div>
                        <span className="text-xs inline-block py-1 px-4 font-semibold uppercase rounded-full text-teal-800 bg-teal-200">
                            Kelembaban
                        </span>
                    </div>
                    <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                        <div style={{width: `${kelembapan}%`}} className="h-full text-center text-xs text-white bg-teal-400 rounded-full">
                            {kelembapan} %
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>

  )
}

export default Media