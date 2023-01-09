import React from 'react'
import Form from '../components/contact/Form'
import Socials from '../components/contact/Socials'
import { Grid } from '@mui/material'
import { Fade } from 'react-reveal'

export default function ContactPage() {
  return (
    <div className='app-body container'>
            <h1 className='header'>Contact</h1>
            <Fade bottom>

      <Grid container spacing={0}  sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(68, 78, 90, 0.6)',
          padding: 5
        }}>
        <Grid item sm={12} xs={12} md={6}>
          <Form />
        </Grid>
        <Grid item sm={12} xs={12} md={6}>
          <Socials />
        </Grid>
      </Grid>
      </Fade>
    </div>
  )
}
