import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/home.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";
import img1 from "../img db/carousal/CXFQ2035.JPG";
import img2 from "../img db/carousal/IMG_0019.JPG";
import img3 from "../img db/carousal/IMG_0025.JPG";
import img4 from "../img db/carousal/IMG_0086.JPG";
import img5 from "../img db/carousal/IMG_0154.JPG";
import img6 from "../img db/carousal/IMG_0753.JPG";
import img7 from "../img db/carousal/IMG_E0621.JPG";
import img8 from "../img db/carousal/MQGL0426.JPG";
import img9 from "../img db/carousal/IMG_E0769.JPG";

import immg1 from "../img db/slider/IMG_0111.JPG";
import immg2 from "../img db/slider/HPMP3298.JPG";
import immg3 from "../img db/slider/IMG_0035.JPG";
import immg4 from "../img db/slider/IMG_0682.WEBP";
import immg5 from "../img db/slider/DOYI5717.JPG";

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
            <img
              src="https://images.unsplash.com/photo-1691867213044-615b22104643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
              alt="err"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1691867213035-a287dc591b60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
              alt="err"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1691867200870-319345e05136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
              alt="err"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1691867137251-3b9c4b52eec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
              alt="err"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="err" />
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
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzQtzW8QCdXoOZ4SZHh2kpbcDiW2vaosG51OcGjMEfudkBuWgkibkmKdTLvUZCB9mtIs&usqp=CAU"
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
