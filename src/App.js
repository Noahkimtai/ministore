import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
    return(
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
    </div>);
}

export default App;
