import React from 'react'
import SpotifyPlayer from '../components/SpotifyPlayer';
import Releases from '../components/Releases';
import { Grid } from '@mui/material';

export default function MusicPage() {
  return (
    <div className='app-body container'>
        <SpotifyPlayer />
        <Releases />
    </div>
  )
}
