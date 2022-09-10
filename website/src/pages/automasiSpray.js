import React,{useState, useEffect} from 'react'
import {FaSprayCan} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import database from "../firebaseinit"

const AutomasiSpray = () => {

const [data,setData] = useState(false);
const [timeleft, setTimeLeft] = useState()
const [time, setTime] = useState(0);
const [siram , setSiram] = useState(false);
const [update, setUpdate] = useState(false);
const [timeInput, setTimeInput] = useState('00:00');


useEffect(()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=-7.050466286241465&lon=110.440144784476&appid=11da0baf925586118975d7954371b277")
      .then(res => res.json())
      .then(
        (result) => {
            setData(result);
        }
      )
},[]);

useEffect(()=>{
  let onDataChange = database.ref('/Spray').on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      let childKey = childSnapshot.key;
      let childData = childSnapshot.val();
      setTime(childData.Time);
    });
  });
},[database])

const calculateTimeLeft = ()=>{
    let timeleft = {}
    let dday = new Date(time)
    let now = new Date()
    timeleft = {
    days : Math.floor((dday-now)/(1000 * 60 * 60 * 24)),
    hours : Math.floor(((dday-now) / (1000 * 60 * 60)) % 24),
    minutes : Math.floor(((dday-now) / 1000 / 60) % 60),
    seconds : Math.floor(((dday-now) / 1000) % 60),
    }
    return timeleft;
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setTimeLeft(calculateTimeLeft())
    },1000)
  return () => clearTimeout(timer)
  });

  const handleSiram = () =>{
    setSiram(!siram);
    database.ref('/Spray/Value/Turn').set(1);
  }

  const handleUpdate = () =>{
    const date = new Date()
    const now = new Date()
    date.setHours(parseInt(timeInput.slice(0,1) != 0 ?timeInput.slice(0,2) : timeInput.slice(1,2) ))
    date.setMinutes(parseInt(timeInput.slice(3,4) != 0 ?timeInput.slice(3,5) : timeInput.slice(4,5) ))
    if((date.getTime() - now.getTime()) < 0){
      date.setDate(date.getDate()+1);
    }
    database.ref('/Spray/Value/Time').set(date.getTime());
    setTime(date.getTime());
    setUpdate(false)
  }

  const handlePop = () =>{
    setUpdate(!update)
  }


  return (
    <div className='w-10/12 mx-auto pt-20'>

      {/* Weather */}
      {data ? 
        <div className='md:w-8/12 w-full rounded-xl py-2 px-8 mx-auto'>
            <div>
                <div className='flex flex-wrap items-center justify-center'>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} />
                    <div>
                        <h2 className='text-2xl text-green-900 pb-4 text-center'><span className='font-bold'>{data.name}</span>, Jawa Tengah</h2>
                        <p className='text-xl text-green-900'>Suhu Udara <span className='font-bold '>{(data.main.temp - 273.15).toPrecision(3)}°C</span></p>
                        <p className='text-xl text-green-900'>Kelembapan Udara <span className='font-bold '>{data.main.humidity}%</span></p>
                    </div>
                </div>
                
            </div>
        </div>
        :
        null
        }

      {/* Form Input */}
      {update ? 
      <div className='w-full h-full bg-black bg-opacity-25 z-50 fixed top-0 left-0 flex justify-center items-center'>
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                Atur Waktu Penyiraman
            </div>
          <div>
          <form action="#" autoComplete="off">
              <div className="flex flex-wrap justify-center">
              <label className="text-gray-700 w-5/12" for="time">
                <input value={timeInput} onChange={e=>setTimeInput(e.target.value)} type="time" className="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent flex-1"/>
              </label>
              </div>
                      <div className="flex w-full mt-8">
                          <a onClick={handleUpdate} className="py-2 px-4 cursor-pointer bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                              Update
                          </a>
                          <a onClick={handlePop} className="py-2 px-4 cursor-pointer text-green-900 w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg ">
                              Batal
                          </a>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      : null
      }

      {/* Pop Up */}
      {siram ? 
      <div className='fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-30'>
        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-80 m-auto">
            <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                  <div className='flex justify-center items-center mt-8'>
                    <FaSprayCan className='w-3/12 h-auto text-green-900' />
                  </div>
                    <p className="text-gray-600 mt-8 dark:text-gray-100 text-lg font-semibold py-2 px-6">
                        Penyiraman Sedang Dilakukan Sekarang!
                    </p>
                    <div className="flex items-center justify-between gap-4 w-full mt-8">
                        <a onClick={handleSiram} className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Okidoki
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      : null
      }
      

        <h1  className='text-center text-3xl font-bold text-green-900 mt-16'>Penyiraman Dilakukan Dalam</h1>

        {/* Timer */}
      {timeleft ? (
        <div className="md:w-5/12 w-11/12 mx-auto flex md:justify-around justify-center mt-8">
        <div className="flex md:w-32 w-24 m-1 flex-col bg-green-800 p-2 rounded-lg justify-center items-center">
        <p className="md:text-4xl text-3xl font-extrabold text-gray-100" >{timeleft.hours}</p>
          <p className="md:text-2xl text-xl text-gray-200 font-normal">Hours</p>
        </div>
        <div className="flex md:w-32 w-24 m-1 flex-col bg-green-800 p-2 rounded-lg justify-center items-center">
        <p className="md:text-4xl text-3xl font-extrabold text-gray-100" >{timeleft.minutes}</p>
          <p className="md:text-2xl text-xl text-gray-200 font-normal">Minutes</p>
        </div>
        <div className="flex md:w-32 w-24 m-1 flex-col bg-green-800 p-2 rounded-lg justify-center items-center">
        <p className="md:text-4xl text-3xl font-extrabold text-gray-100" >{timeleft.seconds}</p>
          <p className="md:text-2xl text-xl text-gray-200 font-normal">Seconds</p>
        </div>  
      </div>
      ): null}

      {/* Action */}
      <div className='flex flex-wrap md:w-6/12 w-full mx-auto'>
        
        <a onClick={handleSiram} href="#" className="py-2 px-4 md:m-8 mt-8 flex justify-center items-center  bg-sky-500 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            <FaSprayCan />
            <span className='ml-2' >Siram Sekarang</span>
        </a>
        <a onClick={handlePop} href="#" className="py-2 px-4 md:m-8 mt-8 flex justify-center items-center  bg-amber-500 hover:bg-amber-700 focus:ring-amber-500 focus:ring-offset-amber-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            <AiFillSetting />
            <span className='ml-2' >Atur Jadwal</span>
        </a>
      </div>

        
    </div>
  )
}

export default AutomasiSpray;