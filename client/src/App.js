import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Intro from './screens/Intro'
import AboutPage from './screens/AboutPage'
import ShowsPage from './screens/ShowsPage'
import MusicPage from './screens/MusicPage'
import GalleryPage from './screens/GalleryPage'
import ContactPage from './screens/ContactPage'
import Footer from './components/Footer'
import { useLocation } from 'react-router-dom'

function App () {

  const { pathname } = useLocation();

  return (
    <div className='app-body'>
      <Nav />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shows' element={<ShowsPage />} />
        <Route path='/releases' element={<MusicPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      {pathname === "/" ? null : <Footer />}
    </div>
  )
}

export default App
