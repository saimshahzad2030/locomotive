"use client";
import React from "react";
import styles from "./About.module.css";
import { FACEBOOK, INSTA, NEXT, PREVIOUS, TWITTER } from "@/constants/svg";
import Image from "@/components/Image/Image";
import { BTS1, BTS2, BTS3, LOGO } from "@/constants/images";
import Link from "next/link";
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
  //   {
  //     title: "Executive producer",
  //     description: `Mariam Al Kaabi is an accomplished executive producer known for her strategic vision and
  // leadership in film production. With a keen eye for compelling narratives, she plays a pivotal role
  // in bringing creative projects to life. Al Kaabi's collaborative approach fosters strong partnerships
  // within the industry, positioning her as a driving force in developing impactful stories that
  // resonate with audiences. Her commitment to quality and innovation continues to shape the future
  // of film production.`,
  //   },
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
  // Calculate the current active slide index based on the angle
  const activeSlideIndex =
    Math.round((360 - (currentAngle % 360)) / anglePerSlide) % totalItems;

  const rotateSliderNext = () => {
    const newBg = colors[Math.floor(Math.random() * colors.length)];
    setCurrentBg(newBg); // Set the new background color
    setCurrentAngle((prevAngle) => prevAngle - anglePerSlide);
  };

  const rotateSliderPrev = () => {
    const newBg = colors[Math.floor(Math.random() * colors.length)];
    setCurrentBg(newBg); // Set the new background color
    setCurrentAngle((prevAngle) => prevAngle + anglePerSlide);
  };

  return (
    <div
      className="flex flex-col items-center w-full"
      style={{
        backgroundColor: currentBg.bg, // Set the dynamic background color
      }}
    >
      <div className="container mx-auto w-full">
        <div className="flex flex-col items-center justify-center w-full mt-2 relative">
          {/* <h1 className="w-full text-center font-bold text-white text-3xl">
            About Us
          </h1> */}

          {/* Add blurred background behind the active slide */}

          <div className={`${styles.banner} `}>
            {/* <div className={`z-[200] ${styles["blurred-background"]}`}></div> */}
            <div
              className={`${styles.slider} `}
              style={{
                transform: `perspective(${
                  screenWidth > 1300
                    ? 1200
                    : screenWidth > 1023 && screenWidth < 1301
                    ? 1200
                    : screenWidth > 786 && screenWidth < 1024
                    ? 1500
                    : screenWidth > 530 && screenWidth < 787
                    ? 1500
                    : screenWidth > 399 && screenWidth < 531
                    ? 1800
                    : 1000
                }px) rotateY(${currentAngle}deg)`,
              }}
            >
              <div
                className={` flex flex-col items-center justify-center ${styles["center-div"]}`}
              >
                <div
                  className={`h-40 w-40 flex flex-col items-center justify-center rounded-full overflow-hidden object-cover ${styles["center-div-child"]}`}
                >
                  <Image image={LOGO} className={"h-10 w-auto"} />
                </div>
              </div>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`${
                    styles.item
                  } p-4 flex flex-col items-center justify-center rounded-2xl ${
                    activeSlideIndex !== index ? styles["inactive-slide"] : ""
                  }`}
                  style={{
                    transform: `rotateY(${
                      index * anglePerSlide
                    }deg) translateZ(${
                      screenWidth > 1300
                        ? 400
                        : screenWidth > 1023 && screenWidth < 1301
                        ? 330
                        : screenWidth > 768 && screenWidth < 1024
                        ? 300
                        : screenWidth > 530 && screenWidth < 787
                        ? 250
                        : screenWidth > 399 && screenWidth < 531
                        ? 150
                        : 130
                    }px)`,
                    backgroundColor:
                      activeSlideIndex === index
                        ? "rgba(0, 0, 0, 1)"
                        : // : "#e1a80e",
                          "#e1a80e",
                    opacity: activeSlideIndex === index ? 1 : 0.5,
                  }}
                >
                  {activeSlideIndex == index && slide.image && (
                    <div className="flex flex-col items-center justify-center w-5/12 ">
                      <img
                        src={LOGO.src}
                        alt={LOGO.alt}
                        className={"h-auto w-8/12"}
                      />
                    </div>
                  )}
                  {activeSlideIndex == index && slide.visuals && (
                    <div className=" flex flex-row items-center justify-evenly mt-4 w-full">
                      {slide.visuals.map((image) => (
                        <div className="w-3/12 h-auto object-cover overflow-hidden">
                          <Image
                            className="w-10 h-auto"
                            image={{ src: image.src, alt: image.alt }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {activeSlideIndex == index && slide.members && (
                    <div className=" flex flex-row items-center justify-evenly mt-4 w-11/12">
                      {slide.members.map((image) => (
                        <div className="w-6 h-6 rounded-full object-cover overflow-hidden">
                          <Image
                            className="w-7 sm:w-10 h-auto"
                            image={{ src: image.src, alt: image.alt }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {activeSlideIndex == index && (
                    <h1
                      className={`${
                        activeSlideIndex === index
                          ? "text-[#e1a80e]"
                          : colors[Math.floor(Math.random() * 4)].fg
                      } font-bold text-[10px] mb-1 mt-2 xl:text-[15px]`}
                    >
                      {slide.title}
                    </h1>
                  )}
                  {activeSlideIndex == index && (
                    <p
                      className={`${
                        activeSlideIndex === index
                          ? "text-white"
                          : colors[Math.floor(Math.random() * 4)].fg
                      } text-[7px] xl:text-[10px]`}
                    >
                      {slide.description}
                    </p>
                  )}
                  {activeSlideIndex == index && slide.socialLinks && (
                    <div className="w-auto flex flex-row items-center justify-center mt-4">
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
              ))}
            </div>
          </div>

          <button
            id="prevBtn"
            className={`
              border-none
              outline-none
              z-[1000] ${
                screenWidth > 530 && screenWidth < 679
                  ? "w-[100px]"
                  : screenWidth > 350 && screenWidth < 531
                  ? "w-[70px]"
                  : "w-[50px]"
              } sm:w-[150px] md:w-[220px] lg:w-[280px] xl:w-[400px] bg-[#e1a80e] bg-opacity-0  absolute left-2 sm:left-10  h-80 nav-button ${
              styles.prevBtn
            }`}
            onClick={rotateSliderPrev}
          >
            {/* <PREVIOUS className={"w-8 h-8 text-white"} /> */}
          </button>
          <button
            id="nextBtn"
            className={`
              border-none
              outline-none
              z-[1000] ${
                screenWidth > 530 && screenWidth < 679
                  ? "w-[100px]"
                  : screenWidth > 350 && screenWidth < 531
                  ? "w-[70px]"
                  : "w-[50px]"
              } sm:w-[150px] md:w-[180px] lg:w-[330px] xl:w-[440px] bg-[#e1a80e] bg-opacity-0   absolute right-2 sm:right-10  h-80 nav-button ${
              styles.nextBtn
            }`}
            onClick={rotateSliderNext}
          >
            {/* <NEXT className={"w-8 h-8 text-white"} /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
