import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AlhamaDeMurcia from './pages/reformas/AlhamaDeMurcia'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reformas/alhama-de-murcia" element={<AlhamaDeMurcia />} />
    </Routes>
  )
}

export default App
