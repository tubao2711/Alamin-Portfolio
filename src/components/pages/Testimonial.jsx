import React from "react";
import { testimonials } from "../data/yummyData";
import { FormatQuote } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <Slider {...settings}>
            {testimonials.map((val) => (
              <div className="box" data-aos="zoom-out-up">
                <i>
                  <FormatQuote />
                </i>
                <p>{val.text}</p>
                <div className="image" data-aos="zoom-out-right">
                  <img src={val.image} alt="" />
                </div>
                <h3 data-aos="zoom-out-left">{val.name}</h3>
                <label data-aos="zoom-out">{val.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
