import {v4 as uuidv4}from 'uuid'
export default function musicData(){
    return[
        {
            name: "Santiago",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/1abf44fbb1364ca8435a8bbf4c5750a80947128f-1024x1024.jpg",
            artist: "Psalm Trees, Moods",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=30202",
            color:["#FDE5BC","#7A8993"],
            id: uuidv4(),
            active:true
        },
        {
            name: "Letters",
            cover: "https://chillhop.com/wp-content/uploads/2021/12/754c5a4edf9d3bb338dfe89062760f22b7aaec70-1024x1024.jpg",
            artist: "Oh Caroline, Lhasa Petik, Towerz",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=30131",
            color:["#DD7962","#76434B"],
            id: uuidv4(),
            active:false
        },
        {
            name: "la zona",
            cover: "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
            artist: "Maydee",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=27455",
            color:["#6C412E","#918368"],
            id: uuidv4(),
            active:false
        },
        {
            name: "Snaring River",
            cover: "https://i.scdn.co/image/ab67616d0000b273ed624e07e45841dc5680ed05",
            artist: "Moods",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=27455",
            color:["#6C412E","#918368"],
            id: uuidv4(),
            active:false
        },
    ]
}
