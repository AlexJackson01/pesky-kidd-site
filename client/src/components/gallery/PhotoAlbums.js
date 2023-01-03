import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal, { getModalUtilityClass } from '@mui/material/Modal'
import { items } from "./O2Carousel"
import {items2} from './ARCarousel'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function PhotoAlbums () {
  const [albums, setAlbums] = useState([
    {
      name: 'Breakfast',
      coverImg: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
    },
    {
      name: 'Burger',
      coverImg: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'
    },
    {
      name: 'Camera',
      coverImg: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'
    }
  ])
  const [open, setOpen] = React.useState(false)
//   const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  const [carousel, setCarousel] = useState(null)

  const setAlbum = (album) => {
    setOpen(true)
    setSelectedAlbum(album.name)
    
    if (album.name === "Breakfast") {
        setCarousel(items)
        console.log(carousel)
    } else if (album.name === "Burger") {
        setCarousel(items2)
    }
  }



  function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

//   const getModal = (carousel) => {
//     if (carousel.name === "Breakfast") {
//         return <O2Carousel />
//     } else {
//         return <ARCarousel />
//     } 
//   }

  return (
    <div>
      <div className='album-div'>
        {albums.map(album => (
          <div>
            <img
              src={album.coverImg}
              className='photo-albums'
              onClick={() => setAlbum(album)}
            />
          </div>
        ))}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
        <Carousel>
            {
                carousel.map( (album, i) => <Item key={i} item={album} /> )
            }
        </Carousel>
        </Box>
      </Modal>
    </div>
  )
}
