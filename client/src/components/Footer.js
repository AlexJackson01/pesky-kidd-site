import React from 'react'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import Logo from "../assets/images/logo-no-bg.png"

export default function Footer () {
  return (
    <div className='footer'>
      <Grid container spacing={2}>
        <Grid item sm={6} sx={{display: "flex", justifyContent: "center", alignItems: "center", color: "black"}}>
          <img src={Logo} className="pesky-logo" alt="Pesky Kidd logo" />
        </Grid>
        <Grid item sm={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <IconButton
            href='https://www.instagram.com/peskykiddofficial/'
            target='_blank'
          >
            <InstagramIcon fontSize='large' sx={{ color: 'black' }} />
          </IconButton>
          <IconButton
            href='https://www.facebook.com/peskyk1dd/'
            target='_blank'
          >
            <FacebookIcon fontSize='large' sx={{ color: 'black' }} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  )
}
