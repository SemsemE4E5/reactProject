import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import './Slider.css';

const slideData = [
  {
    src: 'https://smartslider3.com/wp-content/uploads/slider132/image-slider-with-thumbnail1.jpeg',
    title: 'Slide 1',
    copy: 'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
  },
  {
    src: 'https://c.pxhere.com/images/dd/fb/32f6e4c9eff8c290ca3466946ce7-1595236.jpg!d',
    title: 'Slide 2',
    copy: 'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length);
  };

  return (
    <section className="container-fluid component2">
      <div className="carousel-slide container-fluid">
        <div className="carousel-inner">
          {slideData.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
              <img className="d-block w-100" src={slide.src} alt=""/>
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.title}</h5>
                <p>{slide.copy}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" onClick={prevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" onClick={nextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Slider;
