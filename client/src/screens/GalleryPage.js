import React, { useState } from 'react'
import { Grid } from '@mui/material'
import PhotoCarousel from '../components/gallery/photos/PhotoCarousel';
import VideoCarousel from '../components/gallery/videos/VideoCarousel';

export default function GalleryPage() {


  return (
    <div className='app-body container'>
              <h1 className='header'>Gallery</h1>
              <Grid container spacing={0} sx={{          backgroundColor: 'rgba(68, 78, 90, 0.6)',
}}>
                <Grid item xs={12} sm={12} md={6}>
                  <PhotoCarousel />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <VideoCarousel />
                </Grid>
              </Grid>
    </div>
  )
}
