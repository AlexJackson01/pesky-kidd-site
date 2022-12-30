import React from 'react'
import BandPic from '../assets/images/band-bw.jpg'
import Blurb from '../components/about/Blurb'
import Band from '../components/about/Band'
import { Grid } from '@mui/material'

export default function AboutPage () {
  return (
    <div className='app-body container'>
      <h1 className='header'>About</h1>
      <Grid
        container
        spacing={0}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Grid item sm={12}>
          <Blurb />{' '}
        </Grid>
        <Grid item sm={12}>
          <Band />
        </Grid>
      </Grid>
    </div>
  )
}
