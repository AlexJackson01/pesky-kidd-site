import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Modal, Box, Typography } from '@mui/material'
import O2Cover from '../../../assets/images/O2Cover.png'
import AbbeyCover from '../../../assets/images/abbey.png'
import O2Cover_2 from '../../../assets/images/O2Cover_2.jpg'
import { O2_2 } from './O2_2'
import { o2 } from './o2'
import { Abbey } from './Abbey'
import YouTubeO2 from './YouTubeO2'
import YouTubeAbbey from './YouTubeAbbey'

export default function VideoCarousel () {
  const [photos, setPhotos] = useState(null)
  const [selectedAlbum, setSelectedAlbum] = useState('')
  const [open, setOpen] = React.useState(false)
  const handleClose = () => setOpen(false)

  let videoAlbums = [
    {
      id: 1,
      name: 'The O2 Academy Islington, London, February 2023',
      coverImg: O2Cover_2
    },
    {
      id: 2,
      name: 'The O2 Academy Islington, London, December 2022',
      coverImg: O2Cover
    }
  ]

  const style = {
    position: 'absolute',
    width: '80vmin',
    height: '80vmin',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  function AlbumsItem ({ item }) {
    return (
      <Paper sx={{ textAlign: 'center', background: 'transparent' }}>
        <img src={item.coverImg} className='carousel-cover' />
        <h3 className='carousel-title'>{item.name}</h3>
        <Button
          type='submit'
          variant='contained'
          size='large'
          sx={{
            textTransform: 'none',
            fontFamily: 'Courier Prime',
            textAlign: 'center',
            margin: '0 auto',
            display: 'block',
            marginTop: 2,
            backgroundColor: '#5C9EA0',
            //   paddingBottom: 5,
            marginBottom: 2,
            '&:hover': {
              backgroundColor: '#444E5A'
            }
          }}
          onClick={() => openAlbum(item)}
        >
          See more
        </Button>
      </Paper>
    )
  }

  function VideoItem ({ item }) {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div>
          {selectedAlbum ===
          'The O2 Academy Islington, London, December 2022' ? (
            <YouTubeO2 embedId={item.id} />
          ) : (
            <YouTubeAbbey embedId={item.id} />
          )}
        </div>
      </div>
    )
  }

  const openAlbum = item => {
    setSelectedAlbum(item.name)

    if (item.id === 1) {
      setPhotos(O2_2)
    } else if (item.id === 2) {
      setPhotos(o2)
    } else {
      setPhotos(Abbey)
    }

    setOpen(true)
  }

  return (
    <div>
      <Carousel indicators={true}>
        {videoAlbums.map((album, i) => (
          <AlbumsItem key={i} item={album} />
        ))}
      </Carousel>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Carousel autoPlay indicators={true}>
            {photos &&
              photos.map((album, i) => (
                <div>
                  <VideoItem key={i} item={album} />
                </div>
              ))}
          </Carousel>
          <Typography>
            <h1 className='photo-title'>{selectedAlbum}</h1>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
