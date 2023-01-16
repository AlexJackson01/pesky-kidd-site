import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import axios from 'axios'

export default function MailingList () {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [confirmation, setConfirmation] = useState('')

  const addToList = e => {
    // e.preventDefault()
    axios
      .post(
        `https://sheet.best/api/sheets/f7199bee-4e6c-4263-9275-5e48ef699d68`,
        {
          name, email
        }
      )
      .then(response => {
        console.log(response)
        setConfirmation('Thank you!')
      })
  }

  return (
    <div>
      <h3>Subscribe now</h3>
      <h5 className='subscribe-text'>for exclusive offers and updates</h5>
      <TextField
        sx={{
          color: '#5C9EA0',
          '& .MuiInputLabel-root': { color: '#5C9EA0' },
          // border: "1px solid #5C9EA0",
          '&.MuiInput': { color: '#5C9EA0' },
          '& .MuiInput-underline:before': {
            color: '#5C9EA0',
            borderBottomColor: '#5C9EA0'
          },
          '& .MuiInput-underline:after': {
            color: '#5C9EA0',
            borderBottomColor: '#5C9EA0'
          },
          input: { color: 'black' },

          // border: "1px solid #5C9EA0",

          fontFamily: 'Courier Prime',
          width: '100%',
          marginTop: -3,
          '&.MuiInput': { color: '#5C9EA0' }
        }}
        label='Name'
        variant='standard'
        name='name'
        onChange={e => setName(e.target.value)}
      />
      <TextField
        sx={{
          color: '#5C9EA0',
          '& .MuiInputLabel-root': { color: '#5C9EA0' },
          // border: "1px solid #5C9EA0",
          '&.MuiInput': { color: '#5C9EA0' },
          '& .MuiInput-underline:before': {
            color: '#5C9EA0',
            borderBottomColor: '#5C9EA0'
          },
          '& .MuiInput-underline:after': {
            color: '#5C9EA0',
            borderBottomColor: '#5C9EA0'
          },
          input: { color: 'black' },

          // border: "1px solid #5C9EA0",

          fontFamily: 'Courier Prime',
          width: '100%',
          paddingBottom: 1,
          '&.MuiInput': { color: '#5C9EA0' }
        }}
        label='Email'
        variant='standard'
        name='email'
        onChange={e => setEmail(e.target.value)}
      />

      <Button
        type='submit'
        variant='contained'
        size='large'
        sx={{
          textTransform: 'none',
          fontSize: 15,
          fontFamily: 'Courier Prime',
          textAlign: 'center',
          margin: '0 auto',
          display: 'block',
          marginTop: 2,
          backgroundColor: '#5C9EA0',
          marginBottom: '20px',
          '&:hover': {
            backgroundColor: '#444E5A'
          }
        }}
        onClick={addToList}
      >
        Subscribe
      </Button>
      <p className='confirmation-message'>{confirmation}</p>
    </div>
  )
}
