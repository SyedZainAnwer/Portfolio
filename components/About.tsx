"use client"

import SectionHeading from "./shared/Section-Heading";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";

const About = () => {

    const { ref } = useSectionInView('About');

    return(
        <motion.section 
            ref={ref}
            id="about"
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial= {{ opacity: 0, y: 100 }}
            animate= {{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <SectionHeading heading="About me"/>
            <p className="mb-3">
                I'm currently a {" "} <span className="font-medium">Computer Science and Artificial Intelligence</span> student at Technische Hochschule Ingolstadt. My programming journey began in college, and now I'm a <span className="font-medium">Full Stack developer</span> using <span className="font-medium">React.js/Next.js</span> for the front end and <span className="font-medium">Python/Django</span> for the back end. <span className="font-medium">MongoDB</span> is my go-to for databases, and I'm always  <span className="font-medium">eager to learn more</span> in the tech world. Right now, I'm focused on improving my skills in <span className="font-medium">Data Structures and Algorithms</span> for better problem-solving and logic building.
            </p>

            <p>
                When I'm not coding, you'll find me playing football and cricket with friends or enjoying some video game time. I love staying active through physical games. Explore my portfolio to see how my tech skills!
            </p>
        </motion.section>
    )
}

export default About;