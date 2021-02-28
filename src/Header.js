import React from 'react'
import "./Header.css";
import logo from "./images.png";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={logo}/>
      <div classname="header_search">
        <input className="header_searchInput" type="text"/>
        <SearchIcon className="header_searchIcon"/>

      </div>
      <div className="navbar">
        <div className='navbar_op'>
          <span className='line1'>Hi kevin</span>
          <span className='line2'>sign in</span>
        </div>

        <div className='navbar_op'>
          <span className='line1'>Returns</span>
          <span className='line2'>Orders</span>
        </div>

        <div className='navbar_op'>
          <span className='line1'>Your </span>
          <span className='line2'>Weed</span>
        </div>

<div className="header_basket">
  <ShoppingBasketIcon/>
  <span className="Line2 header_basketCount">0</span>
</div>

      </div>

    </div>
  )
}

export default Header;
