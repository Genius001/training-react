import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cari" element={<div>Cari</div>} />
      </Routes>
    </>
  )
}

export default App
