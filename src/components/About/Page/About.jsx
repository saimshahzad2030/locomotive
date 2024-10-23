"use client";
import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import { NEXT, PREVIOUS } from "@/constants/svg";
const slides = [
  {
    title: "Locomo've: Where Stories Pick Up Speed.",
    description: `Locomotive Film Produc%on is more than a film company; we're a storytelling powerhouse,
commited to crating captvatng narra%ves that inspire.`,
  },
  {
    title: "Locomotive Film Production",
    description: `Founded in 2021, Locomotive Film Production is dedicated to telling captivating stories through
film. Our passionate team of filmmakers, writers, and creatives has come together to bring our
first movie to life, set to be released soon.
We believe in the power of storytelling to entertain and inspire. With a focus on creativity and
authenticity, we aim to connect with audiences and spark meaningful conversations.
As we launch. our debut film, were excited to share our journey and look forward to creating
more impactful content in the future. Join us as we take this exciting step into the world of film`,
  },
  {
    title: "Our Mission",
    description: `At Locomotive Film Production, our mission is to be the best in the UAE film industry. We aim
to create outstanding movies that entertain and connect with audiences on a deeper level. Our
films are more than just stories; we strive to captivate the hearts and minds of our viewers,
leaving a lasting impression.
We believe in the power of film to inspire and spark conversations. Our dedicated team
collaborates to push creative boundaries, ensuring that every project reflects our values of
creativity, authenticity, and quality.
As we embark on this journey, we are committed to making a significant impact in cinema and
elevating storytelling in the UAE and beyond`,
  },
  {
    title: "Founder",
    description: `Taha Alhamid, the founder of Locomotive Film Production, dedicated seven years to crafting a
compelling story that would ultimately define the studio's vision. His relentless pursuit of
narrative depth and authenticity set the foundation for the company, emphasizing the importance
of storytelling in film. Under his leadership, Locomotive Film Production has become
synonymous with innovative and thought-provoking cinema, reflecting Alhamid's commitment
to pushing creative boundaries and exploring the human experience through film.`,
  },
  {
    title: "Executive producer",
    description: `Mariam Al Kaabi is an accomplished executive producer known for her strategic vision and
leadership in film production. With a keen eye for compelling narratives, she plays a pivotal role
in bringing creative projects to life. Al Kaabi's collaborative approach fosters strong partnerships
within the industry, positioning her as a driving force in developing impactful stories that
resonate with audiences. Her commitment to quality and innovation continues to shape the future
of film production.`,
  },
];
const About = () => {
  const totalItems = 5; // Total number of slides
  const anglePerSlide = 360 / totalItems;
  const [currentAngle, setCurrentAngle] = React.useState(0);

  const rotateSliderNext = () => {
    setCurrentAngle((prevAngle) => prevAngle - anglePerSlide);
  };

  const rotateSliderPrev = () => {
    setCurrentAngle((prevAngle) => prevAngle + anglePerSlide);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-2 relative">
      <div className={styles.banner}>
        <div
          className={styles.slider}
          style={{
            transform: `perspective(1000px) rotateY(${currentAngle}deg)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.item} p-4 flex flex-col items-center justify-center bg-white   rounded-2xl`}
              style={{
                transform: `rotateY(${
                  index * anglePerSlide
                }deg) translateZ(550px)`, // translateZ positions each item outward
              }}
            >
              <h1 className="text-slate-950 font-bold text-[10px]  mb-4">
                {slide.title}
              </h1>
              <p className="text-slate-950 text-[5px]">{slide.description}</p>
              {/* <Image
                src={`/assets/dragon_${index + 1}.jpg`}
                alt={`dragon_${index + 1}`}
                width={200}
                height={250}
              /> */}
            </div>
          ))}
        </div>
        {/* <div className={styles.content}>
          <h1 data-content="CSS ONLY" className={styles.h1}>
            CSS ONLY
          </h1>
          <div className={styles.author}>
            <h2>LUN DEV</h2>
            <p>
              <b>Web Design</b>
            </p>
            <p>Subscribe to the channel to watch many interesting videos</p>
          </div>
        </div> */}
      </div>
      <button
        id="prevBtn"
        className={`absolute left-2 sm:left-10 nav-button ${styles.prevBtn}`}
        onClick={rotateSliderPrev}
      >
        <PREVIOUS className={"w-8 h-8 text-white"} />
      </button>
      <button
        id="nextBtn"
        className={` absolute right-2 sm:right-10 nav-button ${styles.nextBtn}`}
        onClick={rotateSliderNext}
      >
        <NEXT className={"w-8 h-8 text-white"} />
      </button>
    </div>
  );
};

export default About;
