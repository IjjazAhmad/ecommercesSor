import React from 'react'
import Card from '../../../Components/Card'
import DealSildCard from '../../../Components/DealSildCard'
import DealCard from '../../../Components/DealCard'
import ClientCard from '../../../Components/ClientCard'
import img from '../../../Assets/images/deal/box-tick.png'
import img1 from '../../../Assets/images/deal/crown.png'
import img2 from '../../../Assets/images/deal/shield-security.png'
import logo1 from '../../../Assets/images/deal/logo (1).png'
import logo2 from '../../../Assets/images/deal/logo (2).png'
import logo3 from '../../../Assets/images/deal/logo (3).png'
import logo4 from '../../../Assets/images/deal/logo (4).png'
import logo5 from '../../../Assets/images/deal/logo (5).png'
import client1 from '../../../Assets/images/deal/client (1).png'
import client2 from '../../../Assets/images/deal/client (2).png'
import client3 from '../../../Assets/images/deal/client (3).png'
import BlogCard from '../../../Components/BlogCard'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Deal() {
    return (
        <>
            <div className="container">
                <div className="hidden md:block my-5">
                    <div className="flex flex-wrap gap-7">
                        <div className='flex-auto w-72'>
                          
                            <Swiper
                    
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    loop={true}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                   
                >
                    <SwiperSlide>   <DealSildCard /></SwiperSlide>
                    <SwiperSlide>   <DealSildCard /></SwiperSlide>
                    <SwiperSlide>   <DealSildCard /></SwiperSlide>
                    
                  
                    
                </Swiper>
                        </div>

                        <div className='flex-auto w-16 '>
                            <div className='min-h-2/5'>
                                <Card />
                            </div>
                            <div className='min-h-2/5'>
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-footer p-6 rounded-lg">
                    <div className="flex flex-wrap items-center justify-between ">
                            <DealCard title={'Free delivery'} img={img} des={'on order above $50,00'} />
                            <DealCard title={'1 year warranty'} img={img2} des={'Avaliable warranty'} />
                            <DealCard title={'Best quality '} img={img1} des={'best quality in low price'} />
                       
                    </div>
                </div>
                <div className="my-10">
                <Swiper
                    
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
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
                    <SwiperSlide> <ClientCard title={'Savannah Nguyen'} img={client1} /></SwiperSlide>
                    <SwiperSlide> <ClientCard title={'Esther Howard'} img={client2} /></SwiperSlide>
                    <SwiperSlide> <ClientCard title={'Esther Howard'} img={client3} /></SwiperSlide>
                    <SwiperSlide> <ClientCard title={'Esther Howard'} img={client3} /></SwiperSlide>
                    <SwiperSlide> <ClientCard title={'Esther Howard'} img={client3} /></SwiperSlide>
                    <SwiperSlide> <ClientCard title={'Esther Howard'} img={client3} /></SwiperSlide>
                  
                    
                </Swiper>
                   
                </div>
                <div className="bg-footer  py-6 rounded-lg ">
                    <div className="flex flex-wrap gap-5 items-center justify-evenly">
                        <img src={logo1} className="w-40 md:w-[115px]" />
                        <img src={logo2} className="w-40 md:w-[115px]" />
                        <img src={logo3} className="w-40 md:w-[115px]" />
                        <img src={logo4} className="w-40 md:w-[115px]" />
                        <img src={logo5} className="w-40 md:w-[115px]" />
                    </div>
                </div>
                <div>
                <Swiper
                    className='showpagination my-5'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    loop={true}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        
                        576: {
                            slidesPerView: 1,
                        },
                      
                        768: {
                            slidesPerView: 1,
                        },
                       
                        992: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    <SwiperSlide> <BlogCard /></SwiperSlide>
                    <SwiperSlide> <BlogCard /></SwiperSlide>
                    <SwiperSlide> <BlogCard /></SwiperSlide>
                    <SwiperSlide> <BlogCard /></SwiperSlide>
                    <SwiperSlide> <BlogCard /></SwiperSlide>
                </Swiper>
                   
                </div>
            </div>
        </>
    )
}
