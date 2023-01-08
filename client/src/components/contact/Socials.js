import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import IconButton from '@mui/material/IconButton'
import Spotify from '../../assets/images/spotify-white.png'
import Tiktok from '../../assets/images/tiktok-icon.png'


export default function Socials() {
  return (
    <div className='socials-div'>
        <h3>Follow us on socials for more!</h3>
        <IconButton
              href='https://www.instagram.com/peskykiddofficial/'
              target='_blank'
            >
              <InstagramIcon fontSize='large' sx={{ color: '#FCFBF6' }} />
            </IconButton>
            <IconButton
              href='https://www.facebook.com/peskyk1dd/'
              target='_blank'
            >
              <FacebookIcon fontSize='large' sx={{ color: '#FCFBF6' }} />
            </IconButton>
            <IconButton
          href='https://open.spotify.com/artist/6GU3Fg2x5wvm0PIHryh3Sf?si=gHjTIqBEShysv1trhsfKFg'
          target='_blank'
        >
          <img src={Spotify} className='social-icons' alt='Spotify icon' />
        </IconButton>
        <IconButton href='https://www.tiktok.com/@peskykidd' target='_blank'>
          <img src={Tiktok} className='social-icons' alt='Spotify icon' />
        </IconButton>
    </div>
  )
}
