import React, {useState} from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Modal, Box, Typography } from '@mui/material'
import WarringtonCover from "../../assets/images/warrington/14.jpg"
import AbbeyCover from "../../assets/images/abbey/1.jpg"
import { Warrington } from './photos/Warrington'
import { Abbey } from './photos/Abbey'

export default function PhotoCarousel() {

    const [photos, setPhotos] = useState(null)
    const [selectedAlbum, setSelectedAlbum] = useState("");
    const [open, setOpen] = React.useState(false)
    const handleClose = () => setOpen(false)

    let photoAlbums = [
        {
            name: 'The Warrington Hotel, London, October 2022',
            coverImg: WarringtonCover
          },
        {
          name: 'Abbey Road Studios, London, November 2022',
          coverImg: AbbeyCover
        }
      ]

      const style = {
        position: 'absolute',
        width: "90%",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
      }

      function AlbumsItem({ item })
      {
          return (
              <Paper elevation={8} sx={{textAlign: "center", paddingBottom: 1, backgroundColor: 'rgba(68, 78, 90, 0.6)',
            }}>
                  <img src={item.coverImg} className="carousel-cover" />
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
                backgroundColor: '#444E5A',
              }
            }}
            onClick={() => openAlbum(item)}
            
          >
            See more
          </Button>
              </Paper>
          )
      }

      function PhotoItem({ item })
      {
          return (
                  <img src={item.image} className="carousel-item" />

          )
      }

      const openAlbum = (item) => {
        setSelectedAlbum(item.name)

        if (item.name === 'The Warrington Hotel, London, October 2022') {
            setPhotos(Warrington)
          } else {
            setPhotos(Abbey)
          }

        setOpen(true)
        }

      

    return (
        <div>
        <Carousel indicators={true}>
            {
                photoAlbums.map( (album, i) => <AlbumsItem key={i} item={album} /> )
            }
        </Carousel>

<Modal
open={open}
onClose={handleClose}
aria-labelledby='modal-modal-title'
aria-describedby='modal-modal-description'
>
<Box sx={style}>
  <Carousel autoPlay indicators={true} >
    {photos &&
      photos.map((album, i) => (
        <div>
      <PhotoItem key={i} item={album} />
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
