import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ProductDetails from './page/ProductDetails'; // Complete the import statement

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
