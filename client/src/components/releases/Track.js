import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Track({ track }) {
  return (
        <Paper elevation={7} sx={{width: "75%", textAlign: "center"}}>
            <img src={track.cover} className="track-cover" />
            <h2 className='track-name'>{track.name}</h2>
            <div className='track-platforms'>
            {track.links.map((link) => (
                <a href={link.link} target="_blank">
                <img src={link.img} className="track-logo" />
                </a>
            ))}
            </div>
        </Paper>
  )
}
