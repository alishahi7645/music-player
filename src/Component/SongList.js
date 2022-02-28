import React from 'react'
import SongItem from './SongItem'

function SongList({songs,setcoruntSongs,setsong ,displaysong}) {
    return (
        <div className={ displaysong ? 'displaysong' : 'song-list'}>
            <h2>Songs of List</h2>
            <div className='song-list-item'>
                {songs.map( song => (
                    <SongItem song={song} key={song.id} setcoruntSongs={setcoruntSongs} songs={songs} setsong={setsong}/>
                ))}
            </div>
        </div>
    )
}

export default SongList;