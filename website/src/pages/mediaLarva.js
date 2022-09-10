import React,{useState, useEffect} from 'react';
import database from "../firebaseinit";
import {Media} from '../components'

function MediaLarva() {

    const [media, setMedia] = useState(false);

    useEffect(()=>{
      let onDataChange = database.ref('/Monitoring').on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          let childKey = childSnapshot.key;
          let childData = childSnapshot.val();
          setMedia(childData);
        });
      });
    },[database])

  return (
    <div className='w-10/12 mx-auto pt-20'>
        <h1 className='text-center text-3xl font-bold text-green-900 mb-16'>Monitoring Suhu dan Kelembaban</h1>

        {media != false ?
        <div className='flex flex-wrap justify-around'>
        <Media name="Media Larva 1" suhu={media.Media[1].Suhu} kelembapan={media.Media[1].Kelembapan} />
        <Media name="Media Larva 2" suhu={media.Media[2].Suhu} kelembapan={media.Media[2].Kelembapan} />
        <Media name="Udara Ruangan" suhu={media.Ruangan.Suhu} kelembapan={media.Ruangan.Kelembapan} />
        </div>
        : null}    

    </div>
  )
}

export default MediaLarva