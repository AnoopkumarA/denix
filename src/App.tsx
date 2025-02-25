import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home'
import Project from './pages/project'
import ProjectSection from './pages/projectsection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project-details" element={<ProjectSection />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
