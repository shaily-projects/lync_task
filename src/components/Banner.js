import React from 'react';
import { Bannerarrow } from '../assets/icon';


const Banner = () => {
  return (

    <div className='banner-wrapper'>
      <div className='banner-content'>
          <h1>Launch Your Game
          on <span>Web 3.0 </span>  in Minutes</h1>
          <p>We help game developers to launch their game on Web 3.0, by keeping blockchain complexities aside with WebWorld SDKs!</p>
          <div className='banner-btn-wrapper'>
            <button className='banner-primary-btn'>
            Get started
            <Bannerarrow/>
            </button>
            <button className='banner-secondary-btn bg'>
            View Docs
            <Bannerarrow/>
            </button>
          </div>
      </div>
    </div>


  );
}

export default Banner;
