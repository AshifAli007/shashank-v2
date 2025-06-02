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
          <h4 className="navigation-h4">CONNECT WITH ME</h4>
          <div className="navigation-top__left--links">
            <a
              href="https://github.com/sc23bl"
              rel="noopener"
              target="_blank"
            >
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
    </motion.div>

    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openBottomTransition }
          : { opacity: 0, transition: closedTansition }
      }
      className="navigation-bottom"
    >
      <div className="resume-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div>
          <h3><u>EDUCATION</u></h3>
          <p>
            <strong>Master of Science, Mechanical Engineering</strong><br />
            Florida State University, Tallahassee, FL<br />
            GPA: 3.53/4 | Aug 2023 - May 2025<br /><br />

            <strong>Bachelor of Science, Mechanical Engineering</strong><br />
            Madan Mohan Malaviya University of Technology, India<br />
            GPA: 3.3/4 | Jul 2017 - Aug 2021
          </p>
        </div>

        <div>
          <h3><u>SKILLS</u></h3>
          <p>
            <strong>Design & Analysis:</strong> Adams CAR, AutoCAD, ANSYS, Catia V5/V6, Creo, Pro E, Siemens NX, SolidWorks<br />
            <strong>PLM Tools:</strong> SmarTeam, Teamcenter, Windchill<br />
            <strong>Languages:</strong> Arduino, C/C++, Curve Fitting, MATLAB, Python, STM32<br />
            <strong>Manufacturing:</strong> ASME Y14.5, GD&T, Laser cutting, 3D Printing, Sheet metal, Injection Molding, Die Casting
          </p>
        </div>
      </div>

      <br />

      <div>
        <h3><u>PROFESSIONAL EXPERIENCE</u></h3>
        <p>
          <strong>Mechatronics Engineering Intern</strong><br />
          Danfoss Turbocor, Tallahassee, FL | Sept 2024 – Present<br />
          • Led change management for 3 chiller systems, improving sensor accuracy by 10% through p-h diagram validation.<br />
          • Commissioned systems, performed testing with accelerometers and calibration tools to validate performance.<br />
          • Created 3D models and 2D drawings using Catia; conducted DFMEA on compressor models.<br />
          • Conducted FEA on shaft kits using ANSYS and validated structural integrity.<br /><br />

          <strong>Teaching & Research Assistant</strong><br />
          Florida State University, Tallahassee, FL | Jan 2024 – Dec 2024<br />
          • Taught labs, mentored 50+ students, raised exam scores by 15%.<br />
          • Developed and tested thermoelectric generator; analyzed industrial heat data for DOE reports.<br /><br />

          <strong>Graduate Engineering Trainee</strong><br />
          Sona Comstar, Gurugram, India | Nov 2021 – May 2023<br />
          • Accelerated NPD by 20%, ensured GD&T compliance, and improved EV/hybrid differential efficiency.
        </p>
      </div>

      <br />

      <div>
        <h3><u>PROJECTS & LEADERSHIP</u></h3>
        <p>
          <strong>SUPRA SAE India – Formula SAE</strong> | Nov 2018 - Jul 2019<br />
          • Co-led 15-member team, ranked 30/128. Designed lightweight chassis and gear-by-wire system using SolidWorks.<br /><br />

          <strong>BAJA SAE India</strong> | Jun 2018 - Mar 2019<br />
          • Led powertrain optimization (12% gain), ensured full SAE rule compliance, secured $4000 sponsorship.<br /><br />

          <strong>Academic Projects:</strong><br />
          • Double Wishbone Suspension System (Creo, MSC Adams)<br />
          • Arduino-Based Surveillance Drone (MPU6050, Arduino IDE)<br />
          • Waste Plastic to Fuel via Pyrolysis<br />
          • Seeding Mechanism Design (4-person team)
        </p>
      </div>
    </motion.div>
  </motion.div>
);
