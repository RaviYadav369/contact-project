import React from "react";
import Slider from "react-slick";
import Card from "../Card/Card";

const CardCarousel = (props) => {
  const { posters, title, subtitle, isDark, config } = props;

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
      {config && 
      <Slider {...config}>
      {posters.map((each, index) => (
        <Card {...each} isDark={isDark} key={index} />
      ))}
    </Slider>
      }
      {!config && 
      <Slider {...settings}>
      {posters.map((each, index) => (
        <Card {...each} isDark={isDark} key={index} />
      ))}
    </Slider>
      }
    </>
  );
};

export default CardCarousel