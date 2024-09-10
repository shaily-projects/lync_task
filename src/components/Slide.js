import React from "react";
import Slider from "react-slick";
import slideImage from "../images/slideImage.svg"

export default function Slide() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [       
      {
        breakpoint: 480,     
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className="slide">
        <div className="slide-card">
           <img src={slideImage}/>
           <div className="slider-card-content">
               <h4>LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮</h4>
               <p>LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.</p>
               <button className="read-more-btn">
               Read more
               </button>
           </div>
        </div>

      </div>
      <div className="slide">
      <div className="slide-card">
           <img src={slideImage}/>
           <div className="slider-card-content">
               <h4>LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮</h4>
               <p>LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.</p>
               <button className="read-more-btn">
               Read more
               </button>
           </div>
        </div>
      </div>
      <div className="slide">
      <div className="slide-card">
           <img src={slideImage}/>
           <div className="slider-card-content">
               <h4>LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮</h4>
               <p>LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.</p>
               <button className="read-more-btn">
               Read more
               </button>
           </div>
        </div>
      </div>
    
    </Slider>
  );
}
