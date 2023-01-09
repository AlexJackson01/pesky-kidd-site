import React, {useState} from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Modal, Box, Typography } from '@mui/material'
import O2Cover from '../../../assets/images/O2Cover.png'
import AbbeyCover from "../../../assets/images/abbey/1.jpg"
import { O2 } from './O2'
import { Abbey } from '../photos/Abbey'
import YouTubeEmbed from './YouTubeEmbed'

export default function VideoCarousel() {

    const [photos, setPhotos] = useState(null)
    const [selectedAlbum, setSelectedAlbum] = useState("");
    const [open, setOpen] = React.useState(false)
    const handleClose = () => setOpen(false)

    let videoAlbums = [
        {
            name: 'The O2 Academy 2 Islington, London, December 2022',
            coverImg: O2Cover
          },
        // {
        //   name: 'Abbey Road Studios, London, November 2022',
        //   coverImg: AbbeyCover
        // }
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
              <Paper sx={{textAlign: "center", background: "transparent"
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

      function VideoItem({ item })
      {
          return (
            <div style={{ width: "100%", height: "100%" }}>
            <div className="App">
              <YouTubeEmbed embedId={item.id} />
            </div>
                </div>

          )
      }

      const openAlbum = (item) => {
        setSelectedAlbum(item.name)

        if (item.name === 'The O2 Academy2 Islington, London, December 2022') {
            setPhotos(O2)
          }

        setOpen(true)
        }

      

    return (
        <div>
        <Carousel indicators={false}>
            {
                videoAlbums.map( (album, i) => <AlbumsItem key={i} item={album} /> )
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

