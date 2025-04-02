import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ufc313Image from "./313.jpg";
import ufc314Image from "./314.jpg";
import ufc315Image from "./315.jpg";

const Carousel = () => {
  const events = [
    {
      id: 1,
      name: "UFC 313: Pereira vs. Ankalaev",
      date: "March 9, 2025",
      image: ufc313Image,
    },
    {
      id: 2,
      name: "UFC 314: Volkanovski vs. Lopes",
      date: "April 13, 2025",
      image: ufc314Image,
    },
    {
      id: 3,
      name: "UFC 315: Muhammad vs. Della Maddalena",
      date: "May 11, 2025",
      image: ufc315Image,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="carousel-container">
      <style>
        {`
          .carousel-container {
            width: 90%;
            max-width: 1400px;
            margin: 2rem auto;
            padding: 20px;
            background: rgba(0, 0, 0, 0.9);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          }

          .event-slide {
            text-align: center;
            color: white;
            background-color: black;
            border-radius: 15px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: scale(0.98);
            transition: transform 0.3s ease;
          }

          .event-image {
            width: 100%;
            height: 600px;
            object-fit: cover;
            border-bottom: 3px solid #ffcc00;
            display: block;
            transition: transform 0.3s ease;
          }

          .event-image:hover {
            transform: scale(1.02);
          }

          .event-details {
            padding: 25px;
            width: 100%;
            text-align: center;
            background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1));
          }

          h2 {
            margin: 10px 0;
            color: #ffcc00;
            font-size: 2.2rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          }

          p {
            color: #fff;
            font-size: 1.2rem;
            margin: 10px 0;
            font-weight: 500;
          }

          .custom-dots {
            bottom: -30px;
          }

          .custom-dots li button:before {
            color: #ffcc00;
            font-size: 12px;
            opacity: 0.5;
          }

          .custom-dots li.slick-active button:before {
            color: #ffcc00;
            opacity: 1;
          }

          .slick-prev, .slick-next {
            width: 40px;
            height: 40px;
            z-index: 1;
          }

          .slick-prev {
            left: 20px;
          }

          .slick-next {
            right: 20px;
          }

          .slick-prev:before, .slick-next:before {
            font-size: 40px;
            color: #ffcc00;
            opacity: 0.8;
            transition: opacity 0.3s ease;
          }

          .slick-prev:hover:before, .slick-next:hover:before {
            opacity: 1;
          }

          @media (max-width: 768px) {
            .carousel-container {
              width: 95%;
              padding: 10px;
            }

            .event-image {
              height: 400px;
            }

            h2 {
              font-size: 1.8rem;
            }

            p {
              font-size: 1rem;
            }
          }
        `}
      </style>
      <Slider {...settings}>
        {events.map((event) => (
          <div key={event.id} className="event-slide">
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-details">
              <h2>{event.name}</h2>
              <p>{event.date}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;