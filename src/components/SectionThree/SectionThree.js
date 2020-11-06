import React from 'react'
import { Button, ButtonLink, SectionBoldTitle, SectionSmallText } from '../../globalStyles'
import { Image, Section, SectionContainer, SectionSlide, SectionSlideWrapper } from '../SectionThree/SectionThree.styles'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, EffectCoverflow, Autoplay} from 'swiper'
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss'


SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

function SectionThree({
    headLine,
    feedback,
    button
}) {
    
    return (
        <Section>
            <SectionContainer>
                <SectionBoldTitle fontBig fontSmall fontColor> 
                    {headLine}
                </SectionBoldTitle>

                <SectionSlide>
                <Swiper
                        id='main'
                        tag='section'
                        wrapperTag='ul'
                        grabCursor='true'
                        loop='true'
                        centeredSlides='true'
                        spaceBetween={10}
                        breakpoints={{
                            1440: {
                                slidesPerView: 3,
                            },
                            800: {
                                slidesPerView: 2,
                            },
                            500: {
                                slidesPerView: 1
                            }
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        pagination = {{
                            el: '.swiper-pagination',
                            type: 'progressbar',
                        }}
                        >
                            {
                                feedback.map(({id,image, name, comment}) => 
                                <SwiperSlide
                                key={id}
                                style={{listStyle: "none"}}
                                tag='li'
                                >
                                    <Image src={image}/>
                                    <SectionSlideWrapper>
                                        {/* <Image src={image}/> */}
                                        <SectionBoldTitle fontColor >
                                            {name}
                                        </SectionBoldTitle>
                                        <SectionSmallText center fontSmall reCenter>
                                            {comment}
                                        </SectionSmallText>
                                    </SectionSlideWrapper>
                                </SwiperSlide>
                                )
                            }
                        </Swiper>
                </SectionSlide>
                <Button>
                    <ButtonLink to='/get-started'>
                        {button}
                    </ButtonLink>
                </Button>
            </SectionContainer>
        </Section>
    )
}

export default SectionThree
