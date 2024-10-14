import React, { useRef, useState } from 'react';
import { useSelector } from "react-redux";
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({moviesId}) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  
  useMovieTrailer(moviesId);

  const iframeRef = useRef(null);

  // Play/Pause Video using YouTube Player API
  const handlePlayPause = () => {
    const iframe = iframeRef.current;
    const player = iframe.contentWindow;
    
    if (isPlaying) {
      player.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } else {
      player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
    setIsPlaying(!isPlaying);
  };

  // Mute/Unmute Video using YouTube Player API
  const handleMuteUnmute = () => {
    const iframe = iframeRef.current;
    const player = iframe.contentWindow;

    if (isMuted) {
      player.postMessage('{"event":"command","func":"unMute","args":""}', '*');
    } else {
      player.postMessage('{"event":"command","func":"mute","args":""}', '*');
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className='w-screen'>
      {/* Video */}
      <iframe
        ref={iframeRef}
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?enablejsapi=1&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Controls */}
      <div className='flex space-x-4 absolute bottom-0 left-0 pb-72 px-24 justify-between w-full'>
        <div className='flex gap-6 w-full'>
          {/* Play/Pause Button */}
          <button className='bg-white hover:bg-opacity-90 transition-all px-8 py-4 text-black text-xl font-semibold rounded-md shadow-lg flex items-center'
            onClick={handlePlayPause}>
            {isPlaying ? <span>❚❚ Pause</span> : <span>▶️ Play</span>}
          </button>

          {/* More Info Button */}
          <button className='bg-black transition-all px-8 py-4 text-white text-xl font-semibold rounded-md shadow-lg bg-opacity-70 hover:bg-opacity-40'>
            More Info
          </button>
        </div>

        {/* Mute/Unmute Button */}
        <div className='pl-96'>
          <button
            className='bg-black transition-all px-8 py-4 text-white text-xl font-semibold rounded-md shadow-lg bg-opacity-70 hover:bg-opacity-40'
            onClick={handleMuteUnmute}
          >
            {isMuted ? <span>Unmute</span> : <span>Mute</span>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoBackground;
