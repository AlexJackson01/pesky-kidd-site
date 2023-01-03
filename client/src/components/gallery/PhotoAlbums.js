import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal, { getModalUtilityClass } from '@mui/material/Modal'
import { items } from './O2Carousel'
import { abbey } from './ARCarousel'
import { warrington } from "./WarCarousel"
import Carousel from 'react-material-ui-carousel'
import WarCover from '../../assets/images/warrington/14.jpg'
import AbbeyCover from '../../assets/images/abbey/1.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 700,
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
      name: 'Pesky Kidd @ Abbey Road Studios, London, November 2022',
      coverImg: AbbeyCover
    },
    {
      name: 'Pesky Kidd @ The Warrington Hotel, London, October 2022',
      coverImg: WarCover
    }
  ])
  const [open, setOpen] = React.useState(false)
  //   const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  const [carousel, setCarousel] = useState(null)

  const setAlbum = album => {
    setOpen(true)
    setSelectedAlbum(album.name)

    if (album.name === 'Breakfast') {
      setCarousel(items)
      console.log(carousel)
    } else if (album.name === 'Pesky Kidd @ Abbey Road Studios, London, November 2022') {
      setCarousel(abbey)
    } else {
      setCarousel(warrington)
    }
  }

  const Item = ({ item }) => {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div>
        <img className="carousel-image" src={item.image} />
        {/* <video controls>
        <source src={item.image} type='video/mp4' />
      </video> */}
        </div>
        <div>
          <h2 className='carousel-title'>{item.description}</h2>
        </div>
        </div>
    );
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
          <Carousel autoPlay indicators={true} >
            {carousel &&
              carousel.map((album, i) => (
                <div>
              <Item key={i} item={album} />
              </div>
              ))}
          </Carousel>
          <Typography>
            <h1 className='carousel-title'>{selectedAlbum}</h1>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
