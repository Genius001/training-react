import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.jsx';
import Sewa from './pages/Sewa.jsx'
import Login from './pages/Login'
import CarDetail from './pages/CarDetail'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Sewa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/car/:id" element={<CarDetail />} />
      </Routes>
    </>
  )
}

export default App
