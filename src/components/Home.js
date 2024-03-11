import React from 'react'
import { Link } from 'react-router-dom';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image5 from './image5.jpg';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div className='slider-t'>
          <div className='slider'>
            <img src={image5} id='slide-5' alt='loading'></img>
            <img src={image2} id='slide-2' alt='loading'></img>
            <img src={image3} id='slide-3' alt='loading'></img>
            <img src={image1} id='slide-1' alt='loading'></img>
          </div>
          <div className='slider-nav'>
            <Link to='#slide-5'></Link>
            <Link to='https://www.youtube.com'></Link>
            <Link src={image3}></Link>
            <Link to='#slide-1'></Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home