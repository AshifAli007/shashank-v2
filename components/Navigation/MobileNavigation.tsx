import * as React from "react";
import { cubicBezier, motion } from "framer-motion";

const openTransition = {
  duration: 1.0,
  delay: 1.1,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const openTopTransition = {
  duration: 1.0,
  delay: 1.1,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const openBottomTransition = {
  duration: 1.0,
  delay: 1.2,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const closedTransition = {
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
    {/* TOP SECTION */}
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTransition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTransition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">CONNECT WITH ME</h4>
          <div className="navigation-top__left--links">
            <a href="https://github.com/sc23bl" rel="noopener" target="_blank">👾 GH</a>
            <a href="https://www.linkedin.com/in/shashch99" rel="noopener" target="_blank">💼 LD</a>
            <a href="https://www.instagram.com/shanky_ch99" rel="noopener" target="_blank">📸 IN</a>
          </div>
        </div>
      </motion.div>
    </motion.div>

    {/* BOTTOM SECTION */}
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openBottomTransition }
          : { opacity: 0, transition: closedTransition }
      }
      className="navigation-bottom"
    >
      {/* Education & Skills */}
      <div
        className="resume-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", textAlign: "justify" }}
      >
        {/* EDUCATION */}
        <div>
          <h3><u>EDUCATION</u></h3>
          <div style={{ marginTop: "1rem" }}>
            <p>
              <strong>Master of Science in Mechanical Engineering</strong><br />
              Florida State University, Tallahassee, FL<br />
              GPA: 3.53/4.00<br />
              Aug 2023 – May 2025
            </p>
            <p>
              <strong>Bachelor of Technology in Mechanical Engineering</strong><br />
              Madan Mohan Malaviya University of Technology, India<br />
              GPA: 3.3/4.00<br />
              Jul 2017 – Aug 2021
            </p>
          </div>
        </div>

        {/* SKILLS */}
        <div>
          <h3><u>SKILLS</u></h3>
          <div style={{ marginTop: "1rem" }}>
            <p><strong>Design & Analysis:</strong> Adams CAR, AutoCAD, ANSYS, Catia V5/V6, Creo, Pro E, Siemens NX, SolidWorks.</p>
            <p><strong>PLM Tools:</strong> SmarTeam, Teamcenter, Windchill</p>
            <p><strong>Languages:</strong> Arduino, C/C++, Curve Fitting, MATLAB, Python, STM32</p>
            <p><strong>Manufacturing:</strong> ASME Y14.5, GD&T, Laser Cutting, 3D Printing, Sheet Metal, Injection Molding, Die Casting</p>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div style={{ marginTop: "2rem" }}>
        <h3><u>PROFESSIONAL EXPERIENCE</u></h3>
        {[
          {
            year: "Sept 2024 – Present",
            title: "Mechatronics Engineering Intern",
            company: "Danfoss Turbocor, Tallahassee, FL",
            bullets: [
              "Led change management for 3 chiller systems, improving sensor accuracy by 10% through p-h diagram validation.",
              "Commissioned systems and performed testing with accelerometers and calibration tools.",
              "Created 3D models and 2D drawings using Catia; conducted DFMEA on compressor models.",
              "Performed FEA on shaft kits using ANSYS and validated structural integrity."
            ]
          },
          {
            year: "Jan 2024 – Dec 2024",
            title: "Teaching & Research Assistant",
            company: "Florida State University, Tallahassee, FL",
            bullets: [
              "Taught labs and mentored 50+ students, improving average exam scores by 15%.",
              "Developed and tested a thermoelectric generator prototype.",
              "Analyzed industrial heat loss data for DOE reports."
            ]
          },
          {
            year: "Nov 2021 – May 2023",
            title: "Graduate Engineering Trainee",
            company: "Sona Comstar, Gurugram, India",
            bullets: [
              "Accelerated NPD process by 20% and ensured GD&T compliance.",
              "Enhanced EV/hybrid differential efficiency through powertrain analysis."
            ]
          }
        ].map((job, idx) => (
          <div key={idx} style={{ display: "grid", gridTemplateColumns: "160px 1fr", marginBottom: "1.5rem" }}>
            <div style={{ borderRight: "2px solid black", paddingRight: "10px", fontWeight: "bold" }}>
              {job.year}
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <p><strong>{job.title}</strong><br />{job.company}</p>
              <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                {job.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* PROJECTS & LEADERSHIP */}
      <div style={{ marginTop: "2rem", textAlign: "left" }}>
        <h3><u>PROJECTS & LEADERSHIP</u></h3>
        <p><strong>SUPRA SAE India – Formula SAE</strong> | Nov 2018 – Jul 2019<br />
        • Co-led 15-member team, ranked 30/128. Designed lightweight chassis and gear-by-wire system using SolidWorks.</p>

        <p><strong>BAJA SAE India</strong> | Jun 2018 – Mar 2019<br />
        • Led powertrain optimization (12% gain), ensured full SAE rule compliance, secured $4000 sponsorship.</p>

        <p><strong>Academic Projects:</strong><br />
        • Double Wishbone Suspension System (Creo, MSC Adams)<br />
        • Arduino-Based Surveillance Drone (MPU6050, Arduino IDE)<br />
        • Waste Plastic to Fuel via Pyrolysis<br />
        • Seeding Mechanism Design (4-person team)</p>
      </div>
    </motion.div>
  </motion.div>
);
