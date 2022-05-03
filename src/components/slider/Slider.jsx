import React from 'react'
import "./slider.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const slide = () => {

    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}

          spaceBetween={0}
          slidesPerView={2}
          navigation
          loop={true}
          autoplay={{delay:5000.}}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="main-Slider"
        >
          <SwiperSlide>
              <img src='https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg' alt=''></img>
          </SwiperSlide>
          <SwiperSlide>
          <img src='https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
          </SwiperSlide>
          <SwiperSlide><img src='https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
          </SwiperSlide>
         
          ...
        </Swiper>
      );
 
}

export default slide