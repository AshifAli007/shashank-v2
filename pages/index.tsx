import React, { useState } from "react";
import Head from "next/head";
// import { cubicBezier, motion } from "framer-motion";
import { Navigation } from "../components/Navigation/Navigation";
import useSwr from "swr";
import ReactGa from "react-ga";

interface indexProps { }

interface Ireply {
  id: number;
  technologyName: string;
  imgSource: string;
}


const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

// const transition: { duration: number; ease: any } = {
//   duration: 1.4,
//   ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
//   // ease: [0.6, 0.01, -0.05, 0.9],
// };

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const index: React.FC<indexProps> = () => {
  const [speakerState, setSpeakerState] = useState("muted");
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
  const { data: reviews, error } = useSwr("/api/tweets", fetcher);

  const technologyList = React.useMemo<Ireply[]>(() => {
    if (!reviews?.data) return [];
    return [...reviews.data, ...reviews.data];
  }, [reviews]);

  if (error) console.log(error);

  const refScroll = React.useRef(null);
  const locomotiveInstanceRef = React.useRef<any>(null);

  React.useEffect(() => {
    ReactGa.initialize("UA-177100391-3");
    ReactGa.pageview(window.location.pathname + window.location.search);

    if (!refScroll.current || !locomotiveScroll) return;
    // @ts-ignore
    const instance = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
    });
    locomotiveInstanceRef.current = instance;

    // update locomotive scroll
    const handleLoad = () => {
      let image = document.querySelector("img");
      // @ts-ignore
      image!.complete && image!.naturalHeight !== 0;
      instance.update();
    };
    window.addEventListener("load", handleLoad);

    // header cursor
    const cursor = document.querySelector(".cursor");
    window.onmousemove = (e: any) => {
      cursor!.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
    };

    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Shashank Chaudhary %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, this portofolio shows most of my work.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);

    return () => {
      window.removeEventListener("load", handleLoad);
      if (locomotiveInstanceRef.current) {
        locomotiveInstanceRef.current.destroy();
        locomotiveInstanceRef.current = null;
      }
    };
  }, []);

  React.useEffect(() => {
    locomotiveInstanceRef.current?.update();
  }, [reviews]);

  React.useEffect(() => {
    const instance = locomotiveInstanceRef.current;
    if (!instance) return;
    if (isToggleOpen) {
      instance.stop();
    } else {
      instance.start();
    }
  }, [isToggleOpen]);

  const handleSpeaker = () => {
    const audio = document.querySelector("#audioPlayer") as HTMLAudioElement | null;
    if (!audio) return;

    if (speakerState === "muted") {
      setSpeakerState("unmuted");
      audio.currentTime = 0;
      audio.play();
    } else {
      setSpeakerState("muted");
      audio.pause();
    }
  };

  function toggleBodyScroll(isToggleOpen: boolean) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true);
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false);
    }
  }
  // const technologies = [
  //   { id: 1, name: "React", image: "svg/autocad.png", alt: "React logo" },
  //   { id: 2, name: "JavaScript", image: "svg/javascript.svg", alt: "JavaScript logo" },
  //   { id: 3, name: "TypeScript", image: "svg/typescript.svg", alt: "TypeScript logo" },
  //   { id: 4, name: "Node.js", image: "svg/nodejs.svg", alt: "Node.js logo" },
  //   { id: 5, name: "HTML5", image: "svg/html5.svg", alt: "HTML5 logo" },
  //   { id: 6, name: "CSS3", image: "svg/css3.svg", alt: "CSS3 logo" },
  // ];

  return (
    <>
      <div id="menu-target" data-scroll-container ref={refScroll}>
        <Head>
          <link rel="icon" type="image/png" href="svg/favicon.png" />
          <link href="https://shashankchaudhary.com/" rel="canonical" />
          <meta name="theme-color" content="#10101A" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#10101A"
          />
          <title>Shashank Chaudhary 🚀 &mdash; Mechanical Engineer</title>
          <meta
            name="description"
            content="I'm a Mechanical Engineer specializing in mechatronics, automation, control systems, and design, driven by innovation and efficiency."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Shashank Chaudhary 🚀 &mdash; Mechanical Engineer"
          />
          <meta property="og:url" content="https://shashankchaudhary.com/" />
          <meta property="og:image" content="webp/preview-image.png" />
          <meta
            property="og:description"
            content="Mechanical Engineer specializing in mechatronics, automation, control systems, and design, driven by innovation and efficiency."
          />
          <meta
            name="twitter:title"
            content="Shashank Chaudhary 🚀 &mdash; Mechanical Engineer"
          />
          <meta
            name="twitter:description"
            content="Mechanical Engineer specializing in mechatronics, automation, control systems, and design, driven by innovation and efficiency."
          />
          <meta name="twitter:image" content="webp/preview-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://adeolaadeoti.xyz/" />
        </Head>
        <audio loop id="audioPlayer" preload="auto" style={{ display: "none" }}>
          <source src="sound/preloader.mp3" type="audio/mp3" />
        </audio>
        {/* <motion.div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#menu-target"
          animate={{ top: "-100vh", transition: { ...transition, delay: 9 } }}
          className="preloader"
        >
          <div className="preloader__wrapper">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__left"
            >
              <img src="svg/adeola-logo-left.svg" alt="adeola logo" />
            </motion.div>
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__right"
            >
              <p className="preloader__text">DESIGN</p>
              <p className="preloader__text">ROBOTICS</p>
              <p className="preloader__text">FEA</p>
              <p className="preloader__text">ANSYS</p>
              <p className="preloader__text">MODELING</p>
              <p className="preloader__text">SUSTAINABILITY</p>
              <p className="preloader__text">BIOMECHANICS</p>
            </motion.div>
          </div>
        </motion.div> */}
        <div className="cursor"></div>
        <Navigation
          isOpen={isToggleOpen}
          toggleOpen={() => toggleBodyScroll(isToggleOpen)}
        />
        <div className="header-wrapper">
          <header className="header">
            <div className="header__hero">
              <div className="header__hero--heading">
                <span>From concept to creation, </span> <br />
                <span>engineering </span>
                <span className="header__hero--heading-gradient">
                  {" "}products{" "}
                </span>
                <br />
                <span>that make impact.</span>
              </div>
              <a
                data-scroll-to
                className="header__hero--cta"
                href="#sectionProjects"
              >
                VIEW PROJECTS
              </a>
            </div>
          </header>
          <div className="header__footer">
            <div className="header__footer--left">
              <div className="speaker">
                <div
                  onClick={handleSpeaker}
                  className={`${"speaker__toggle"} ${speakerState === "unmuted"
                    ? `${"speaker__toggle--anim"}`
                    : ``
                    }`}
                >
                  &nbsp;
                </div>
                <div className="speaker__muted">
                  <img src="svg/muted.svg" alt="muted icon" />
                </div>
                <div className="speaker__unmuted">
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.599976"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect1-anim"
                    />
                    <rect
                      x="9"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect2-anim"
                    />
                    <rect
                      x="4.79999"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect3-anim"
                    />
                    {/* <rect
                      x="13.2"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect4-anim"
                    /> */}
                  </svg>
                </div>
              </div>
            </div>
            <div className="header__footer--right">
              <a
                href="https://github.com/sc23bl"
                rel="noopener"
                target="_blank"
              >
                👾 GH
              </a>
              <a
                href="https://twitter.com/adeolajs"
                rel="noopener"
                target="_blank"
              >
                🐦 TW
              </a>
              <a
                href="https://www.linkedin.com/in/shanky_ch99"
                rel="noopener"
                target="_blank"
              >
                💼 LD
              </a>
              <a
                href="https://www.instagram.com/shanky_ch99"
                rel="noopener"
                target="_blank"
              >
                {" "}
                📸 IN
              </a>
            </div>
          </div>
        </div>
        <main className="container">
          <p className="about-text">
            Hi! 👋, my name is Shashank and I am a mechanical engineer,
            <br /> developing intelligent solutions that optimize performance,
            enhance user experience, and drive sustainable innovation.
          </p>
          <section id="sectionProjects" className="section-projects">
            <h1 className="heading-1">
              <div><span>Design </span> <small>🦾</small></div>

              <p className="paragraph">
                Each project is unique. Here are some of my works.
              </p>
            </h1>

            <div className="projects-grid">
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4 project-card__skills">
                    SOLIDWORKS, LOTUS, ADAMS CAR, ANSYS
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
                  <img loading="lazy" src="svg/supra1.png" alt="alexxandria model" />
                  <img loading="lazy" src="svg/supra2.png" alt="alexxandria logo" />
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2 project-card__title"
                  >
                    Formula
                    SAE 2019
                  </h2>
                  <p className="project-card__description">
                    Designed and fabricated a single-seat formula race car under SAEINDIA regulations, serving as core design engineer for steering, rims, chassis, and seat components using SolidWorks and CATIA with GD&T. Successfully passed technical inspections and raced at BIC, ranking 36th nationally. Applied FEA to reduce weight by 83 kg.
                  </p>

                </div>
              </div>
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4 project-card__skills">
                    SOLIDWORKS, LOTUS, ADAMS CAR, ANSYS
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
                  <img loading="lazy" src="svg/baja1.png" alt="alexxandria model" />
                  <img loading="lazy" src="svg/baja2.jpg" alt="alexxandria logo" />
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2 project-card__title"
                  >
                    SAE
                    Baja 2018
                  </h2>
<<<<<<< HEAD
                  <p style={{ color: 'white', textAlign: 'justify' }}>
                    Spearheaded prototyping for a BAJA SAE vehicle focusing on chassis and powertrain systems. Used modular fabrication for rapid iteration, calculated CVT torque-speed match and optimized gear ratios. Achieved 20% drivetrain efficiency increase, 12 kg weight reduction, and became first team from my college to complete endurance event.
=======
                  <p className="project-card__description">
                     Spearheaded prototyping for a BAJA SAE vehicle focusing on chassis and powertrain systems. Used modular fabrication for rapid iteration, calculated CVT torque-speed match and optimized gear ratios. Achieved 20% drivetrain efficiency increase, 12 kg weight reduction, and became first team from my college to complete endurance event.
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                  </p>

                </div>
              </div>
<<<<<<< HEAD
=======
        
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4 project-card__skills">
                    SOLIDWORKS, LOTUS, ADAMS CAR, ANSYS
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
                  <img loading="lazy" src="svg/Rim1.png" alt="alexxandria model" />
                  <img loading="lazy" src="svg/Rim2.png" alt="alexxandria logo" />
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2 project-card__title"
                  >
                    Wheel Rim
                    DESIGN
                  </h2>
<<<<<<< HEAD
                  <p style={{ color: 'white', textAlign: 'justify' }}>
<<<<<<< HEAD
                    Created a 15-inch alloy wheel rim for a Formula SAE vehicle by accurately modeling from real-world specs in SolidWorks, incorporating bolt patterns, ventilation, and offsets. Performed stress and fatigue analysis using ANSYS, achieving safety factors 1.5 and dimensional tolerance under 0.5 mm for simulation and assembly clearance.
=======
=======
                  <p className="project-card__description">
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                    Created a 15-inch alloy wheel rim for a Formula SAE vehicle by accurately modeling from real-world specs in SolidWorks, incorporating bolt patterns, ventilation, and offsets. Performed stress and fatigue analysis using ANSYS, achieving safety factors &gt; 1.5 and dimensional tolerance under 0.5 mm for simulation and assembly clearance.
>>>>>>> f5730428be7b4537a1a25d00fde9363ebaafba93
                  </p>
  
                </div>
              </div>
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4 project-card__skills">
                    SOLIDWORKS, ANSYS
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
<<<<<<< HEAD
                  <img src="svg/final1.png" alt="alexxandria model" />
                  <img src="svg/final2.jpg" alt="alexxandria logo" />
=======
                  <img loading="lazy" src="svg/supra1.png" alt="alexxandria model" />
                  <img loading="lazy" src="svg/final2.jpg" alt="alexxandria logo" />
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2 project-card__title"
                  >
                    Seeding Mechanism
                    Design
                  </h2>
<<<<<<< HEAD
                  <p style={{ color: 'white', textAlign: 'justify' }}>
                    Designed and analyzed a low-cost, manually operated seeding mechanism to optimize seed spacing and reduce labor requirements for small-scale farms in rural India. Modeled a rotating-disc seed metering system in SolidWorks for uniform seed delivery with minimal clogging, tailored for crops like maize and mustard. Performed static structural analysis to ensure frame strength under soil resistance and operator load, validating a safety factor above 2.5. A complete CAD assembly with manufacturing drawings was prepared, though fabrication was halted due to COVID-related restrictions.
=======
                  <p className="project-card__description">
                     Designed and analyzed a low-cost, manually operated seeding mechanism to optimize seed spacing and reduce labor requirements for small-scale farms in rural India. Modeled a rotating-disc seed metering system in SolidWorks for uniform seed delivery with minimal clogging, tailored for crops like maize and mustard. Performed static structural analysis to ensure frame strength under soil resistance and operator load, validating a safety factor above 2.5. A complete CAD assembly with manufacturing drawings was prepared, though fabrication was halted due to COVID-related restrictions.
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                  </p>
                </div>
              </div>
            </div>
            <h1 className="heading-1">
              <div><span>Analysis </span> <small>🚁</small></div>
            </h1>
<<<<<<< HEAD

            <div className="Robotics-projects">
=======
            <div className="projects-grid">
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4 project-card__skills">
                    CREO, ADAMS CAR
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
<<<<<<< HEAD
                  <img src="svg/wishbone.png" alt="alexxandria model" />
                  <img src="svg/wishbone2.png" alt="alexxandria logo" />
=======
                  <img loading="lazy" src="svg/supra1.png" alt="alexxandria model" />
                  <img loading="lazy" src="svg/supra2.png" alt="alexxandria logo" />
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2 project-card__title"
                  >
                    Double Wishbone
                    Suspension Design
                  </h2>
<<<<<<< HEAD
                  <p style={{ color: 'white', textAlign: 'justify' }}>
                    Engineered a high-performance double wishbone suspension system for a formula-style race car using Creo and ADAMS Car. Tuned critical geometric parameters like track width, camber gain, and roll center height. Simulations showed a 12% reduction in body roll and improved tire contact consistency by 15%, with less than 1.5 mm bump steer—resulting in a digitally validated suspension model ready for prototyping.
=======
                  <p className="project-card__description">
                   Engineered a high-performance double wishbone suspension system for a formula-style race car using Creo and ADAMS Car. Tuned critical geometric parameters like track width, camber gain, and roll center height. Simulations showed a 12% reduction in body roll and improved tire contact consistency by 15%, with less than 1.5 mm bump steer—resulting in a digitally validated suspension model ready for prototyping.
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                  </p>

                </div>
              </div>
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4 project-card__skills">
                    SOLIDWORKS, ANSYS
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
<<<<<<< HEAD
                  <img src="svg/handle.png" alt="alexxandria model" />
                  <img src="svg/furrow.png" alt="alexxandria logo" />
=======
                  <img loading="lazy" src="svg/supra1.png" alt="alexxandria model" />
                  <img loading="lazy" src="svg/supra2.png" alt="alexxandria logo" />
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2 project-card__title"
                  >
                    Handle & Furrow
                    Statics Load Analysis
                  </h2>
<<<<<<< HEAD
                  <p style={{ color: 'white', textAlign: 'justify' }}>
                    Conducted structural analysis on a manually operated furrow blade and handle system for agricultural use. Designed the model in SolidWorks with realistic pulling and soil resistance loads (~300 N pull and 150 N soil contact). Static simulation yielded a minimum safety factor of 2.4. Refined the blade tip geometry to reduce peak stress by 18%, ensuring long-term usability under field conditions.
=======
                  <p className="project-card__description">
                   Conducted structural analysis on a manually operated furrow blade and handle system for agricultural use. Designed the model in SolidWorks with realistic pulling and soil resistance loads (~300 N pull and 150 N soil contact). Static simulation yielded a minimum safety factor of 2.4. Refined the blade tip geometry to reduce peak stress by 18%, ensuring long-term usability under field conditions.
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                  </p>

                </div>
              </div>
<<<<<<< HEAD
=======
        
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4 project-card__skills">
                    CATIA V5, SOLIDWORKS, ANSYS
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
<<<<<<< HEAD
                  <img src="svg/hub.png" alt="alexxandria model" />
                  <img src="svg/upright.png" alt="alexxandria logo" />
=======
                  <img loading="lazy" src="svg/supra1.png" alt="alexxandria model" />
                  <img loading="lazy" src="svg/supra2.png" alt="alexxandria logo" />
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2 project-card__title"
                  >
                    Wheel Hub & Upright
                    Static Load Analysis
                  </h2>
<<<<<<< HEAD
                  <p style={{ color: 'white', textAlign: 'justify' }}>
                    Performed static structural analysis of the front wheel hub and upright assemblies for an FSAE vehicle using CATIA V5 and SolidWorks Simulation. Applied racing boundary conditions such as 2g cornering, 1.5g braking, and 1000 N vertical loads. Verified safety through Von Mises stress distribution and ensured structural integrity with a factor of safety of 2.1. The final design was cleared for CNC machining and integration into the suspension system.
=======
                  <p className="project-card__description">
                   Performed static structural analysis of the front wheel hub and upright assemblies for an FSAE vehicle using CATIA V5 and SolidWorks Simulation. Applied racing boundary conditions such as 2g cornering, 1.5g braking, and 1000 N vertical loads. Verified safety through Von Mises stress distribution and ensured structural integrity with a factor of safety of 2.1. The final design was cleared for CNC machining and integration into the suspension system.
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                  </p>

                </div>
              </div>
            </div>

            <h1 className="heading-1">

              <div><span>Robotics </span> <small>🛰️</small></div>
            </h1>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4 project-card__skills">
                    MATLAB, SIMULINK, C/C++
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
<<<<<<< HEAD
                  <img src="svg/panel1.png" alt="alexxandria model" />
                  <img src="svg/panel2.png" alt="alexxandria logo" />
=======
                  <img loading="lazy" src="svg/supra1.png" alt="alexxandria model" />
                  <img loading="lazy" src="svg/supra2.png" alt="alexxandria logo" />
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2 project-card__title"
                  >
                    Optimal Control
                    <br /> of a Solar Panel
                  </h2>
<<<<<<< HEAD
                  <p style={{ color: 'white', textAlign: 'justify' }}>
                    Developed and simulated an optimal control system for a dual-axis solar tracker in MATLAB. Modeled the tracker as a nonlinear second-order plant and applied optimal feedback control to align panel angles with solar trajectory. Improved simulated solar energy capture by 32% over static panels while maintaining robustness to actuator delays and cloud-induced disturbances.
=======
                  <p className="project-card__description">
                   Developed and simulated an optimal control system for a dual-axis solar tracker in MATLAB. Modeled the tracker as a nonlinear second-order plant and applied optimal feedback control to align panel angles with solar trajectory. Improved simulated solar energy capture by 32% over static panels while maintaining robustness to actuator delays and cloud-induced disturbances.
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                  </p>

                </div>
              </div>
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4 project-card__skills">
                    MATLAB, SIMULINK, C/C++, LATEX
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
<<<<<<< HEAD
                  <img src="svg/ball.png" alt="alexxandria model" />
                  <img src="svg/ball2.png" alt="alexxandria logo" />
=======
                  <img loading="lazy" src="svg/supra1.png" alt="alexxandria model" />
                  <img loading="lazy" src="svg/supra2.png" alt="alexxandria logo" />
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2 project-card__title"
                  >
                    Ball on Plate
                    <br /> Control System
                  </h2>
                  <p className="project-card__description">
                     Simulated a closed-loop control system to balance a ball on a flat plate using MATLAB. Implemented a PD controller for real-time stabilization in two axes. The system successfully restored ball position from a 10 cm displacement in under 1 second and maintained steady tracking within ±1 cm, even under added random disturbances.
                  </p>

                </div>
              </div>
        
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4 project-card__skills">
                    MATLAB, SIMULINK, C/C++
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
                  <img loading="lazy" src="svg/supra1.png" alt="alexxandria model" />
                  <img loading="lazy" src="svg/supra2.png" alt="alexxandria logo" />
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2 project-card__title"
                  >
                    Ball on Plate
                    <br /> Control System
                  </h2>
                  <p className="project-card__description">
                    Simulated a closed-loop control system to balance a ball on a flat plate using MATLAB. Implemented a PD controller for real-time stabilization in two axes. The system successfully restored ball position from a 10 cm displacement in under 1 second and maintained steady tracking within ±1 cm, even under added random disturbances.
                  </p>

                </div>
              </div>
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4">
                    MATLAB, SIMULINK, C/C++
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
                  <img src="svg/drone1.jpg" alt="alexxandria model" />
                  <img src="svg/drone2.jpg" alt="alexxandria logo" />
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2"
                  >
                    Design and Fabrication
                    <br /> of a Surveillance Drone
                  </h2>
                  <p style={{ color: 'white', textAlign: 'justify' }}>
                    Designed and fabricated a surveillance drone using Arduino as the flight controller and MPU6050 for attitude stabilization. Integrated a wireless camera for real-time aerial monitoring. Initial prototype used an aluminum frame, later replaced by carbon fiber for improved flight endurance. Upgraded the control system to KK2.1.5 for smoother flight control. Successfully achieved stable autonomous flight and video transmission.
                  </p>

                </div>
              </div>
            </div>
          </section>
          <section
            data-scroll
            data-scroll-offset="35%"
            data-scroll-repeat={true}
            data-scroll-class="section-reviews__bg"
            className="section-reviews"
          >
            <div className="section-reviews__top">
              <h1 className="heading-1">
                <span>Software Expertise  <small>🚀</small></span>
              </h1>
              <p className="paragraph" style={{ fontSize: '2rem' }}>

              </p>
            </div>
            <div className="section-reviews__bottom">
              <div className="section-reviews__bottom-wrapper review-card__anim1">
                {technologyList.map((review: Ireply, index: number) => (
                  <div key={`${review.id}-${index}`} className="review-card">
                    <div className="review-card__top">
                      <div className="review-card__top--left">
                        <img src={review.imgSource} className="tech-image" />
                      </div>
                      {/* <div className="review-card__top--right">
                        <img src="svg/twitter.svg" alt="twitter icon" />
                      </div> */}
                    </div>
                    <div className="review-card__bottom">

                      <h2 className="review-card__h2">{review.technologyName}</h2>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
          <section className="section-contact">
            {/* <h1 className="heading-1">
              <span>Sold Yet? </span> <small>🤙</small>
            </h1> */}
            {/* <h2 className="section-contact__h2">
              Thanks for stopping by, I’m currently looking to join a new team
              of creative engineers. If you think I might be a
              good fit for one, send me an
              <a
                href="mailto:shashank840@outlook.com"
                rel="noopener"
                target="_blank"
              >
                &nbsp; email 📧
              </a>
              .
            </h2> */}
          </section>
          <section className="section-socials">
            <h1 className="heading-1">
              <span>Contact!</span> <small>🔭</small>
            </h1>
            <p className="paragraph">Connect with me online</p>
            <div className="section-socials--links">
              <a
                href="https://github.com/sc23bl"
                rel="noopener"
                target="_blank"
              >
                👾 GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shashch99"
                rel="noopener"
                target="_blank"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://www.instagram.com/shanky_ch99"
                rel="noopener"
                target="_blank"
              >
                📸 Instagram
              </a>
            </div>
          </section>
        </main>
        <footer className="footer">
          {/* <img
            src="svg/adeola-logo-footer.svg"
            alt="design and devloped by adeola"
          /> */}
          <div className="footer__socials">
            <a
              href="https://dribbble.com/shots/16100745-Adeola-Adeoti-Personal-Website"
              target="_blank"
              rel="noopener"
            >
              <img src="svg/dribble.svg" alt="dribble logo" />
            </a>
            <a
              href="https://github.com/sc23bl"
              target="_blank"
              rel="noopener"
            >
              <img src="svg/github.svg" alt="github logo" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default index;
