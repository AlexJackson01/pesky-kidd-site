import React, { useState } from 'react'
import Lee from '../../assets/images/lee.png'
import Johnnie from '../../assets/images/johnnie.png'
import Luca from '../../assets/images/luca.png'
import Ben from '../../assets/images/ben.png'
import { Grid } from '@mui/material'

export default function Band () {
  const [band, setBand] = useState([
    { name: 'Ben Forsythe', instrument: 'Vocals, rhythm guitar', img: Ben },
    { name: 'Luca Chessa', instrument: 'Lead Guitar', img: Luca },
    {
      name: 'Lee Godkin',
      instrument: 'Keyboard, backing vocals',
      img: Lee
    },
    // { name: 'Andy Harrison', instrument: ['Bass'], img: '' },
    { name: 'Johnnie Shinner', instrument: 'Drums', img: Johnnie }
  ])

  return (
    <div className='band-div'>
{band.map((member) => (
  <div>
    <img src={member.img} className='member-pic' />
    <h4>{member.name}</h4>
    <h5>{member.instrument}</h5>
  </div>
))}

          {/* {band.map((member) => (
            <div>
         <div class='grid-item'><img src={member.img} className="member-pic"/></div>
         <div class='grid-item'><h4>{member.name}</h4></div>
         <div class='grid-item'>
          {member.instrument.map((instrument) => (
            <h5>{instrument}</h5>
          ))}
         </div>
         </div>
          ))} */}
 

    </div>
  )
}
