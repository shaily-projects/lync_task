import React from "react";
import Slider from "react-slick";
import { Blank } from "../assets/icon";

export default function Reviewslider() {
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
                <div className="slide-card-review">

                    <p>Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!</p>

                    <div className="slide-card-review-content">
                        <Blank />
                        <div className="review-details">
                            <h5>Alex George</h5>
                            <p>CEO, Polygon</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="slide">
                <div className="slide-card-review">

                    <p>Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!</p>

                    <div className="slide-card-review-content">
                        <Blank />
                        <div className="review-details">
                            <h5>Alex George</h5>
                            <p>CEO, Polygon</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="slide">
                <div className="slide-card-review">

                    <p>Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!</p>

                    <div className="slide-card-review-content">
                        <Blank />
                        <div className="review-details">
                            <h5>Alex George</h5>
                            <p>CEO, Polygon</p>
                        </div>
                    </div>
                </div>

            </div>
          
           

        </Slider>
    );
}
