import React, { useState } from 'react'
import PhotoAlbums from '../components/gallery/photos/PhotoAlbums';
import VideoAlbums from '../components/gallery/videos/VideoAlbums';
import { Grid } from '@mui/material'

export default function GalleryPage() {


  return (
    <div className='app-body container'>
              <h1 className='header'>Gallery</h1>
        <Grid container spacing={2}>
            <Grid item sm={12} md={12} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <PhotoAlbums />
            </Grid>
            <Grid item sm={12} md={12} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <VideoAlbums />
            </Grid>
        </Grid>
    </div>
  )
}
