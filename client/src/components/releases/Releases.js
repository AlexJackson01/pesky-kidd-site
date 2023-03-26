import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CR from '../../assets/images/CR.jpg'
import OH from '../../assets/images/OH.jpg'
import WY from '../../assets/images/WY.jpg'
import Spotify from '../../assets/images/spotify.svg'
import Youtube from '../../assets/images/Youtube.png'
import Apple from '../../assets/images/apple.svg'
import Amazon from '../../assets/images/amazon.png'
import Track from './Track'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal, { getModalUtilityClass } from '@mui/material/Modal'
import { Grid } from '@mui/material'

export default function Releases ({ setRecord }) {
  const [trackToListen, setTrackToListen] = useState(null)
  const [records, setRecords] = useState([
    {
      name: 'With You',
      cover: WY,
      links: [
        {
          img: Spotify,
          link: 'https://open.spotify.com/album/2EI3OlQ6nB1MiMUaGwQnbM?si=sViZ3190SGesKlTl_yZEEA'
        },
        {
          img: Youtube,
          link: 'https://music.youtube.com/playlist?list=OLAK5uy_kOte7Fsiqz-BoJ5mv242g8TRvbkgo0l54'
        },
        {
          img: Apple,
          link: 'https://music.apple.com/gb/album/with-you/1673034868?i=1673034880'
        },
        {
          img: Amazon,
          link: 'https://music.amazon.co.uk/albums/B0BW9N2Y34?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_vO5OgHAPLt0LpVFSkiZ39INzd'
        }
      ]
    },
    {
      name: 'Civilian Rebellion',
      cover: CR,
      links: [
        {
          img: Spotify,
          link: 'https://open.spotify.com/track/7F2AXr4pjVkryEVR9UbSKj?si=7d408f7f55bc43ee'
        },
        {
          img: Youtube,
          link: 'https://music.youtube.com/playlist?list=OLAK5uy_mbyVXkvpRxR2LtUWAM3MFcIrUHQsOvtBY&feature=share'
        },
        { img: Apple, link: 'http://itunes.apple.com/album/id/1633184610' },
        {
          img: Amazon,
          link: 'https://music.amazon.co.uk/albums/B0B5WVHMPJ?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_yoc2eHml5XZaXsFPjYsyBpRaG'
        }
      ]
    },
    {
      name: 'Open Heart',
      cover: OH,
      links: [
        {
          img: Spotify,
          link: 'https://open.spotify.com/album/5Uau7xKpTO5DmxId7pBnxk?si=YJ0LsM74TEK5AzNFlI8xPQ'
        },
        {
          img: Youtube,
          link: 'https://music.youtube.com/playlist?list=OLAK5uy_md0Dgq6v7vLzoBz3Ibm9uywK-SsfeEdo8&feature=share'
        },
        {
          img: Apple,
          link: 'https://music.apple.com/us/album/open-heart/1610851063'
        },
        {
          img: Amazon,
          link: 'https://music.amazon.co.uk/albums/B09SXFKV3M?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_8pFGCdC1y56b3TjAhBoAyUTlK'
        }
      ]
    }
  ])
  const [musicLinks, setMusicLinks] = useState([
    {
      img: Spotify,
      link: 'https://open.spotify.com/artist/6GU3Fg2x5wvm0PIHryh3Sf?si=gHjTIqBEShysv1trhsfKFg'
    },
    {
      img: Youtube,
      link: 'https://music.youtube.com/channel/UCi7GFbs3GcRVxW-W7aNluzw?feature=share'
    },
    {
      img: Apple,
      link: 'https://music.apple.com/us/artist/pesky-kidd/1477336541'
    },
    {
      img: Amazon,
      link: 'https://music.amazon.co.uk/artists/B07WPF5ZYT/pesky-kidd'
    }
  ])
  const [selectedCover, setSelectedCover] = useState(null)
  const [open, setOpen] = React.useState(false)
  const handleOpen = record => {
    setOpen(true)
    setTrackToListen(record)
    setSelectedCover(record.cover)
  }
  const handleClose = () => setOpen(false)

  const style = {
    modalStyle: {
      backgroundImage: `url(${selectedCover})`,
      backgroundSize: '100vw',
      backgroundRepeat: 'repeat',
      filter: 'blur',
      border: '2px solid #fff'
    },
    contentStyle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      // height: "80%",
      // width: "70vw",
      // height: "90vh",
      // backgroundColor: "rgba(255, 0, 0, 0.5)",
      backgroundImage: `url(${selectedCover})`,
      backgroundSize: '100%',
      backgroundRepeat: 'repeat',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    }
  }

  return (
    <div>
      <div className='music-platforms'>
        <Grid
          container
          spacing={0}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Grid item xs={12} md={6}>
            <a href={musicLinks[0].link} target='_blank'>
              <img
                src={musicLinks[0].img}
                alt='Music Platforms'
                className='platform-logo'
              />
            </a>
            <a href={musicLinks[2].link} target='_blank'>
              <img
                src={musicLinks[2].img}
                alt='Music Platforms'
                className='platform-logo'
              />
            </a>
          </Grid>
          <Grid item xs={12} md={6}>
            <a href={musicLinks[1].link} target='_blank'>
              <img
                src={musicLinks[1].img}
                alt='Music Platforms'
                className='platform-logo'
              />
            </a>
            <a href={musicLinks[3].link} target='_blank'>
              <img
                src={musicLinks[3].img}
                alt='Music Platforms'
                className='platform-logo'
              />
            </a>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              src={records[0].cover}
              className='music-cover'
              alt='Record cover'
              onClick={() => handleOpen(records[0])}
            />
            <h2 className='record-name'>{records[0].name}</h2>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={records[1].cover}
              className='music-cover'
              alt='Record cover'
              onClick={() => handleOpen(records[1])}
            />
            <h2 className='record-name'>{records[1].name}</h2>
          </Grid>
          <Grid item xs={12} md={12}>
            <img
              src={records[2].cover}
              className='music-cover'
              alt='Record cover'
              onClick={() => handleOpen(records[2])}
            />
            <h2 className='record-name'>{records[2].name}</h2>
          </Grid>
        </Grid>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={style.modalStyle}
      >
        <Box sx={style.contentStyle}>
          <Track track={trackToListen} />
        </Box>
      </Modal>
    </div>
  )
}
