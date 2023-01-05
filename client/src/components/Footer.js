import React from 'react'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import Logo from "../assets/images/logo-no-bg.png"
import Spotify from "../assets/images/spotify-icon.png"
import Tiktok from "../assets/images/tiktok-icon.png"

export default function Footer () {
  return (
    <div className='footer'>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center", color: "black"}}>
          <img src={Logo} className="pesky-logo" alt="Pesky Kidd logo" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
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
          <IconButton
              href='https://open.spotify.com/artist/6GU3Fg2x5wvm0PIHryh3Sf?si=gHjTIqBEShysv1trhsfKFg'
              target='_blank'
            >
              <img src={Spotify} className="social-icons" alt="Spotify icon" />
            </IconButton>
            <IconButton
              href='https://www.tiktok.com/@peskykidd'
              target='_blank'
            >
              <img src={Tiktok} className="social-icons" alt="Spotify icon" />
            </IconButton>
        </Grid>
      </Grid>
    </div>
  )
}
