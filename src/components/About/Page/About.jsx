"use client";
import React from "react";
import styles from "./About.module.css";
import { FACEBOOK, INSTA, NEXT, PREVIOUS, TWITTER } from "@/constants/svg";
import Image from "@/components/Image/Image";
import { BTS1, BTS2, BTS3, LOGO } from "@/constants/images";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const colors = [
  { bg: "#eff6f6", fg: "#303e41" },
  { bg: "#eff6f6", fg: "#121111" },
  { bg: "#ede6e4", fg: "#303e41" },
  { bg: "#ede6e4", fg: "#121111" },
];
const slides = [
  {
    image: LOGO,
    title: "Creating Stories That Inspire",
    description: `Locomotive Film Produc%on is more than a film company; we're a storytelling powerhouse,
commited to crating captvatng narra%ves that inspire.`,
  },
  {
    title: " Our Mission & Journey",
    description: `At [Company Name], we bring compelling narratives to life. Founded in [Year], we’ve grown
    from a small team of passionate filmmakers into a dynamic production company known for
    [specific genres or styles].`,
    visuals: [BTS1, BTS2, BTS3],
  },
  {
    title: "Our Team & Work",
    description: `Our diverse team of writers, directors, and producers is dedicated to excellence. From feature
films to documentaries, our portfolio showcases projects that highlight our commitment to
quality`,
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
const About = () => {
  const totalItems = 4; // Total number of slides
  const anglePerSlide = 360 / totalItems;
  const [currentAngle, setCurrentAngle] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState(null);
  const [currentBg, setCurrentBg] = React.useState(colors[1]);

  // Update screen width on resize
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run this on the client side
      setScreenWidth(window.innerWidth);

      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="min-h-screen-minus-100 flex flex-col items-center justify-center w-full relative mt-[100px] bg-transparent backdrop-blur-lg backdrop-opacity-60 rounded-xl p-8">
      {" "}
      <div className={`w-9/12 ${styles.mainDiv} `}>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide>
              <div
                className={`${styles.slideBg} flex flex-col items-center justify-center relative text-white bg-black rounded-xl p-12
              
                  `}
              >
                <h1
                  className={`text-[#e1a80e] w-11/12 font-bold text-[18px] mb-1 mt-2 sm:w-11/12 sm:text-[24px] md:w-10/12 md:text-[28px] lg:w-8/12 lg:text-[32px] xl:w-8/12 2xl:w-7/12 text-center xl:text-[40px] 2xl:text-[40px]`}
                >
                  {slide.title}
                </h1>
                {slide.members && (
                  <div className=" flex flex-row items-center justify-evenly mt-4 w-8/12">
                    {slide.members.map((image) => (
                      <div className="w-6 h-6 sm:w-12 sm:h-12 rounded-full object-cover overflow-hidden">
                        <Image
                          className="w-7 sm:w-12 h-auto"
                          image={{ src: image.src, alt: image.alt }}
                        />
                      </div>
                    ))}
                  </div>
                )}
                <p
                  className={` text-white text-[12px] w-11/12  text-center sm:w-11/12 sm:text-[14px] md:w-9/12 md:text-[16px] lg:w-8/12 lg:text-[16px] xl:w-8/12 xl:text-[20px] mt-4`}
                >
                  {slide.description}
                </p>
                {slide.socialLinks && (
                  <div className="mt-4 w-auto flex flex-row items-center justify-center ">
                    <Link href={"/"}>
                      <FACEBOOK className={"w-4 h-4 text-white mr-2"} />
                    </Link>
                    <Link href={"/"}>
                      <INSTA className={"w-4 h-4 text-white mr-2"} />
                    </Link>
                    <Link href={"/"}>
                      <TWITTER className={"w-4 h-4 text-white mr-2"} />
                    </Link>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default About;
