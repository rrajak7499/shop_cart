import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
      <div className="container slider" >
    <Slider  {...settings}>
      <div >
      <img src="https://rukminim1.flixcart.com/flap/844/140/image/cb5298e393f1765c.jpg?q=50" alt="1" />
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/flap/844/140/image/cb5298e393f1765c.jpg?q=50" alt="1" />
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/flap/844/140/image/cb5298e393f1765c.jpg?q=50" alt="1" />
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/flap/844/140/image/cb5298e393f1765c.jpg?q=50" alt="1" />
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/flap/844/140/image/cb5298e393f1765c.jpg?q=50" alt="1" />
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/flap/844/140/image/cb5298e393f1765c.jpg?q=50" alt="1" />
      </div>
    </Slider>
    </div>
  );
}