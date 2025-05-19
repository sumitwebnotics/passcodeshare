import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logo1 from './assets/logos/car-logo1.png';
import logo2 from './assets/logos/car-logo2.png';
import logo3 from './assets/logos/car-logo3.png';
import logo4 from './assets/logos/car-logo4.png';
import logo5 from './assets/logos/car-logo5.png';
import logo6 from './assets/logos/car-logo6.png';
import logo7 from './assets/logos/car-logo7.png';
import logo8 from './assets/logos/car-logo8.png';
import logo9 from './assets/logos/car-logo9.png';
import logo10 from './assets/logos/car-logo10.png';
import logo11 from './assets/logos/car-logo11.png';
import logo12 from './assets/logos/car-logo12.png';
import logo13 from './assets/logos/car-logo13.png';
import logo14 from './assets/logos/car-logo14.png';
import logo15 from './assets/logos/car-logo15.png';
import logo16 from './assets/logos/car-logo16.png';

const LogoCarousel = () => {
    const settings = {
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        swipe: true,
        draggable: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    swipe: true,
                    draggable: true
                }
            }
        ]
    };
    const settingsNew = {
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        swipe: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    swipe: true,
                    draggable: true
                }
            }
        ]
    };

    return (
        <div className="logo-carousel">
            <Slider {...settings} >
                <div><img src={logo1} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo2} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo3} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo4} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo5} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo6} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo7} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo8} alt="logo" style={{ height: '40px' }} /></div>
            </Slider>
            <Slider {...settingsNew} style={{ marginTop: '15px' }}>
                <div><img src={logo9} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo10} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo11} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo12} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo13} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo14} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo15} alt="logo" style={{ height: '40px' }} /></div>
                <div><img src={logo16} alt="logo" style={{ height: '40px' }} /></div>
            </Slider>
        </div>
    );
};

export default LogoCarousel;
