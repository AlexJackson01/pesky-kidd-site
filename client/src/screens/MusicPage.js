import React from 'react'
import SpotifyPlayer from '../components/SpotifyPlayer'
import Releases from '../components/Releases'
import { Grid } from '@mui/material'

export default function MusicPage () {
  return (
    <div className='app-body container'>
      <h1 className='header'>Releases</h1>
      <Grid container spacing={8}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <SpotifyPlayer />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Releases />
        </Grid>
      </Grid>
    </div>
  )
}
