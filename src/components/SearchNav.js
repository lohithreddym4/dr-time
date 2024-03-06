import React from 'react'

const SearchNav = () => {
  return (
    <div className='search-nav'>
      <div className="location">
        <div className='inner-loc'>
        <span >
        <i class="fa-solid fa-location-dot show-less" ></i>
<span>
<select className="no-show">
          <option>Tirupati</option>
          <option>Chittoor</option>
          <option>Nandyal</option>
          <option>Kadapa</option>
          <option>Kurnool</option>
          
        </select>
</span>
        </span>
        </div>
      </div>

      <div className="search-bar">
          <input type="text" placeholder='Search for hospitals...' />
        <button className='mag-glass'>
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>

      </div>
      <div></div>
    </div>
  )
}

export default SearchNav
