import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
import slideData from '../../data/alumniData';

const AlumniSlider = () => {

  return (
    <div className="alumni-slider relative h-[550px] w-full overflow-hidden rounded-lg bg-red-800">
      <h2 className="text-3xl font-bold text-white text-center pt-8 mb-4">
        Our Students And Alumni
      </h2>
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
        {slideData.map((alumnus) => (
          <SwiperSlide key={alumnus.index}>
            <div className="slide w-full h-full flex flex-col items-center justify-center">
              <img
                src={alumnus.image}
                alt={alumnus.alt}
                className="w-[150px] h-[150px] rounded-full object-cover mb-4"
              />
              <div className="info text-center text-white">
                <h3 className="text-xl font-bold mb-2">{alumnus.name}</h3>
                <p className="text-lg font-semibold mb-2">{alumnus.position}</p>

                <div className="flex flex-col items-center">
                  <p className="text-sm mb-1">Email ID: {alumnus.email}</p>
                  <p className="text-sm">Phone: {alumnus.tel}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AlumniSlider;
