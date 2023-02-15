import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/buyer/Home';
import Header from './pages/buyer/Header';
import SellerHome from './pages/seller/SellerHome';
import RecentlyViewed from "./pages/buyer/RecentlyViewed";
import AddCart from './pages/buyer/AddCart';
import Profile from './pages/buyer/Profile';

function App() {

    return(
    <div>
      <Header/>
      <Routes>
        <Route  exact path="/" element={<Home/>}/>
        <Route path = "/sell" element= {<SellerHome/>}/> 
        <Route path = "/recent" element= {<RecentlyViewed/>}/>
        <Route path ='/cart' element = {<AddCart/>}/>
        <Route path = '/profile' element = {<Profile/>}/>
        <Route path="*" component = {notFound}/>
      </Routes>
    </div>);

  function notFound(){
    return <>This Page Does not exist</>
  }
}

export default App;
