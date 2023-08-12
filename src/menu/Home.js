import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/home.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";



const Home = () => {
  return (
    <div style={{ marginTop: "75px" }}>
      <>
        <Swiper
          style={{
            display: "grid",
            placeItems: "center",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"3"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiperCarousal"
          breakpoints={{
            800: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/WF7tMXZ/IMG-0086.jpg" alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/wJ430N5/IMG-0753.jpg" alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Q8RNLSd/IMG-E0621.jpg" alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/31M7JFY/IMG-E0769.jpg" alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/D5ntkCB/MQGL0426.jpg" alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/6g7sSsN/CXFQ2035.jpg" alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/gm0ZSk2/IMG-0019.jpg" alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/BcrTcWw/IMG-0025.jpg" alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/31M7JFY/IMG-E0769.jpg" alt="err" />
          </SwiperSlide>
        </Swiper>
      </>
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          color: "antiquewhite",
          backgroundColor: "black",
          padding: "5px",
        }}
      >
        RESEARCH AND DEVLOPMENTS
      </h2>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiperSlider"
          loop={true}
          style={{ paddingBottom: "0px" }}
        >
          <SwiperSlide>
            {" "}
            <img src="https://i.ibb.co/wd5HFDd/YIKC8003.jpg" alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzQtzW8QCdXoOZ4SZHh2kpbcDiW2vaosG51OcGjMEfudkBuWgkibkmKdTLvUZCB9mtIs&usqp=CAU"
              alt="err"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UtDMW0f9WCn0olEC173YKjHFVAG3v8aScQ&usqp=CAU"
              alt="err"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzQtzW8QCdXoOZ4SZHh2kpbcDiW2vaosG51OcGjMEfudkBuWgkibkmKdTLvUZCB9mtIs&usqp=CAU"
              alt="err"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UtDMW0f9WCn0olEC173YKjHFVAG3v8aScQ&usqp=CAU"
              alt="err"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzQtzW8QCdXoOZ4SZHh2kpbcDiW2vaosG51OcGjMEfudkBuWgkibkmKdTLvUZCB9mtIs&usqp=CAU"
              alt="err"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UtDMW0f9WCn0olEC173YKjHFVAG3v8aScQ&usqp=CAU"
              alt="err"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRELKPxCt9ovYLFbsNT79QUTegO6j5SkQ1a0Q&usqp=CAU"
              alt="err"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzQtzW8QCdXoOZ4SZHh2kpbcDiW2vaosG51OcGjMEfudkBuWgkibkmKdTLvUZCB9mtIs&usqp=CAU"
              alt="err"
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Home;
