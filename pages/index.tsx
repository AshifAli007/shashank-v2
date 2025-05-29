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
          <link rel="icon" href="svg/favicon.svg" />
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
            <h1 className="heading-1">
              <div><span>Robotics </span> <small>🦾</small></div>

              <p className="paragraph">
                Each project is unique. Here are some of my works.
              </p>
            </h1>

            <div className="Robotics-projects">
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4">
                    SOLIDWORKS, AUTOCAD, LOTUS, ADAMS CAR, ANSYS
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
                  <img src="svg/spice.png" alt="alexxandria model" />
                  <img src="svg/car_size1.png" alt="alexxandria logo" />
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2"
                  >
                    Formulaa
                    <br /> SAE
                  </h2>
                  <p style={{ color: 'white' }}>
                    In this capstone endeavor I helped take a single-seat formula racer from concept to competition in just nine months, working as both a core design engineer and one of the team drivers. Our brief was to create a car that met the rigorous SAE SUPRA India rulebook while pushing for lighter weight, sharper handling.
                  </p>

                </div>
              </div>
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4">
                    SOLIDWORKS, AUTOCAD, LOTUS, ADAMS CAR, ANSYS
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
                  <img src="svg/supra1.png" alt="alexxandria model" />
                  <img src="svg/supra2.png" alt="alexxandria logo" />
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2"
                  >
                    Formulaa
                    <br /> SAE
                  </h2>
                  <p style={{ color: 'white' }}>
                    In this capstone endeavor I helped take a single-seat formula racer from concept to competition in just nine months, working as both a core design engineer and one of the team drivers. Our brief was to create a car that met the rigorous SAE SUPRA India rulebook while pushing for lighter weight, sharper handling.
                  </p>

                </div>
              </div>
            </div>

            <h1 className="heading-1">

              <div><span>Design </span> <small>🚁</small></div>

              <p className="paragraph">
                Each project is unique. Here are some of my works.
              </p>
            </h1>
            <div className="Robotics-projects">
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4">
                    SOLIDWORKS, AUTOCAD, LOTUS, ADAMS CAR, ANSYS
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
                  <img src="svg/supra1.png" alt="alexxandria model" />
                  <img src="svg/supra2.png" alt="alexxandria logo" />
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2"
                  >
                    Formulaa
                    <br /> SAE
                  </h2>
                  <p style={{ color: 'white' }}>
                    In this capstone endeavor I helped take a single-seat formula racer from concept to competition in just nine months, working as both a core design engineer and one of the team drivers. Our brief was to create a car that met the rigorous SAE SUPRA India rulebook while pushing for lighter weight, sharper handling.
                  </p>

                </div>
              </div>
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4">
                    SOLIDWORKS, AUTOCAD, LOTUS, ADAMS CAR, ANSYS
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
                  <img src="svg/supra1.png" alt="alexxandria model" />
                  <img src="svg/supra2.png" alt="alexxandria logo" />
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2"
                  >
                    Formulaa
                    <br /> SAE
                  </h2>
                  <p style={{ color: 'white' }}>
                    In this capstone endeavor I helped take a single-seat formula racer from concept to competition in just nine months, working as both a core design engineer and one of the team drivers. Our brief was to create a car that met the rigorous SAE SUPRA India rulebook while pushing for lighter weight, sharper handling.
                  </p>

                </div>
              </div>
            </div>
            <h1 className="heading-1">

              <div><span>AutoCad </span> <small>🛰️</small></div>

              <p className="paragraph">
                Each project is unique. Here are some of my works.
              </p>
            </h1>
            <div className="Robotics-projects">
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4">
                    SOLIDWORKS, AUTOCAD, LOTUS, ADAMS CAR, ANSYS
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
                  <img src="svg/supra1.png" alt="alexxandria model" />
                  <img src="svg/supra2.png" alt="alexxandria logo" />
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2"
                  >
                    Formulaa
                    <br /> SAE
                  </h2>
                  <p style={{ color: 'white' }}>
                    In this capstone endeavor I helped take a single-seat formula racer from concept to competition in just nine months, working as both a core design engineer and one of the team drivers. Our brief was to create a car that met the rigorous SAE SUPRA India rulebook while pushing for lighter weight, sharper handling.
                  </p>

                </div>
              </div>
              <div className="project-card">
                <div className="project-card__left">
                  <h4 className="heading-4">
                    SOLIDWORKS, AUTOCAD, LOTUS, ADAMS CAR, ANSYS
                  </h4>
                </div>
                <div
                  className="project-card__middle"
                  data-displacement="webp/myDistorsionImage.webp"
                >
                  <img src="svg/supra1.png" alt="alexxandria model" />
                  <img src="svg/supra2.png" alt="alexxandria logo" />
                </div>
                <div className="project-card__right">
                  <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class="alexxandria-anim"
                    className="heading-2"
                  >
                    Formulaa
                    <br /> SAE
                  </h2>
                  <p style={{ color: 'white' }}>
                    In this capstone endeavor I helped take a single-seat formula racer from concept to competition in just nine months, working as both a core design engineer and one of the team drivers. Our brief was to create a car that met the rigorous SAE SUPRA India rulebook while pushing for lighter weight, sharper handling.
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
