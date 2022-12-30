import React, { useState } from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Vid from '../../assets/videos/vid1.mp4'
import Requiem from '../../assets/videos/requiem.mp4'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: '#FCFBF6',
  border: '3px solid #5C9EA0',
  boxShadow: 24,
  p: 4
}

export default function VideoGallery () {
  const [selected, setSelected] = useState('')
  const [open, setOpen] = React.useState(false)
  const handleOpen = item => {
    setOpen(true)
    setSelected(item)
  }
  const handleClose = () => setOpen(false)

  return (
    <div>
      <div className='photo-gallery'>
        <ImageList sx={{ width: 1000, height: 400 }} cols={3} rowHeight={164}>
          {itemData.map(item => (
            <ImageListItem key={item.vid}>
              <video loop muted controls>
                <source
                  src={`${item.vid}?w=164&h=164&fit=crop&auto=format`}
                  onClick={() => handleOpen(item)}
                  type='video/mp4'
                />
              </video>
              {/* <img
            src={`${item.vid}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.vid}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            onClick={() => handleOpen(item)}
          /> */}
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <video loop autoPlay muted controls className='intro-video'>
              <source src={selected.vid} type='video/mp4' />
            </video>
          </Typography>
          <Typography>
            <h1 className='selected-title'>{selected.title}</h1>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

const itemData = [
  {
    vid: Vid,
    title: 'Pesky Kidd @ O2 Academy2 Islington'
  },
  {
    vid: Requiem,
    title: 'Requiem - Pesky Kidd @ O2 Academy2 Islington'
  }
]
