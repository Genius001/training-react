import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.jsx';
import Sewa from './pages/Sewa.jsx'
import Login from './pages/Login.jsx'
import CarDetail from './pages/CarDetail.jsx'
import SignUp from './pages/SignUp.jsx';
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Sewa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rent/detail/:id" element={<CarDetail />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
