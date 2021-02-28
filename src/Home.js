import React from 'react'
import "./Home.css";
import logo from "./images2.jpg"
import Product from './Product';

function Home() {
  return (
    <div className="home">
      
      <div className="home_container">


      <img className="home_banner" src={logo} alt=""></img>

  

      <div className="home_row">
       <Product/>
        <Product/>

      </div>

      <div className="home_row">
 {/*product*/}
  {/*product*/}
   {/*product*/}

      </div>

    </div>
    </div>
  )
}

export default Home;
