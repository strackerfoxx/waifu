import React from 'react'
import '../styles/waifus.css'

export default function Waifus({setWaifu}) {
  return (
    <section className="slider">
        <img src="https://wallpapercave.com/wp/wp11239441.jpg" alt="waifu" id='img1' onClick={() => setWaifu("Shiki")}/>
        <img src="https://wallpapercave.com/wp/wp11981323.jpg" alt="waifu" id='img2' onClick={() => setWaifu("Nagisa")}/>
        <img src="https://wallpapercave.com/wp/wp12014931.jpg" alt="waifu" id='img3' onClick={() => setWaifu("Missa")}/>
        <img src="https://wallpapercave.com/wp/wp11916761.png" alt="waifu" id='img4' onClick={() => setWaifu("Roxie")}/>
        <img src="https://wallpapercave.com/wp/wp12014984.jpg" alt="waifu" id='img5' onClick={() => setWaifu("Uzaki")}/>
    </section>
  )
}
