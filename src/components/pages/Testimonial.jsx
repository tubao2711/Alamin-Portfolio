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
              <div className="box">
                <i>
                  <FormatQuote />
                </i>
                <p>{val.text}</p>
                <div className="image">
                  <img src={val.image} alt="" />
                </div>
                <h3>{val.name}</h3>
                <label>{val.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
