import React, { useState } from 'react'
import Lee from "../../assets/images/lee.png"
import Johnnie from "../../assets/images/johnnie.png"
import Luca from "../../assets/images/luca.png"
import Ben from "../../assets/images/ben.png"
import { Grid } from '@mui/material'

export default function Band () {
  const [band, setBand] = useState([
    { name: 'Ben Forsythe', instrument: ['Vocals', 'Rhythm Guitar'], img: Ben },
    { name: 'Luca Chessa', instrument: ['Lead Guitar'], img: Luca },
    { name: 'Lee Godkin', instrument: ['Keyboard', 'Backing vocals'], img: Lee },
    // { name: 'Andy Harrison', instrument: ['Bass'], img: '' },
    { name: 'Johnnie Shinner', instrument: ['Drums'], img: Johnnie }
  ])

  return (
    <div className='band-div'>
      {band.map(member => (
        <Grid container spacing={0} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Grid item sm={12} md={3}>
          <img src={member.img} className="member-pic" alt='Member of Pesky Kidd' />
          <h4>{member.name}</h4>
          {member.instrument.map(i => (
            <h6>{i}</h6>
          ))}
          </Grid>
          </Grid>
      ))}
    </div>

  )
}
