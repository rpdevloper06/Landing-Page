import { Autoplay, Pagination, A11y } from 'swiper/modules';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Slider.css';
import './Media.css';

//import awards from './img/award.jpg';
import fr from './img/edge-icons-asset-7.png'
import gr from './img/edge-icons-asset-8.png'
import qs from './img/edge-icons-asset-6.png'
import sm from './img/edge-icons-asset-2.png'
import ss from './img/edge-icons-asset-3.png'
import pm from './img/edge-icons-asset-4.png'
function Slider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        "delay": 4500,
        "disableOnInteraction": false
      }}



      navigation
      /*pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}*/




      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}



    >
      <SwiperSlide><div className='slide-steps'><div className='slide-step_r1'><img src={fr} className='slide' alt="slider" /></div><div className='slide-step_r2'><h5>Fade Resistant</h5><p>Aqua Technics pools have patented Pool ColourGuard® surface technology, which resists the effects of UV rays and chemicals, offering advanced fade-resistant protection.</p></div></div></SwiperSlide>
      <SwiperSlide><div className='slide-steps'><div className='slide-step_r1'><img src={gr} className='slide' alt="slider" /></div><div className='slide-step_r2'><h5>Graphene Nano Technology</h5><p>Revolutionary process infusing graphene nano technology into every Aqua Technics pool. Built like no other, a Graphene Nano-Tech pool is our strongest pool ever.</p></div></div></SwiperSlide>
      <SwiperSlide><div className='slide-steps'><div className='slide-step_r1'><img src={qs} className='slide' alt="slider" /></div><div className='slide-step_r2'><h5>Quality Assured</h5><p>Certified to build to AS/NZS 1838:2021 under license BMP 520101. We are measured and tested by an authorised, independent auditor. Anyone can say they build to the Standard. For your peace of mind always ask for a license number. We also comply to the AS/NZS ISO 9001 Quality System.</p></div></div></SwiperSlide>
      <SwiperSlide><div className='slide-steps'><div className='slide-step_r1'><img src={sm} className='slide' alt="slider" /></div><div className='slide-step_r2'><h5>Superior Materials</h5><p>All pools are manufactured using high performance, corrosion resistant, eco-friendly fibreglass with improved strength and stiffness. Our onsite gelcoat manufacturing facility means daily batching of materials for a better product. Only specialty materials are used - no general-purpose products.</p></div></div></SwiperSlide>
      <SwiperSlide><div className='slide-steps'><div className='slide-step_r1'><img src={ss} className='slide' alt="slider" /></div><div className='slide-step_r2'><h5>Superior Strength</h5><p>Full sized structural ribs, fully supported steps and bench seating and a wider edge beam mean the pool is independently structural and has no need for secondary engineering works.</p></div></div></SwiperSlide>
      <SwiperSlide><div className='slide-steps'><div className='slide-step_r1'><img src={pm} className='slide' alt="slider" /></div><div className='slide-step_r2'><h5>Precision Moulds</h5><p>New designs are built to exacting tolerances. The edge beams are true, the shapes geometrically perfect and the surface finish is without peer.</p></div></div></SwiperSlide>
    </Swiper>
  )
}

export default Slider;
