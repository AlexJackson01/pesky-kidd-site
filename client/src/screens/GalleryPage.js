import React, { useState } from 'react'
import { Grid } from '@mui/material'
import PhotoCarousel from '../components/gallery/PhotoCarousel';

export default function GalleryPage() {


  return (
    <div className='app-body container'>
              <h1 className='header'>Gallery</h1>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12}>
                  <PhotoCarousel />
                </Grid>
              </Grid>
    </div>
  )
}
