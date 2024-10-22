import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import img1 from "../../assets/april 2024-3.png"
import img2 from "../../assets/slide1.jpg";
import img3 from "../../assets/slide2.jpg";
import img4 from "../../assets/slide3.jpg";
import img5 from "../../assets/slide4.jpg";
// import img6 from "../../assets/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function MySwiperComponent() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className="h-[400px]">
          <img src={img2} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-[400px]">
          <img src={img3} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-[400px]">
          <img src={img4} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-[400px]">
          <img src={img5} className="" alt="" />
        </SwiperSlide>
      
        {/* <SwiperSlide>
          <img src={img1} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} className="" alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
