import React from 'react'
import Form from '../components/contact/Form'
import Socials from '../components/contact/Socials'
import { Grid } from '@mui/material'

export default function ContactPage() {
  return (
    <div className='app-body container'>
            <h1 className='header'>Contact</h1>

      <Grid container spacing={0}  sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#444E5A',
          padding: "50px",
          opacity: "75%"
        }}>
        <Grid item sm={12} xs={12} md={6}>
          <Form />
        </Grid>
        <Grid item sm={12} xs={12} md={6}>
          <Socials />
        </Grid>
      </Grid>
    </div>
  )
}
