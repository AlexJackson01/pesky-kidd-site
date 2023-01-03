import React, { useState, useRef } from 'react'
// import emailjs from '@emailjs/browser'
// import { init } from '@emailjs/browser'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import EmailIcon from '@mui/icons-material/Email'
import { alpha, styled } from '@mui/material/styles'

// init('CRSB7HDdL0UfMj8EF')

const ContactText = styled(TextField)({
    color: "FCFBF6",
    '& .MuiInputBase-root': {
        color: '#FCFBF6',
      },

  '& label.Mui-focused': {
    color: '#FCFBF6'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FCFBF6'
  }
})

export default function Form () {
  const [emailSent, setEmailSent] = useState(false)

  const form = useRef()

//   const sendEmail = e => {
//     e.preventDefault()

//     emailjs
//       .sendForm(
//         'service_fsboimm',
//         'template_mvkp547',
//         form.current,
//         'CRSB7HDdL0UfMj8EF'
//       )
//       .then(
//         result => {
//           setEmailSent(<p>Message sent!</p>)
//         },
//         error => {
//           console.log(error.text)
//         }
//       )
//   }

  return (
    <div>
        <h2 className='contact-header'>For general and booking enquiries, contact us here:</h2>
        {/* onSubmit={sendEmail} */}
      <form ref={form} >
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: '20px',
              color: "#FCFBF6",
            }}
          >
            <AccountCircle sx={{ color: '#FCFBF6', mr: 1, my: 0.5 }} />
            <ContactText
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
            id='standard-multiline-static'
            label='Message'
            name='user_message'
            multiline
            rows={4}
            variant='standard'
          />
        </Box>
        <p>
          <Button
            type='submit'
            variant='contained'
            size='large'
            sx={{
              textTransform: 'none',
              fontSize: 20,
              fontFamily: 'NexaSlab',
              textAlign: 'center',
              margin: '0 auto',
              display: 'block',
              backgroundColor: '#5C9EA0',
              marginBottom: '20px',
              '&:hover': {
                backgroundColor: '#444E5A',
              }
            }}
          >
            Send
          </Button>
        </p>
      </form>
      {emailSent}
    </div>
  )
}