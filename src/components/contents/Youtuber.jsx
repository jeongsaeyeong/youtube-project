import { youtuberText } from '../../data/youtuber'
import React from 'react'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const Youtuber = () => {
    return (
        <section id='youtuber'>
            <h2>음악 유튜버 모음</h2>
            <div className="youtuber__inner">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        250: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 6,
                        },
                        1400: {
                            slidesPerView: 7,
                        },
                        1600: {
                            slidesPerView: 8,
                        },
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {youtuberText.map((yout, key) => {
                        return (
                            <SwiperSlide className="youtuber play__icon" key={key} >
                                <div className="youtuber__img">
                                    <Link to={`/chnnel/${yout.channelId}`}>
                                        <img src={yout.img} alt={yout.title} />
                                    </Link>
                                </div>
                                <div className="youtuber__info">{yout.anothor}</div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Youtuber