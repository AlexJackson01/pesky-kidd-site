import React, {useState} from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import WarringtonCover from "../../assets/images/warrington/14.jpg"
import AbbeyCover from "../../assets/images/abbey/1.jpg"
import { Warrington } from './photos/Warrington'
import { Abbey } from './photos/Abbey'

export default function PhotoCarousel() {

    const [photos, setPhotos] = useState(null)
    const [selectedAlbum, setSelectedAlbum] = useState("");

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

      function Item({ item })
      {
          return (
              <Paper sx={{width: "100%", textAlign: "center", paddingBottom: 1, backgroundColor: 'rgba(68, 78, 90, 0.6)',
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

      const openAlbum = (item) => {
        setSelectedAlbum(item.name)

        if (item.name === 'The Warrington Hotel, London, October 2022') {
            setPhotos(Warrington)
          } else {
            setPhotos(Abbey)
          }
      }

    return (
        <Carousel indicators={true}>
            {
                photoAlbums.map( (album, i) => <Item key={i} item={album} /> )
            }
        </Carousel>
    )
}

