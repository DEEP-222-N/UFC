import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const events = [
    {
      id: 1,
      name: "UFC 313: Pereira vs. Hill",
      date: "March 9, 2025",
      image: "https://prod.cosm-cdn.io/venue-events/Sports/MMA/UFC/UFC%20313/Program/All_Venues/Event_Assets/Event_Images/V2_UFC_313_keyart_16x9.webp",
    },
    {
      id: 2,
      name: "UFC 314: Volkanovski vs. Lopes",
      date: "April 13, 2025",
      image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_sm/s3/image/2025-02/041225-ufc-314-volkanovski-vs-lopes-TEMP-HERO.jpg?h=d1cb525d&itok=EnyAyYvA",
    },
    {
      id: 3,
      name: "UFC 315: Muhammad vs. Della Maddalena",
      date: "May 11, 2025",
      image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_sm/s3/image/2025-02/051025-ufc-315-muhammad-vs-della-maddalena-TEMP-HERO.jpg?h=d1cb525d&itok=utH-1o4Y",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <style>
        {`
          .carousel-container {
            width: 80%;
            margin: auto;
            padding: 20px;
          }
          .event-slide {
            text-align: center;
            color: white;
            background-color: black;
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .event-image {
            width: 100%;
            height: 500px;
            border-bottom: 2px solid #ffcc00;
            display: block;
          }
          .event-details {
            padding: 15px;
            width: 100%;
            text-align: center;
          }
          h2 {
            margin: 10px 0;
            color: #ffcc00;
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