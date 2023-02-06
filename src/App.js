import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/buyer/Home';
import Header from './pages/buyer/Header';
import SellerHome from './pages/seller/SellerHome';
import RecentlyViewed from "./pages/buyer/RecentlyViewed";

function App() {
    return(
    <div>
      <Header/>
      <Routes>
        <Route  exact path="/" element={<Home/>}> </Route>
        <Route path="/sell" element={<SellerHome/>}> </Route> 
        <Route path="/recent" element= {<RecentlyViewed/>}> </Route>
      </Routes>
    </div>);
}

export default App;
