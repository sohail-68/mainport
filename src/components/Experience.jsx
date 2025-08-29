import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const getRoleEmoji = (title) => {
  if (title.toLowerCase().includes("intern")) return "🧑‍💼";
  if (title.toLowerCase().includes("project")) return "🧪";
  return "🚀";
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundImage:
          "linear-gradient(to bottom right, #4a4a4a, #2d2d2d, #161616)", // gray gradient
        color: "#e2e8f0",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        padding: "20px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #1e293b",
      }}
      iconStyle={{
        display: "none", // Hide default circle icon
      }}
      icon={<></>}
    >
      <div>
        <h3 className="text-base sm:text-lg md:text-xl text-white font-bold flex items-center gap-2">
          <span>{getRoleEmoji(experience.title)}</span>
          {experience.title}
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm font-medium mt-1">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-4 list-disc ml-4 sm:ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-slate-300 text-xs sm:text-sm leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto relative z-0">
        {/* Heading */}
        <motion.div variants={textVariant()} className="text-center lg:text-left">
          <p className={`${styles.sectionSubText} text-cyan-400`}>
            📂 My Professional Journey
          </p>
          <h2 className={`${styles.sectionHeadText} text-white`}>
            💼 Work Experience & Projects
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="mt-12 sm:mt-16">
          <VerticalTimeline lineColor="#475569" animate={true}>
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
