import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Career from './pages/Career'
import Blog from './pages/Blog'

const App = () => {
  return (
    <div>
     <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brief" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/vacancy" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
         </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App