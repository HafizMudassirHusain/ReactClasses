
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Filter from './componets/FlightListing/Filter'
import Form from './componets/FlightListing/Form'
import Home from './Pages/Home'
import FlightDetails from './Pages/FlightDetails'

function App() {
 
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/flightdetails' element={<FlightDetails />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
