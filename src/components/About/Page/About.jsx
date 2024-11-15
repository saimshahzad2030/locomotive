"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import styles from "./About.module.css";
import { BTS1, BTS2, BTS3, LOGO } from "@/constants/images";
import { FACEBOOK, INSTA, TWITTER } from "@/constants/svg";
import Image from "@/components/Image/Image";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";

const About = () => {
  const slides = [
    "assets/locomotive-slide-1.jpg",
    "assets/locomotive-slide-2.jpg",
    "assets/locomotive-slide-3.jpg",
    "assets/locomotive-slide-4.jpg",
    "assets/locomotive-slide-5.jpg",
  ];
  // const slides = [
  //   {
  //     image: LOGO,
  //     title: "Creating Stories That Inspire",
  //     description: `Locomotive Film Production is more than a film company; we're a storytelling powerhouse,
  //     committed to creating captivating narratives that inspire.`,
  //   },
  //   {
  //     title: "Our Mission & Journey",
  //     description: `At [Company Name], we bring compelling narratives to life. Founded in [Year], we’ve grown
  //     from a small team of passionate filmmakers into a dynamic production company known for
  //     [specific genres or styles].`,
  //     visuals: [BTS1, BTS2, BTS3],
  //   },
  //   {
  //     title: "Our Team & Work",
  //     description: `Our diverse team of writers, directors, and producers is dedicated to excellence. From feature
  //     films to documentaries, our portfolio showcases projects that highlight our commitment to
  //     quality.`,
  //     members: [
  //       { alt: "member1", src: "/assets/member-1.jpg" },
  //       { alt: "member2", src: "/assets/member-2.jpg" },
  //       { alt: "member3", src: "/assets/member-3.jpg" },
  //       { alt: "member4", src: "/assets/member-4.jpg" },
  //     ],
  //   },
  //   {
  //     title: "Get in Touch",
  //     description: `Interested in collaborating? Join us on our journey to explore new stories and experiences.`,
  //     socialLinks: true,
  //   },
  // ];
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 300);

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);
  const swiperRef = React.useRef(null);

  const handleHoverNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleHoverPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="flex flex-col items-center w-full justify-center h-[100vh]">
      {isReady ? (
        <div className={"flex flex-col items-center w-full  "}>
          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={1000}
            slidesPerView={"2"} // Allows dynamic width per slide
            allowTouchMove={false}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100, // Increased depth for more visual layering
              modifier: 2.5, // Adjust modifier for stronger 3D effect
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className={"swiper_container"}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className={`  swiperSlide`}>
                <img
                  className="w-full h-auto "
                  src={slide}
                  alt={`slide ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="swiper-button-next"
            onMouseEnter={handleHoverNext}
            onMouseLeave={() => {}}
          />
          <div
            className="swiper-button-prev"
            onMouseEnter={handleHoverPrev}
            onMouseLeave={() => {}}
          />
        </div>
      ) : (
        <Loader color={"#e1a80e"} />
      )}
    </div>
  );
};

export default About;
