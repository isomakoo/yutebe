import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./HomePage.css";
import "swiper/css";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>   
    <div className="hero-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="home-list">
            <nav className="home-list">
              <iframe
                className="home-img2"
                width="270"
                height="150"
                src="https://www.youtube.com/embed/gzBT0_bjUNA?list=RDq53P21aTQj0"
                title="Miyagi &amp; Andy Panda - Там ревели горы (2020)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="home-title">Miyagi Andy Panda Там ревели</p>
              <b className="home-teks">80k views · 3 days ago</b>
            </nav>
          </SwiperSlide>
          <SwiperSlide>
            <nav className="home-list">
              <iframe
                className="home-img2"
                width="270"
                height="150"
                src="https://www.youtube.com/embed/CtFayRMVuAg"
                title="Simon Massey - A Brief History of Creation"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="home-title">A Brief History Of Creation</p>
              <b className="home-teks">80k views · 3 days ago</b>
            </nav>
          </SwiperSlide>
          <SwiperSlide>
            <nav className="home-list">
              <iframe
                className="home-img2"
                width="270"
                height="150"
                src="https://www.youtube.com/embed/ag6UiC-jQ1g"
                title="RYBAKOV &amp; Витя АК - Заряжаем бабки (Премьера клипа 2023)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="home-title">Selecting The Right Hotel</p>
              <b className="home-teks">123k views · 1 months ago</b>
            </nav>
          </SwiperSlide>
          <SwiperSlide>
            <nav className="home-list">
              <iframe
                className="home-img2"
                width="270"
                height="150"
                src="https://www.youtube.com/embed/exX4mw3FKdQ"
                title="Mirshakar Fayzulloyev MALADES stand-up konsert dasturi"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="home-title">Asteroids</p>
              <b className="home-teks">43k views · 12 days ago</b>
            </nav>
          </SwiperSlide>
          <SwiperSlide>
            <nav className="home-list">
              <iframe
                className="home-img2"
                width="270"
                height="150"
                src="https://www.youtube.com/embed/HYi4a2eZL50"
                title="MORGENSHTERN - DINERO (Official Video, 2021)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="home-title">Telescopes 101</p>
              <b className="home-teks">80k views · 3 days ago</b>
            </nav>
          </SwiperSlide>
          <SwiperSlide>
            <nav className="home-list">
              <iframe
                className="home-img2"
                width="270"
                height="150"
                src="https://www.youtube.com/embed/6AiwfHizCfU?list=RDGMEMCMFH2exzjBeE_zAHHJOdxgVM6AiwfHizCfU"
                title="COVER KIDS - FIRDAVS MUXTOROV VA OZODA NURSAIDOVA | YOR-YOR"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="home-title">FIRDAVS MUXTOROV YOR-YOR</p>
              <b className="home-teks">580k views · 18 days ago</b>
            </nav>
          </SwiperSlide>
          <SwiperSlide>
            <nav className="home-list">
              <iframe
                className="home-img2"
                width="270"
                height="150"
                src="https://www.youtube.com/embed/ygSMjmbJgUs"
                title="Artist - ABROR DO&#39;STOV | GO&#39;ZALIM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="home-title">Artist - ABROR DO'STOV | GO'ZALIM</p>
              <b className="home-teks"> 5,5mln views · 18 days ago</b>
            </nav>
          </SwiperSlide>
          <SwiperSlide>
            <nav className="home-list">
              <iframe
                className="home-img2"
                width="270"
                height="150"
                src="https://www.youtube.com/embed/BRI1rETeCFo"
                title="Xamdam Sobirov - MALOHAT (BASS REMIX 💥)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="home-title">Xamdam Sobirov - MALOHAT</p>
              <b className="home-teks"> 55mln views · 18 days ago</b>
            </nav>
          </SwiperSlide>
          <SwiperSlide>
            <nav className="home-list">
              <iframe
                className="home-img2"
                width="270"
                height="150"
                src="https://www.youtube.com/embed/gPSSoRJLePM"
                title="Ortiq Otajonov - Boshqacha (audio)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="home-title">Ortiq Otajonov - Boshqacha (audio)</p>
              <b className="home-teks"> 5,5mln views · 18 days ago</b>
            </nav>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
