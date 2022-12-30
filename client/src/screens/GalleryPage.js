import React from 'react'
import PhotoGallery from "../components/gallery/PhotoGallery";
import { Grid } from '@mui/material'

export default function GalleryPage() {
  return (
    <div className='app-body container'>
              <h1 className='header'>Gallery</h1>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <PhotoGallery />
            </Grid>
        </Grid>
    </div>
  )
}
