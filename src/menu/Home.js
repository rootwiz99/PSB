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

const Home = () => {
  return (
    <div style={{ marginTop: "75px" }}>
      <>
        <Swiper
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
            <img src={img1} alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="err" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="err" />
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
