import * as React from "react";
import { cubicBezier, motion } from "framer-motion";

const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const closedTansition = {
  duration: 1,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">DONT BE A STRANGER</h4>
          <div className="navigation-top__left--links">
            <a
              href="https://github.com/sc23bl"
              rel="noopener"
              target="_blank"
            >-
              👾 GH
            </a>
            <a
              href="https://www.linkedin.com/in/shashch99"
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
              📸 IN
            </a>
          </div>
        </div>
        <div className="navigation-top__right">
          {/* <h4 className="navigation-h4">HAVE AN IDEA?</h4>
          <a
            href="mailto:shashank840@outlook.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </a> */}
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">RESUME</h4>
        <p>Education

Master of Science, Mechanical Engineering
Florida State University, Tallahassee, FL | Aug 2023 – May 2025 | GPA: 3.53/4

Bachelor of Science, Mechanical Engineering
Madan Mohan Malaviya University of Technology, India | Jul 2017 – Aug 2021 | GPA: 3.3/4

Professional Experience

Mechatronics Engineering Intern
Danfoss Turbocor, Tallahassee, FL | Sept 2024 – Present

Led sensor accuracy improvements and system commissioning on chiller systems

Created 3D CAD models & 2D drawings using Catia, adhering to ASME standards

Performed Finite Element Analysis on compressor components using ANSYS

Teaching & Research Assistant
Florida State University, Tallahassee, FL | Jan 2024 – Present

Mentored 50+ students in mechanical engineering labs, improving exam scores

Developed thermoelectric generator prototype and analyzed industrial heat decarbonization

Graduate Engineering Trainee
Sona Comstar, Gurugram, India | Nov 2021 – May 2023

Accelerated product development and optimized EV differential assemblies

Conducted DFMEA, GD&T compliance, and stack-up analyses

Student Projects & Leadership

Co-led SUPRA SAE India Formula team; secured All India Rank 30

Spearheaded powertrain optimization for BAJA SAE India; All India Rank 33</p>
        {/* <div className="navigation-bottom__projects">
          <a
            target="_blank"
            rel="noopener"
            href="https://alexxandria.vercel.app/"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/alexxandria-nav.webp" alt="alexxandria" />
            <h2>
              Alexxandria
              <br />
              Forque
            </h2>
          </a>
          <a
            href="https://shashankchaudhary.com/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/safarika-nav.webp" alt="safarika" />
            <h2>Safarika</h2>
          </a>
          <a
            href="https://shashankchaudhary.com/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/adeola-1.webp" alt="shashank" />
            <h2>
              Shashank Chaudhary 
              <br />
            </h2>
          </a>
        </div> */}
      </motion.div>
    </motion.div>
  </motion.div>
);
