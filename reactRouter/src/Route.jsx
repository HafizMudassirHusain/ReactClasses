import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header'
import AboutUs from "./pages/AboutUS";
import UseEffect from "./pages/UseEffect";
import ContactUs from "./pages/ContactUs";
import App from './App'
import ProductDetails from "./pages/ProductDetail";
function AppRoutes(){
return(
    <>
      <BrowserRouter>
        <Header />
        <Routes>
     <Route index path="/" element={<App />} />
     <Route path="/AboutUs" element={<AboutUs />} />
     <Route path="/ContactUs" element={<ContactUs />} />
     <Route path="/UseEffect" element={<UseEffect />} />
     <Route path="/UseEffect/:title/id/:id" element={<ProductDetails />} />
     {/* <Route path="*" element={<App />} /> */}
     </Routes>;
     </BrowserRouter>
    </>
)
}
export default AppRoutes;




