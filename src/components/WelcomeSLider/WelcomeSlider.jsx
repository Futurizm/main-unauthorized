'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import SwiperCore from 'swiper'

import 'swiper/css'

SwiperCore.use([Pagination]);



const WelcomeSlider = () => {
    return ( 
        <div className="welcome__wrapper">
        <main className="welcome__main">
            <section className=" welcome__slider__section">
                <Swiper 
                    modules={Pagination}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ 
                        clickable: true,
                        el: '.swiper-pagination'
                    }}
                    loop={true}
                    speed={500}
                    className=" welcome__slider__section__container welcome___container"
                >

                    <SwiperSlide>
                        <div className=" welcome__slider__section__card">
                            <div className="welcome__slider__section__card__container">
                                <div className="welcome__slider__section__card__image">
                                    <img className="welcome__slider__section__card__img" src="/assets/images/ithub_welcome_banner.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className=" welcome__slider__section__card">
                            <div className="welcome__slider__section__card__container">
                                <div className="welcome__slider__section__card__image">
                                    <img className="welcome__slider__section__card__img" src="/assets/images/ithub_welcome_banner.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className=" welcome__slider__section__card">
                            <div className="welcome__slider__section__card__container">
                                <div className="welcome__slider__section__card__image">
                                    <img className="welcome__slider__section__card__img" src="/assets/images/ithub_welcome_banner.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div class="swiper-pagination"></div>
            </section>

            <section className="welcome__important">
                <div className="welcome__important__container welcome___container">
                    <h2 className="welcome__important__header">Авторизуйтесь, чтобы получить полный доступ к платформе</h2>
                </div>
            </section>
        </main>


    </div>
    );
}
 
export default WelcomeSlider;