import React from 'react'
import hero from '../../assets/images/hero.png'
import '../Hero/hero.css'
function Hero() {
  return (
    <>
    
    
    <div id="hero">
      <div className="background">
         <img src={hero} alt="" /> 
        {/* <video src={video} type="video/mp4"></video> */}
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
            tenetur!
          </p>
        </div>
       {/* <div className="search">
          {/* <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search Your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div> */} 
          {/* <button>Explore Now</button> */}
        </div> */
      {/* </div> */}
    </div>
</>
  )
}




export default Hero