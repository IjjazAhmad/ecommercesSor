import React from 'react'
import HeroCard from '../../../Components/HeroCard'
import hero from '../../../Assets/images/hero.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Hero() {
    return (
        <>
            <div className=" hero container mb-5">
                <Swiper

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                  
                    pagination={{ clickable: true }}
                    loop={true}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="flex flex-wrap-reverse justify-around my-10 items-center">
                            <div className="text">
                                <h1 className='text-[36px] text-center sm:text-left font-[700] text-primary md:w-20'>Canon camera</h1>
                                <div className="flex flex-wrap md:gap-3 my-5">
                                    <button className="bg-warning w-full sm:w-[144px] py-4 my-3 sm:my-0 text-white rounded-2xl">Shop now</button>
                                    <button className="py-4 w-full sm:w-[144px] border-2 border-[#316887] text-primary rounded-2xl">View more</button>
                                </div>
                            </div>
                            <div className="img">
                                <img src={hero} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-wrap-reverse md:justify-around my-10 items-center">
                            <div className="text">
                                <h1 className='text-[36px] text-center sm:text-left font-[700] text-primary md:w-20'>Canon camera</h1>
                                <div className="flex flex-wrap md:gap-3 my-5">
                                    <button className="bg-warning w-full sm:w-[144px] py-4 my-3 sm:my-0 text-white rounded-2xl">Shop now</button>
                                    <button className="py-4 w-full sm:w-[144px] border-2 border-[#316887] text-primary rounded-2xl">View more</button>
                                </div>
                            </div>
                            <div className="img">
                                <img src={hero} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-wrap-reverse md:justify-around my-10 items-center">
                            <div className="text">
                                <h1 className='text-[36px] text-center sm:text-left font-[700] text-primary md:w-20'>Canon camera</h1>
                                <div className="flex flex-wrap md:gap-3 my-5">
                                    <button className="bg-warning w-full sm:w-[144px] py-4 my-3 sm:my-0 text-white rounded-2xl">Shop now</button>
                                    <button className="py-4 w-full sm:w-[144px] border-2 border-[#316887] text-primary rounded-2xl">View more</button>
                                </div>
                            </div>
                            <div className="img">
                                <img src={hero} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
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
