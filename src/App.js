import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  );
}

export default App;
