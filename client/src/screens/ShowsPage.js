import React, { useState } from 'react'
import Upcoming from '../components/shows/Upcoming'
import Recent from '../components/shows/Recent'
import { Grid } from '@mui/material'
import { Fade } from 'react-reveal'

export default function ShowsPage () {

  return (
    <div className='app-body container'>
      <h2 className='header'>Upcoming Shows</h2>

      <Fade bottom>
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              paddingBottom: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Upcoming />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              paddingBottom: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Recent />
          </Grid>
        </Grid>
      </Fade>
    </div>
  )
}
