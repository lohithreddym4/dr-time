import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import React from 'react';
import SearchNav from './components/SearchNav';
function App() {
  return (
    <div>
    <BrowserRouter>
    <div className='fixed'>
    <Navbar/>
      <SearchNav/>
    </div>
      <Categories/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
