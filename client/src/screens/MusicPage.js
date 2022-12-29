import React from 'react'
import SpotifyPlayer from '../components/SpotifyPlayer';
import Releases from '../components/Releases';

export default function MusicPage() {
  return (
    <div className='app-body container'>
        <SpotifyPlayer />
        <Releases />
    </div>
  )
}
