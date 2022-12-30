import React from 'react'
import Band from "../assets/images/band-bw.jpg";
import Blurb from '../components/about/Blurb';
import { Grid } from '@mui/material';

export default function AboutPage() {
  return (
    <div className='app-body container'>
                    <h1 className='header'>About</h1>
                    <Grid container spacing={0}>
                      <Grid item sm={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src={Band} alt="Image of Pesky Kidd" />
                      </Grid>
                      <Grid item sm={6}>
                        <Blurb />
                      </Grid>
                    </Grid>


    </div>
  )
}
