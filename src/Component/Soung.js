import React from 'react'
import '../scss/_song.scss'
function Soung({coruntSongs}) {
    return (
        <div className='soung-container'>
            <img src={coruntSongs.cover}/>
            <h2>{coruntSongs.name}</h2>
            <h3>{coruntSongs.artist}</h3>
        </div>
    )
}

export default Soung
