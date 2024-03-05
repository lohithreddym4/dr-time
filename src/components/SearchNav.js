import React from 'react'

const SearchNav = () => {
  return (
    <div className='search-nav'>
      <div className="location">
        <select>
          <option>Location</option>
          <option>Chittoor</option>
          <option>Kadapa</option>
          <option>Kurnool</option>
          <option>Tirupati</option>
        </select>
      </div>

      <div className="search-bar">
        <div>
          <input type="text" placeholder='Search' />
        </div>
        <div><i class="fa-solid fa-magnifying-glass"></i></div>

      </div>
      <div></div>
    </div>
  )
}

export default SearchNav
