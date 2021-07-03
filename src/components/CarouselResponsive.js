import React, { Component } from "react";
import Slider from "react-slick";
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';

export default class CarouselResponsive extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      swipeToSlide: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider-wrapper">
           <div className="carousel-arrow"><RiArrowLeftSLine onClick={this.previous}/></div>
          <div className="container-slider">
          <center>
        <Slider ref={c => (this.slider = c)}  {...settings}>
          {this.props.imagePaths.map((src, idx)=>{
            return  <div key={idx}>
                         <img className="carousel-image" alt="carousel slider image "src={src}/>
                    </div>
            })}
          
        </Slider>
        </center>
        </div>
        <div className="carousel-arrow2"><RiArrowRightSLine onClick={this.next}/></div>        
      </div>
    );
  }
}