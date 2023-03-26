import React, { useState } from 'react'
import { Grid } from '@mui/material'

export default function Band () {
  // const [band, setBand] = useState([
  //   { name: 'Ben Forsythe', instrument: 'Vocals, Rhythm Guitar', img: Ben },
  //   { name: 'Luca Chessa', instrument: 'Lead Guitar', img: Luca },
  //   {
  //     name: 'Lee Godkin',
  //     instrument: 'Keyboard, Backing Vocals',
  //     img: Lee
  //   },
  //   { name: 'Jack Hinks', instrument: 'Bass', img: Jack },
  //   { name: 'Johnnie Shinner', instrument: 'Drums', img: Johnnie }
  // ])

  return (
    <div className='band-div'>
      {/* {band.map(member => (
        <div>
          <img
            src={member.img}
            className='member-pic'
            alt='pics of band members'
          />
          <h4>{member.name}</h4>
          <h5 className='band-instruments'>{member.instrument}</h5>
        </div>
      ))} */}
    </div>
  )
}
