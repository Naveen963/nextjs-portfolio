import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto 
      flex flex-col items-center justify-between
      md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 text-center w-full md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md-left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Wipro"
            time="2022-Present"
            address="Hyderabad, India"
            companyLink="https://www.wipro.com/"
            work="Worked in a team responsible for developing web application for Electricity Transimission Equipment Data.Implemented robust features crucial to client requirements, ensuring a seamless
           and user-friendly experience. Proficiently managed GraphQL API using GraphiQL for efficient testing and
           development.
           "
          />
          <Details
            position="Hacker Earth Campus Lead (InternShip)"
            company="Hacker Earth"
            time="2020-2021"
            address="Andhra Pradesh, India"
            companyLink="https://www.hackerearth.com/"
            work=" I collaborated with peers to deliver seminars, organize coding contests, conduct hackathons, and facilitate project development.
             My role involved fostering student engagement through skill-building activities aimed at enhancing coding proficiency and project development expertise. I spearheaded initiatives to empower fellow students in honing their technical abilities and leveraging innovative technologies.
           "
          />
          <Details
            position="GDSC Web Dev Lead (InternShip)"
            company="Google Developer Student Clubs- Google"
            time="2020-2021"
            address="Andhra Pradesh, India"
            companyLink="https://gdsc.community.dev/"
            work=" s a GDSC Web Lead and Co-Lead, I collaborated with peers to conduct web development seminars and webinars, sharing knowledge and fostering skill development among students. I led project development initiatives and organized hackathons to promote innovation and practical learning in web technologies. My role involved empowering fellow students through upskilling activities aimed at enhancing their proficiency in web development. "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
