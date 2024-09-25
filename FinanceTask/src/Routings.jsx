import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from "./pages/Analytics";
import App from "./App";
import './component/ExpenceTracker.css'


function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/analytics" element={<Analytics />} />
            </Routes>
        </BrowserRouter>
    );


}
export default Routing;