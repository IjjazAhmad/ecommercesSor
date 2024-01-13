import React from 'react'
import HeroCard from '../../../Components/HeroCard'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Hero() {
    return (
        <>
            <div className="container mt-10">
                <Swiper
                    
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    navigation
                    // pagination={{ clickable: true }}
                    loop={true}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        
                        576: {
                            slidesPerView: 1,
                        },
                      
                        768: {
                            slidesPerView: 2,
                        },
                       
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide> <HeroCard /></SwiperSlide>
                    <SwiperSlide> <HeroCard /></SwiperSlide>
                    <SwiperSlide> <HeroCard /></SwiperSlide>
                    <SwiperSlide> <HeroCard /></SwiperSlide>
                    
                </Swiper>
               
            </div>
        </>
    )
}
