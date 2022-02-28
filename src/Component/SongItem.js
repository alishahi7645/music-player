import React from 'react'

function SongItem({song,setcoruntSongs,songs,setsong}) {
    const selectsong = ()=>{
        const songslect = songs.filter((item) => item.id === song.id)
        setcoruntSongs(songslect[0]);

        const newSong = songs.map((item)=>{
            if(item.id === song.id){
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
    }
    return (
        <div className={`song-item ` ,song.active ? "selected" : ""} onClick={selectsong} >
            <img src={song.cover} />
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
    )
}

export default SongItem;
