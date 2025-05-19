import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import mondayLogo from './assets/logos/monday.png';
import thermatruLogo from './assets/logos/thermatru.png';
import biontechLogo from './assets/logos/biontech.png';
import focusitLogo from './assets/logos/focusit.png';

const LogoCarousel = () => {
    const settings = {
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 4,
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
                <div><img src={mondayLogo} alt="Monday" style={{ height: '40px' }} /></div>
                <div><img src={thermatruLogo} alt="Thermatru" style={{ height: '40px' }} /></div>
                <div><img src={biontechLogo} alt="BioNTech" style={{ height: '40px' }} /></div>
                <div><img src={focusitLogo} alt="FocusIT" style={{ height: '40px' }} /></div>

            </Slider>
        </div>
    );
};

export default LogoCarousel;
