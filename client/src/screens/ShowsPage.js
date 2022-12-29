import React from 'react'
import Upcoming from '../components/Upcoming'
import Recent from '../components/Recent'

export default function ShowsPage() {
  return (
    <div className='app-body container'>
              <h1 className='header'>Upcoming Shows</h1>

        <Upcoming />
        <h1 className='header'>Recent Shows</h1>

        <Recent />
    </div>
  )
}
