import React from 'react'
import SpotifyPlayer from '../components/releases/Spotify'
import Releases from '../components/releases/Releases'
import { Grid } from '@mui/material'
import { Fade } from 'react-reveal'

export default function MusicPage ({ setRecord, record }) {
  return (
    <div className='app-body container'>
      <h1 className='header'>Releases</h1>
      <Fade bottom>
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
          <Releases record={record} />
        </Grid>
      </Grid>
      </Fade>
    </div>
  )
}
