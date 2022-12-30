import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import IconButton from '@mui/material/IconButton'


export default function Socials() {
  return (
    <div className='socials-div'>
        <h2>Follow us on socials for more!</h2>
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
    </div>
  )
}
