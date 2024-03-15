import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

const Home = () => {
  return (
    <div className='container'>
      <div id='myCarousel' className='carousel slide' data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className='carousel-inner'>
          <div className='item active'><img src={image1} alt='imagee-1'></img></div>
          <div className='item'><img src={image2} alt='imagee-2'></img></div>
          <div className='item'><img src={image3} alt='imagee-3'></img></div>
        </div>

        <a className='left carousel-control' href='#myCarousel' data-slide='prev'>
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a className='right carousel-control' href='#myCarousel' data-slide='next'>
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className='sr-only'>Previous</span>
        </a>
      </div>
    </div>
  )
}

export default Home