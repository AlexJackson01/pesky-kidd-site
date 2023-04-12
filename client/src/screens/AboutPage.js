import React from 'react'
import Blurb from '../components/about/Blurb'
import { Grid } from '@mui/material'
import { Fade } from 'react-reveal'

export default function AboutPage () {
  return (
    <div className='app-body container'>
      <h2 className='header'>About</h2>
      <Fade bottom>
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
            <Blurb />
          </Grid>
          {/* <Grid item sm={12}>
          <Band />
        </Grid> */}
        </Grid>
      </Fade>
    </div>
  )
}
