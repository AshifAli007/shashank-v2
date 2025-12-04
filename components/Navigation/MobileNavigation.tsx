import * as React from "react";
import { useEffect } from "react";
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

export const MobileNavigation = ({ variants, isOpen }: any) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
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

        </motion.div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "4rem",
            marginTop: "2rem",
          }}
          className="profile-header"
        >
          <div>
            <h1 className="profile-header__name">Shashank Chaudhary</h1>
            <div className="profile-header__info">
              From India<br />
              Lives & works in Tallahassee, FL<br />
              s.chaudhary2k25@gmail.com
            </div>
            <hr className="profile-header__line" />
          </div>
          <div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-header__resume-btn"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="resume-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>

          <div>
            <h3>EDUCATION</h3>
            <br />

            <p>
              <strong>Florida State University </strong><br />
              2023 - 2025 M.S. in Mechanical Engineering<br />
              Cumulative 3.53 GPA <br /><br />

              <strong>Madan Mohan Malaviya University of Technology</strong><br />
              2017 - 2021 B.S. in Mechanical Engineering<br />
              Cumulative 3.30 GPA
            </p>
          </div>

          <div>
            <h3>SKILLS</h3>
            <br />
            <p>
              <strong>Design & Analysis:</strong> Adams CAR, AutoCAD, ANSYS, Catia V5/V6, Creo, Pro E, Siemens NX, SolidWorks<br />
              <br />
              <strong>PLM Tools:</strong> SmarTeam, Teamcenter, Windchill<br />
              <br />
              <strong>Languages:</strong> Arduino, C/C++, Curve Fitting, MATLAB, Python, STM32<br />
              <br />
              <strong>Manufacturing:</strong> ASME Y14.5, GD&T, Laser cutting, 3D Printing, Sheet metal, Injection Molding, Die Casting
            </p>
          </div>
        </div>

        <br />


        <div>
          <h3 style={{ "margin": "3rem 0" }}>
            PROFESSIONAL EXPERIENCE
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr",
              gap: "1.5rem",
              alignItems: "start",
            }}
          >
            <div
              className="timelineCol"
            >
              Sep 2024 – Present
            </div>
            <div>
              <strong>Danfoss Turbocor – Mechatronics Engineering Intern</strong>
              <br />
              Tallahassee, FL
              <ul style={{ margin: "0.5em 0 1.5em 1em" }}>
                <li>
                  Led change management for 3 chiller systems, improving sensor accuracy by 10% through p-h diagram validation.
                </li>
                <li>
                  Commissioned systems, performed testing with accelerometers and calibration tools to validate performance.
                </li>
                <li>
                  Created 3D models and 2D drawings using Catia; conducted DFMEA on compressor models.
                </li>
                <li>
                  Conducted FEA on shaft kits using ANSYS and validated structural integrity.
                </li>
              </ul>
            </div>

            {/* FSU */}
            <div
              className="timelineCol"
            >
              Jan 2024 - May 2025
            </div>
            <div>
              <strong>Florida State University – Teaching & Research Assistant</strong>
              <br />
              Tallahassee, FL
              <ul style={{ margin: "0.5em 0 1.5em 1em" }}>
                <li>
                  Taught labs, mentored 50+ students, raised exam scores by 15%.
                </li>
                <li>
                  Developed and tested thermoelectric generator; analyzed industrial heat data for DOE reports.
                </li>
              </ul>
            </div>

            {/* Sona Comstar */}
            <div
              className="timelineCol"
            >
              Nov 2021 – May 2023
            </div>
            <div>
              <strong>Sona Comstar – Graduate Engineering Trainee</strong>
              <br />
              Gurugram, India
              <ul style={{ margin: "0.5em 0 1.5em 1em" }}>
                <li>
                  Accelerated NPD by 20%, ensured GD&T compliance, and improved EV/hybrid differential efficiency.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div>
          <h3 style={{ margin: "3rem 0" }}>
            PROJECTS & LEADERSHIP
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr",
              gap: "1.5rem",
              alignItems: "start",
            }}
          >
            <div
              className="timelineCol"
            >
              Nov 2018 – Jul 2019
            </div>
            <div>
              <strong>SUPRA SAE India – Formula SAE</strong>
              <ul style={{ margin: "0.5em 0 1.5em 1em" }}>
                <li>
                  Co-led 15-member team, ranked 30/128. Designed lightweight chassis and gear-by-wire system using SolidWorks.
                </li>
              </ul>
            </div>

            <div
              className="timelineCol"
            >
              Jun 2018 – Mar 2019
            </div>
            <div>
              <strong>BAJA SAE India</strong>
              <ul style={{ margin: "0.5em 0 1.5em 1em" }}>
                <li>
                  Led powertrain optimization (12% gain), ensured full SAE rule compliance, secured $4000 sponsorship.
                </li>
              </ul>
            </div>

            <div
              className="timelineCol"
            >
              Academic Projects
            </div>
            <div>
              <strong>Selected Projects:</strong>
              <ul style={{ margin: "0.5em 0 1.5em 1em" }}>
                <li>Double Wishbone Suspension System (Creo, MSC Adams)</li>
                <li>Arduino-Based Surveillance Drone (MPU6050, Arduino IDE)</li>
                <li>Waste Plastic to Fuel via Pyrolysis</li>
                <li>Seeding Mechanism Design (4-person team)</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div >
  )
};
