import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { init } from '@emailjs/browser'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import EmailIcon from '@mui/icons-material/Email'
import { alpha, styled } from '@mui/material/styles'

init('CRSB7HDdL0UfMj8EF')

const ContactText = styled(TextField)({
  color: '#FCFBF6',
  '& .MuiInputLabel-root': { color: '#FCFBF6' },
  '& .MuiInputBase-root': { color: '#FCFBF6' },
  // border: "1px solid #5C9EA0",
  '&.MuiInput': { color: '#FCFBF6' },
  '& .MuiInput-underline:before': {
    color: '#FCFBF6',
    borderBottomColor: '#FCFBF6'
  },
  '& .MuiInput-underline:after': {
    color: '#FCFBF6',
    borderBottomColor: '#FCFBF6'
  },
  input: { color: '#FCFBF6' }
})

export default function Form () {
  const [emailSent, setEmailSent] = useState(false)

  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_fsboimm',
        'template_dkc4nxi',
        form.current,
        'CRSB7HDdL0UfMj8EF'
      )
      .then(
        result => {
          setEmailSent(<p>Message sent!</p>)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <h3 className='contact-header'>
        For general and booking enquiries, contact us here:
      </h3>
      <form ref={form} onSubmit={sendEmail}>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: '20px',
              color: '#FCFBF6'
            }}
          >
            <AccountCircle sx={{ color: '#FCFBF6', mr: 1, my: 0.5 }} />
            <ContactText
              id='input-with-sx'
              label='Name'
              name='user_name'
              variant='standard'
              size='normal'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <EmailIcon sx={{ color: '#FCFBF6', mr: 1, my: 0.5 }} />
            <ContactText
              id='input-with-sx'
              label='Email address'
              name='user_email'
              variant='standard'
            />
          </Box>
        </Box>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            color: '#FCFBF6',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '20px'
          }}
          noValidate
          autoComplete='off'
        >
          <ContactText
            multiline
            id='input-with-sx'
            label='Message'
            name='user_message'
            rows={4}
            variant='standard'
            sx={{ color: 'white' }}
          />
        </Box>
        <p>
          <Button
            type='submit'
            variant='contained'
            size='large'
            sx={{
              textTransform: 'none',
              fontFamily: 'Courier New',
              fontWeight: "bold",
              textAlign: 'center',
              margin: '0 auto',
              display: 'block',
              backgroundColor: '#5C9EA0',
              marginBottom: '20px',
              '&:hover': {
                backgroundColor: '#444E5A'
              }
            }}
          >
            Send
          </Button>
        </p>
      </form>
      <p className='sent-message'>{emailSent}</p>
    </div>
  )
}
