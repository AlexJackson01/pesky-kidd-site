import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';


export default function MailingList() {

    const [email, setEmail] = useState(null);

    const sheetID = "10Vuuj1JFVpUDTUb4_HOErhOXjHdr5xYrRsyGvFWGLVM";

    const accessToken = "ya29.a0AX9GBdV8egTGe9e8qhM5o2SJdBr9FjIZ0CEvAFsuMAqvIUWx2RJzmxTF0WuBkXdzMkQKePur_olZmsOM6Vw_vYiNuZYjQsZzNf1O1hGHVycb8tbVHuPIZeP5AqH-6X3au3facdNpnSuRZEbjUyWWqAwe7s-laCgYKATYSARESFQHUCsbCLb9oqNXR3XB8eeTocz3HlA0163"

    const addToList = (e) => {

        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //update this token with yours. 
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({

        "requests": [
          {
            "updateCells": {
              "range": {
                "startRowIndex": 0,
                "startColumnIndex": 0,
                "endColumnIndex": 1,
                "endRowIndex": 3,
                "sheetId": 0
              },
              " ": [
                {
                  "values": [
                    {
                      "userEnteredValue": {
                        "stringValue": "Adnan1"
                      }
                    }
                  ]
                },
                {
                  "values": [
                    {
                      "userEnteredValue": {
                        "stringValue": "Adnan2"
                      }
                    }
                  ]
                },
                {
                  "values": [
                    {
                      "userEnteredValue": {
                        "stringValue": "Adnan3"
                      }
                    }
                  ]
                }
              ],
              "fields": "*"
            }
          }
        ]

      })
    })
  }

  return (
    <div>
        <h2>Join our mailing list:</h2>
<TextField
  sx={{
    color: "#5C9EA0",
    "& .MuiInputLabel-root": { color: "#5C9EA0" },
    // border: "1px solid #5C9EA0",
    '&.MuiInput': { color: "#5C9EA0"},
    '& .MuiInput-underline:before': { color: '#5C9EA0', borderBottomColor: '#5C9EA0' },
    '& .MuiInput-underline:after': { color: '#5C9EA0', borderBottomColor: '#5C9EA0' },
    input: { color: '#5C9EA0' },

    // border: "1px solid #5C9EA0",

    fontFamily: "Courier Prime",
    width: 350,
 
  }}
  
  label="Email address"
  variant="standard"
  name="email"
  onChange={(e) => setEmail(e.target.value)}
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
                backgroundColor: '#444E5A',
              }
            }}
            onClick={addToList}
            
          >
            Submit
          </Button>
    </div>
  )
}
