import React from 'react'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

export default function Footer() {
  return (
    <div className='footer'>
        <Grid container spacing={2}>
            <Grid item sm={6}>
                &copy; Pesky Kidd 2023
            </Grid>
            <Grid item sm={6}>
            <IconButton
          href='https://www.instagram.com/peskykiddofficial/'
          target='_blank'
        >
          <InstagramIcon fontSize="large" sx={{ color: 'white' }} />
        </IconButton>
        <IconButton href='https://www.facebook.com/peskyk1dd/' target='_blank'>
          <FacebookIcon fontSize="large" sx={{ color: 'white' }} />
        </IconButton>
            </Grid>
        </Grid>
    </div>
  )
}
