import React from 'react'
import Spotify from 'react-spotify-embed'

export default function SpotifyPlayer () {
  return (
    <div className='player-div'>
      <Spotify className="spotify-player" link='https://open.spotify.com/artist/6GU3Fg2x5wvm0PIHryh3Sf?si=Zs4bQaLIRjGIbfsCa3CNFQ' />
    </div>
  )
}
