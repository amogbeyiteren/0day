import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Offering from './pages/Offering';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import './index.css'


function App() {

  return (
    <Router>
      <Navbar />
      <div className='mt-8 px-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offering" element={<Offering />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      <Footer/>
    </Router>
  )
}

export default App
