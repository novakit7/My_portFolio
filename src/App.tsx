import { Routes, Route } from 'react-router'
import './App.css'
import Home from './assets/Home'
import About from './assets/About'
import Projects from './assets/Projects'
import Contact from './assets/Contact'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <div className='main-section'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
