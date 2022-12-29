import React, { useState } from 'react'
import CR from "../assets/images/CR.jpg"
import OH from "../assets/images/OH.jpg";

export default function Releases() {

    const [music, setMusic] = useState([
        {name: "Civilian Rebellion", image: CR, url: "https://open.spotify.com/track/7F2AXr4pjVkryEVR9UbSKj?si=7d408f7f55bc43ee"},
        {name: "Open Heart", image: OH, url: "https://open.spotify.com/album/5Uau7xKpTO5DmxId7pBnxk?si=YJ0LsM74TEK5AzNFlI8xPQ"}
    ])

  return (
    <div>
                    <h2 className='releases-header'>Listen on Spotify</h2>
        <div className='releases-section'>

        {music.map((record) => (
            <div>
                <a href={record.url} target="_blank"><img src={record.image} className="music-cover" alt="Record cover" /></a>
                <h2 className='record-name'>{record.name}</h2>
            </div>
        ))}
        </div>
        </div>
  )
}
