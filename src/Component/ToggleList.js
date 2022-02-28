import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
function ToggleList({displaysong,setdisplaysong}) {
    return (
        <nav>
            <h2 id='app-title'>waves</h2>
            <button  onClick={()=> setdisplaysong(!displaysong)}>
                <span id='songlist-span'>song list</span>
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default ToggleList;
