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

const About = () => {
  const slides = [
    {
      image: LOGO,
      title: "Creating Stories That Inspire",
      description: `Locomotive Film Production is more than a film company; we're a storytelling powerhouse,
      committed to creating captivating narratives that inspire.`,
    },
    {
      title: "Our Mission & Journey",
      description: `At [Company Name], we bring compelling narratives to life. Founded in [Year], we’ve grown
      from a small team of passionate filmmakers into a dynamic production company known for
      [specific genres or styles].`,
      visuals: [BTS1, BTS2, BTS3],
    },
    {
      title: "Our Team & Work",
      description: `Our diverse team of writers, directors, and producers is dedicated to excellence. From feature
      films to documentaries, our portfolio showcases projects that highlight our commitment to
      quality.`,
      members: [
        { alt: "member1", src: "/assets/member-1.jpg" },
        { alt: "member2", src: "/assets/member-2.jpg" },
        { alt: "member3", src: "/assets/member-3.jpg" },
        { alt: "member4", src: "/assets/member-4.jpg" },
      ],
    },
    {
      title: "Get in Touch",
      description: `Interested in collaborating? Join us on our journey to explore new stories and experiences.`,
      socialLinks: true,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full justify-center h-[100vh]">
      <div className={"flex flex-col items-center w-full "}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
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
              {slide.image && (
                <div className="flex flex-col items-center justify-center w-[100px] md:w-[400px]">
                  <img
                    src={LOGO.src}
                    alt={LOGO.alt}
                    className="h-auto w-[78px] md:w-[120px] lg:w-[200px]"
                  />
                </div>
              )}
              {slide.visuals && (
                <div className="flex flex-row items-center justify-evenly mt-4 w-full">
                  {slide.visuals.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="w-3/12 h-auto object-cover overflow-hidden flex flex-col items-center"
                    >
                      <Image
                        className="w-30 h-auto"
                        image={{ src: image.src, alt: image.alt }}
                      />
                    </div>
                  ))}
                </div>
              )}
              <h1 className="text-[#e1a80e] font-bold text-[12px] mb-1 mt-2 xl:text-[28px] w-full text-center">
                {slide.title}
              </h1>
              <p className="text-center font-normal text-white text-[7px] xl:text-[20px]">
                {slide.description}
              </p>
              {slide.socialLinks && (
                <div className="w-auto flex flex-row items-center justify-center mt-4">
                  <Link href="/">
                    <FACEBOOK className="w-4 h-4 text-white mr-2" />
                  </Link>
                  <Link href="/">
                    <INSTA className="w-4 h-4 text-white mr-2" />
                  </Link>
                  <Link href="/">
                    <TWITTER className="w-4 h-4 text-white mr-2" />
                  </Link>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    </div>
  );
};

export default About;
