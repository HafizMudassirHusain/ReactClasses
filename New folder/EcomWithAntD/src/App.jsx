import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Dashbord from './pages/Dashbord'; 
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Auth from './pages/Auth/Auth'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'

function App() {
  return (
    
    <BrowserRouter>
    <Routes > 
<Route path='/auth'>
<Route path='/auth' element={<Auth />}/>
<Route path='signin' element={<SignIn />}/>
<Route path='signup' element={<SignUp />}/>    
    </Route>
     

      <Route path='/' element={<Dashbord />}>
      <Route index element={<Home/>} />
      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<ProductDetail/>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/orders' element={<Orders />} />
      </Route>


    </Routes>
    </BrowserRouter>

  )
}

export default App;
