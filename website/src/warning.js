import React from 'react'

function Warning({kondisi}) {
  return (
        <div className="shadow-lg rounded-2xl p-4 bg-white  dark:bg-gray-800 w-64 m-auto">
            <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                    <svg width="40" height="40" className={`mt-4 w-12 h-12 m-auto ${kondisi == 1 ? " text-teal-500" : kondisi == 2 ? " text-emerald-500" : kondisi == 3 ? " text-rose-500" : null} `}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4 bg-">
                        {kondisi == 1 ? "Ada Kapal" : kondisi == 2 ? "Kapal Nelayan " : kondisi == 3 ? "Kapal Musuh" : null }
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                    {kondisi == 1 ? "Sistem mendeteksi keberadaan kapal di sekitar perbatasan" : kondisi == 2 ? "Sistem mendeteksi keberadaan Kapal Nelayan milik bapak Eko" : kondisi == 3 ? "Sistem mendeteksi Keberadaan Kapal Asing Melewati perbatasan" : null }
                    </p>
                    <div className="flex items-center justify-between gap-4 w-full mt-8">
                        <a target="_blank" href="https://maps.google.com/?ll=4.3082927,108.202871" type="button" className={`py-2 px-4  ${kondisi == 1 ? "bg-teal-500 " : kondisi == 2 ? "bg-emerald-500 " : kondisi == 3 ? "bg-rose-500 " : null}   text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg `}>
                            Lacak
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Warning