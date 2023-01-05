import React from 'react'
import Upcoming from "../components/shows/Upcoming"
import Recent from '../components/shows/Recent'
import { Grid } from '@mui/material'

export default function ShowsPage () {
  return (
    <div className='app-body container'>
      <Grid container spacing={0}>
        <Grid item sm={12} md={12} sx={{paddingBottom: 10}}>
          <h1 className='header'>Upcoming Shows</h1>
          <Upcoming />
        </Grid>
        {/* <Grid item sm={12}>
          <h1 className='header'>Recent Shows</h1>
          <Recent />
        </Grid> */}
      </Grid>
    </div>
  )
}
