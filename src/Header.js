import React from "react";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from "./Home";
import SellerHome from "./seller/SellerHome";

function Header(){
    return(
        <Routes>
            <Route path="/sell" element= {<SellerHome/>}> Sell at ministore
            </Route>
        </Routes>
        
    );
}
export default Header