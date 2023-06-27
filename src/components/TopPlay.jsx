import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazam';

import 'swiper/css';
import 'swiper/css/free-mode';
import { TopCharts } from '../pages';


const TopChartCard = ({song, i}) =>(<div className='w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2'>
    
    {song?.title}
  </div>)

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  // const words =data.tracks?data.tracks:['dddd','dddd','dddd','dddd','dddd','dddd','dddd',];
  // // console.log(data.tracks);

  // const topPlays =  words.slice(0,2).map((words, i) => {
  //   return;
  // });
//   let topPlays;
// useEffect(() => {
//    topPlays= data.tracks.slice(0,5);
// console.log(topPlays);

// }, [])
// console.log(Object.values(data.tracks).slice(0,5));

// const topPlays = Object.values(data.tracks).slice(0,5)

// const topPlays = data.tracks.slice(0,5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    
    <div  ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
      <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl"></h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer"></p>
          </Link>
        </div>

        <div className='mt-4 flex flex-col gap-1'>
          {/* {topPlays?.map((song,i) =>(
            <TopChartCard
            song={song}
            i={i}
            />
          ))} */}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">

      <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl"></h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer"></p>
          </Link>
        </div>

        <Swiper
         slidesPerView="auto"
         spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4">
          
          {/* {topPlays?.slice(0, 5).map((artist) => (
              <SwiperSlide
              key={artist?.key}
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img src={artist?.images?.background} alt="Name" className="rounded-full w-full object-cover" />
              </Link>
            </SwiperSlide>

          ))} */}
        </Swiper>
      </div>
    </div>
  );

};

export default TopPlay;
