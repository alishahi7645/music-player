import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import '../scss/_player.scss'
function Player({ coruntSongs, setIsPlaying, isPlaying , songs , setcoruntSongs,setsong}) {

    useEffect(()=>{
        const newSong = songs.map((item)=>{
            if(item.id === coruntSongs.id){
                return{
                    ...item,
                    active:true
                }
            }else{
                return{
                    ...item,
                    active:false
                }
            }
        })
        setsong(newSong)
    },[coruntSongs])

    const audioref = useRef(null);

    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationpercentage:0,
    })

    const timeHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        const roundduration = Math.round(duration);
        const roundcurrent = Math.round(currentTime);
        const animationpercentage = Math.round((roundcurrent / roundduration) *100)
        if(currentTime === duration){
            const currentIndex = songs.findIndex((item) => item.id === coruntSongs.id);
            if(currentIndex === (songs.length-1)){
                setcoruntSongs(songs[0])
            }else{
                setcoruntSongs(songs[currentIndex + 1])
            }
            playSong()
        }
        setSongInfo({ ...songInfo, currentTime: currentTime, duration: duration, animationpercentage:animationpercentage})

    }

    const timeFormat = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time %  60)).slice(-2)
        )
    }

    const playSong = () => {
        if (isPlaying) {
            audioref.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioref.current.play();
            setIsPlaying(!isPlaying)
        }
    }

    const dragHandler =(e)=>{
        audioref.current.currentTime = e.target.value;
        setSongInfo({...songInfo , currentTime :e.target.value})
    }

    const skipsong = (dir) => {
        const currentIndex = songs.findIndex((item) => item.id === coruntSongs.id);
        if(dir === "next"){
            if(currentIndex === (songs.length-1)){
                setcoruntSongs(songs[0])
            }else{
                setcoruntSongs(songs[currentIndex + 1])
            }
        }
        if(dir === "back"){
            if(currentIndex === 0){
                setcoruntSongs(songs[(songs.length -1)])
            }else{
                setcoruntSongs(songs[currentIndex - 1])
            }
        }
    }
    const trackanimation ={
        transform : `translateX(${songInfo.animationpercentage}%)`
    }

    return (
        <div className='player'>
            <div className='time-control'>
                <p>{timeFormat(songInfo.currentTime)}</p>
                <div className='track' style={{background:`linear-gradient(to right, ${coruntSongs.color[0]}, ${coruntSongs.color[1]})`}}>
                    <input onChange={dragHandler} type='range' value={songInfo.currentTime || 0} min={0} max={songInfo.duration} />
                    <div style={trackanimation} className='animate-track'></div>
                </div>
                <p>{timeFormat(songInfo.duration)}</p>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon onClick={()=> skipsong("back")} className='skip-back' size='2x' icon={faAngleLeft} />
                {isPlaying ? <FontAwesomeIcon onClick={playSong} className='play' size='2x' icon={faPause} /> : <FontAwesomeIcon onClick={playSong} className='play' size='2x' icon={faPlay} />}
                <FontAwesomeIcon onClick={()=> skipsong("next")} className='skip-forword' size='2x' icon={faAngleRight} />
            </div>
            <audio onLoadedMetadata={timeHandler} onTimeUpdate={timeHandler} ref={audioref} src={coruntSongs.audio}></audio>
        </div>
    )
}

export default Player
