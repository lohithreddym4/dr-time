import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import SearchNav from './components/SearchNav';
import Home from './components/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='fixed'>
          <Navbar />
          <SearchNav />
        </div>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
