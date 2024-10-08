"use client";
import React, { useEffect } from "react";
import "@/styles/about/about.css";
import CountUp from "react-countup";
import "../../styles/about/background.css";
import { motion, useAnimation, useInView } from "framer-motion";
import "../../styles/colors.css";
import { Carousel } from "flowbite-react";
import Image from "next/image";

import Image1 from "../../public/team_members/groupPic.jpeg";
import Image2 from "../../public/team_members/trophyPic.jpg";
import Image3 from "../../public/team_members/participant3.jpg";
import Image4 from "../../public/team_members/participant1.jpg";
import Image5 from "../../public/team_members/participant2.jpg";
import Image6 from "../../public/team_members/trophyPic2.jpg";
import Image7 from "../../public/team_members/participant4.jpg";
import Image8 from "../../public/team_members/participant5.jpg";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <>
      <div className="w-screen flex-col sm:px-14 md:px-40 lg:px-40 xl:px-80 mt-36 sm:mt-56">
        <h1 className="text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo">
          What is Code Cubicle 3.0 ?
        </h1>
        <div className="mt-24 flex flex-col sm:flex-row w-full items-center justify-center gap-5 px-5">
          <div className="basis-1/3 border-2 rounded-2xl w-full p-5 glassy-effect aboutContainer1  ">
            <h1 className="text-4xl my-2 font-semibold blue-logo">
              <CountUp
                start={0}
                end={6}
                duration={4}
                className="font-bold blue-logo"
                enableScrollSpy={true}
              />
              +
            </h1>
            <p className="text-slate-200">Themes</p>
          </div>
          <div className="basis-1/3 border-2 rounded-2xl  w-full p-5 glassy-effect">
            <h1 className="text-4xl my-2 font-semibold text-rose-500">
              <CountUp
                start={0}
                end={36}
                duration={4}
                className="font-bold text-rose-500"
                enableScrollSpy={true}
              />
              +
            </h1>
            <p className="text-slate-200 ">Hours of Hacking</p>
          </div>
          <div className="basis-1/3 border-2 rounded-2xl  w-full p-5 glassy-effect">
            <h1 className="text-4xl my-2 font-semibold orange-logo">
              <CountUp
                start={1000}
                end={3500}
                duration={4}
                enableScrollSpy={true}
                className="font-bold orange-logo"
              />
              +
            </h1>
            <p className="text-slate-200 ">Participants</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-5 px-5 mt-5 container1 container2">
          <div className="basis-1/2 border-2 rounded-2xl sm:h-96 w-full p-5 overflow-y-scroll lg:overflow-auto glassy-effect ">
            <p className="text-slate-200 text-lg sm:text-xl sm:mt-3">
              Feeling overwhelmed with ideas but unsure where to bring them to
              life? 🚀 It’s time to turn your visions into action! 💡 Dive into
              Code Cubicle 3.0, the ultimate hackathon hosted by Geek Room! 🛠️
              <br />
              <br />
              Code Cubicle 3.0 isn’t just an event; it’s a playground for
              innovators where developers, designers, and tech enthusiasts come
              together to bring their boldest ideas to fruition. 🌍
              <br />
              <br />
              Not just about winning, it’s about learning new technologies,
              tackling real-world challenges, and gaining fresh perspectives.
              Here, every idea is a seed that could grow into something
              extraordinary. But it’s more than just code and competition—it’s
              about learning, connecting, and having a blast with a community of
              innovators. 🤝⚡ Collaborate, brainstorm, and push the limits with
              other passionate minds that share your love for tech.
              <br />
              <br />
              <p className="font-bold">
                Get ready to turn those late-night coffee-fueled thoughts into
                reality, your ideas are your power, code is your craft and CODE
                CUBICLE 3.0 is where it all comes together!🌐🛠️
              </p>
              <br />
              <br />
              See you all in the hackathon!🔍💻
            </p>
          </div>

          <div className="basis-1/2 border-2 h-96 rounded-2xl w-full p-4 sm:h-96 glassy-effect">
            <Carousel className="w-full h-full my-5 h-60 w-full sm:h-80 rounded-2xl" pauseOnHover>
              {images.map((image, index) => {
                return (
                  <Image
                    src={image}
                    key={index}
                    alt="i"
                    className="w-full h-full object-cover"
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
