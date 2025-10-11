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

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;

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

  if (error) console.log(error);

  const refScroll = React.useRef(null);
  let lscroll: any;

  React.useEffect(() => {
    ReactGa.initialize("UA-177100391-3");
    ReactGa.pageview(window.location.pathname + window.location.search);

    if (!refScroll.current) return;
    // @ts-ignore
    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      let image = document.querySelector("img");
      // @ts-ignore
      const isLoaded = image!.complete && image!.naturalHeight !== 0;
      lscroll.update();
    });

    // image hover effect
    Array.from(document.querySelectorAll(".project-card__middle")).forEach(
      (el: any) => {
        const imgs: any = Array.from(el.querySelectorAll("img"));
        new hoverEffect({
          parent: el,
          intensity: 0.2,
          speedIn: el.dataset.speedin || undefined,
          speedOut: el.dataset.speedout || undefined,
          easing: el.dataset.easing || undefined,
          hover: el.dataset.hover || undefined,
          image1: imgs[0].getAttribute("src"),
          image2: imgs[1].getAttribute("src"),
          displacementImage: el.dataset.displacement,
        });
      }
    );

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
  }, []);

  const projectSections = [
    {
      key: "design",
      heading: "Design",
      tag: "dY�_",
      intro: "Each project is unique. Here are some of my works.",
      projects: [
        {
          title: "Formula\nSAE 2019",
          description:
            "Designed and fabricated a single-seat formula race car under SAEINDIA regulations, serving as core design engineer for steering, rims, chassis, and seat components using SolidWorks and CATIA with GD&T. Successfully passed technical inspections and raced at BIC, ranking 36th nationally. Applied FEA to reduce weight by 83 kg.",
          images: [
            { src: "svg/supra1.png", alt: "Formula SAE render" },
            { src: "svg/supra2.png", alt: "Formula SAE in pit" },
          ],
          skills: ["SOLIDWORKS", "LOTUS", "ADAMS CAR", "ANSYS"],
        },
        {
          title: "SAE\nBaja 2018",
          description:
            "Spearheaded prototyping for a BAJA SAE vehicle focusing on chassis and powertrain systems. Used modular fabrication for rapid iteration, calculated CVT torque-speed match and optimised gear ratios. Achieved 20% drivetrain efficiency increase, 12 kg weight reduction, and became the first team from my college to complete the endurance event.",
          images: [
            { src: "svg/baja1.png", alt: "Baja SAE vehicle CAD" },
            { src: "svg/baja2.jpg", alt: "Baja SAE vehicle prototype" },
          ],
          skills: ["SOLIDWORKS", "LOTUS", "ADAMS CAR", "ANSYS"],
        },
        {
          title: "Wheel Rim\nDESIGN",
          description:
            "Created a 15-inch alloy wheel rim for a Formula SAE vehicle by accurately modelling from real-world specs in SolidWorks, incorporating bolt patterns, ventilation, and offsets. Performed stress and fatigue analysis using ANSYS, achieving safety factors greater than 1.5 and dimensional tolerance under 0.5 mm for simulation and assembly clearance.",
          images: [
            { src: "svg/Rim1.png", alt: "FSAE wheel rim CAD" },
            { src: "svg/Rim2.png", alt: "FSAE wheel rim render" },
          ],
          skills: ["SOLIDWORKS", "LOTUS", "ADAMS CAR", "ANSYS"],
        },
        {
          title: "Seeding Mechanism\nDesign",
          description:
            "Designed and analysed a low-cost, manually operated seeding mechanism to optimise seed spacing and reduce labour requirements for small-scale farms in rural India. Modelled a rotating-disc seed metering system in SolidWorks for uniform seed delivery with minimal clogging. Performed static structural analysis to validate a safety factor above 2.5.",
          images: [
            { src: "svg/supra1.png", alt: "Seeding mechanism CAD" },
            { src: "svg/final2.jpg", alt: "Seeding mechanism render" },
          ],
          skills: ["SOLIDWORKS", "ANSYS"],
        },
      ],
    },
    {
      key: "analysis",
      heading: "Analysis",
      tag: "dYs?",
      projects: [
        {
          title: "Double Wishbone\nSuspension Design",
          description:
            "Engineered a high-performance double wishbone suspension system for a formula-style race car using Creo and ADAMS Car. Tuned track width, camber gain, and roll centre height. Simulations showed a 12% reduction in body roll and improved tyre contact consistency by 15%, with less than 1.5 mm bump steer - resulting in a digitally validated suspension model ready for prototyping.",
          images: [
            { src: "svg/supra1.png", alt: "Double wishbone suspension CAD" },
            { src: "svg/supra2.png", alt: "Double wishbone suspension analysis" },
          ],
          skills: ["CREO", "ADAMS CAR"],
        },
        {
          title: "Handle & Furrow\nStatics Load Analysis",
          description:
            "Conducted structural analysis on a manually operated furrow blade and handle system for agricultural use. Designed the model in SolidWorks with realistic pulling and soil resistance loads (~300 N pull and ~150 N soil contact). Static simulation yielded a minimum safety factor of 2.4, and refining the blade tip geometry reduced peak stress by 18% for long-term durability.",
          images: [
            { src: "svg/supra1.png", alt: "Furrow handle assembly CAD" },
            { src: "svg/supra2.png", alt: "Furrow handle FEA plot" },
          ],
          skills: ["SOLIDWORKS", "ANSYS"],
        },
        {
          title: "Wheel Hub & Upright\nStatic Load Analysis",
          description:
            "Performed static structural analysis of the front wheel hub and upright assemblies for an FSAE vehicle using CATIA V5 and SOLIDWORKS Simulation. Applied racing boundary conditions such as 2g cornering, 1.5g braking, and 1000 N vertical loads. Verified safety through Von Mises stress distribution and ensured structural integrity with a factor of safety of 2.1 ready for CNC machining.",
          images: [
            { src: "svg/supra1.png", alt: "Wheel hub and upright CAD" },
            { src: "svg/supra2.png", alt: "Wheel hub FEA results" },
          ],
          skills: ["CATIA V5", "SOLIDWORKS", "ANSYS"],
        },
      ],
    },
    {
      key: "robotics",
      heading: "Robotics",
      tag: "dY>��,?",
      projects: [
        {
          title: "Optimal Control\nof a Solar Panel",
          description:
            "Developed and simulated an optimal control system for a dual-axis solar tracker in MATLAB. Modelled the tracker as a nonlinear second-order plant and applied optimal feedback control to align panel angles with the solar trajectory. Improved simulated solar energy capture by 32% over static panels while remaining robust to actuator delays and cloud-induced disturbances.",
          images: [
            { src: "svg/supra1.png", alt: "Solar tracker simulation visual" },
            { src: "svg/supra2.png", alt: "Solar tracker hardware concept" },
          ],
          skills: ["MATLAB", "SIMULINK", "C/C++"],
        },
        {
          title: "Ball on Plate\nControl System",
          description:
            "Simulated a closed-loop control system to balance a ball on a flat plate using MATLAB. Implemented a PD controller for real-time stabilisation in two axes. The system restored ball position from a 10 cm displacement in under 1 second and maintained steady tracking within +/-1 cm even under random disturbances.",
          images: [
            { src: "svg/supra1.png", alt: "Ball on plate simulation" },
            { src: "svg/supra2.png", alt: "Ball on plate control hardware" },
          ],
          skills: ["MATLAB", "SIMULINK", "C/C++", "LATEX"],
        },
      ],
    },
  ];

  const handleSpeaker = () => {
    const audio = document.querySelector("#audioPlayer") as HTMLVideoElement;

    if (speakerState === "muted") {
      setSpeakerState("unmuted");
      audio.pause();
    } else {
      setSpeakerState("muted");
      audio.play();
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
        <audio loop id="audioPlayer" autoPlay style={{ display: "none" }}>
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
            {projectSections.map((section) => (
              <div className="project-section" key={section.key}>
                <h1 className="heading-1">
                  <div>
                    <span>{section.heading} </span>{" "}
                    {section.tag && <small>{section.tag}</small>}
                  </div>
                  {section.intro && (
                    <p className="paragraph">{section.intro}</p>
                  )}
                </h1>

                <div className="Robotics-projects">
                  {section.projects.map((project) => (
                    <div className="project-card" key={project.title}>
                      <div className="project-card__header">
                        <h2
                          data-scroll
                          data-scroll-offset="35%"
                          data-scroll-repeat={true}
                          data-scroll-class="alexxandria-anim"
                          className="heading-2"
                        >
                          {project.title.split("\n").map((line, index, arr) => (
                            <React.Fragment key={`${project.title}-${index}`}>
                              {line}
                              {index < arr.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </h2>
                      </div>
                      <div
                        className="project-card__middle"
                        data-displacement="webp/myDistorsionImage.webp"
                      >
                        {project.images.map((image, index) => (
                          <img
                            key={`${project.title}-image-${index}`}
                            src={image.src}
                            alt={image.alt}
                          />
                        ))}
                      </div>
                      <div className="project-card__body">
                        <p>{project.description}</p>
                      </div>
                      {project.skills && project.skills.length > 0 && (
                        <div className="project-card__skills">
                          {project.skills.map((skill) => (
                            <span key={`${project.title}-${skill}`}>{skill}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
                <span>Technologies  <small>🚀</small></span>
              </h1>
              <p className="paragraph" style={{ fontSize: '2rem' }}>
                What Technologies I Used
              </p>
            </div>
            <div className="section-reviews__bottom">
              <div className="section-reviews__bottom-wrapper review-card__anim1">
                {reviews?.data.map((review: Ireply) => (

                  <div key={review.id} className="review-card">
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
                href="https://github.com/adeolaadeoti"
                rel="noopener"
                target="_blank"
              >
                👾 GitHub
              </a>
              <a
                href="https://twitter.com/adeolajs"
                rel="noopener"
                target="_blank"
              >
                🐦 Twitter
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




