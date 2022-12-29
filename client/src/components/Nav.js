import * as React from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Logo from '../assets/images/pesky-logo.png'
import WhiteLogo from '../assets/images/logo-no-bg.png'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import { NavLink } from 'react-router-dom'

const drawerWidth = 240
const navItems = ['About', 'Shows', 'Releases', 'Gallery', 'Contact']

function Nav (props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        <img src={WhiteLogo} className='pesky-drawer' alt='Pesky Kidd logo' />
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <IconButton
          href='https://www.instagram.com/peskykiddofficial/'
          target='_blank'
        >
          <InstagramIcon sx={{ color: 'black' }} />
        </IconButton>
        <IconButton href='https://www.facebook.com/peskyk1dd/' target='_blank'>
          <FacebookIcon sx={{ color: 'black' }} />
        </IconButton>
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{ position: 'sticky', backgroundColor: '#FCFBF6', color: 'black' }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}
          >
            <Box sx={{ display: "flex"}}>
            <NavLink to='/'>
              <img src={Logo} className='pesky-logo' alt='Pesky Kidd logo' />
              
            </NavLink>
            <h1 className='nav-heading'>Pesky Kidd</h1>
            </Box>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            {navItems.map(item => (
              <Button
                key={item}
                sx={{
                  textTransform: 'none',
                  color: 'black',
                  fontFamily: 'NexaSlab',
                  fontSize: 18
                }}
              >
                {item}
              </Button>
            ))}
            <IconButton
              href='https://www.instagram.com/peskykiddofficial/'
              target='_blank'
            >
              <InstagramIcon sx={{ color: 'black' }} />
            </IconButton>
            <IconButton
              href='https://www.facebook.com/peskyk1dd/'
              target='_blank'
            >
              <FacebookIcon sx={{ color: 'black' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

Nav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

export default Nav
