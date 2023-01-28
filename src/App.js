import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/buyer/Home';
import Header from './pages/buyer/Header';
import SellerHome from './pages/seller/SellerHome';

function App() {
    return(
    <div>
      <Header/>
      <Home/>
      <Routes>
        <Route  path='/' exact component={Home}></Route>
        <Route path='/sell' component={SellerHome}></Route> 
      </Routes>
    </div>);
}

export default App;
