import React from 'react'
// import Spotify from 'react-spotify-embed'
import SpotifyPlayer from 'react-spotify-player'

export default function Spotify () {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: '95%',
    height: 750
  }
  const view = 'list' // or 'coverart'
  const theme = '0' // or 'white'

  return (
    <div className='player-div' data-cy='spotify-player'>
      <SpotifyPlayer
        uri='spotify:artist:6GU3Fg2x5wvm0PIHryh3Sf'
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  )
}
