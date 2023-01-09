import React, { useState } from 'react'
import "../../../App.css";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal, { getModalUtilityClass } from '@mui/material/Modal'
import {o2} from './o2'
import Carousel from 'react-material-ui-carousel'
import O2Cover from '../../../assets/images/O2Cover.png'
import { Grid } from '@mui/material';
import YouTubeEmbed from './YouTubeEmbed';


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

export default function VideoAlbums () {
  const [albums, setAlbums] = useState([
    {
      name: 'Pesky Kidd @ The O2 Academy2 Islington, London, December 2022',
      coverImg: O2Cover
    },
  ])
  const [open, setOpen] = React.useState(false)
  //   const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  const [carousel, setCarousel] = useState(null)

  const setAlbum = album => {
    setOpen(true)
    setCarousel(o2)
  }

  const Item = ({ item }) => {
    return (
      <div style={{ width: "100%", height: "100%" }}>
    <div className="App">
      <YouTubeEmbed embedId={item.id} />
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
      <h1 className='gallery-header'>Videos</h1>
      <div className='album-div'>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={12} sx={{ justifyContent: "center", alignItems: "center"}}>
            <img
              src={O2Cover}
              className='photo-albums'
              onClick={() => setAlbum()}
            />
            <h2 className='album-title'>{albums[0].name}</h2>

            </Grid>
          </Grid>

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
            <h1 className='carousel-title'>{albums[0].name}</h1>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
