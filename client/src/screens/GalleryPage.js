import React from 'react'
import PhotoGallery from "../components/gallery/PhotoGallery";
import PhotoAlbums from '../components/gallery/PhotoAlbums';
import { Grid } from '@mui/material'

export default function GalleryPage() {
  return (
    <div className='app-body container'>
              <h1 className='header'>Gallery</h1>
        <Grid container spacing={0}>
            <Grid item sm={12} md={12} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <PhotoAlbums />
            </Grid>
            {/* <Grid item sm={12} md={6}>
                <VideoGallery />
            </Grid> */}
        </Grid>
    </div>
  )
}
