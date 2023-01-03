import React, { useState } from 'react'

export default function Band () {
  const [band, setBand] = useState([
    { name: 'Ben Forsythe', instrument: ['Vocals', 'Rhythm Guitar'], img: '' },
    { name: 'Luca Chessa', instrument: ['Lead Guitar'], img: '' },
    { name: 'Lee Godkin', instrument: ['Keyboard', 'Backing vocals'], img: '' },
    // { name: 'Andy Harrison', instrument: ['Bass'], img: '' },
    { name: 'Johnnie Shinner', instrument: ['Drums'], img: '' }
  ])

  return (
    <div className='band-div'>
      {band.map(member => (
        <div className='band-info'>
          <img src={member.img} alt='Member of Pesky Kidd' />
          <h4>{member.name}</h4>
          {member.instrument.map(i => (
            <h6>{i}</h6>
          ))}
        </div>
      ))}
    </div>
  )
}
