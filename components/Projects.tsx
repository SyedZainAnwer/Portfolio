"use client"

import React from "react";
import ProjectCard from "./shared/ProjectCard";
import SectionHeading from "./shared/Section-Heading";
import { projectsData } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";

const Projects = () => {

    const { ref } = useSectionInView('Projects', 0.4);

    return(
        <section 
            ref={ref}
            id="projects" 
            className="scroll-mt-28 mb-28"
        >
            <SectionHeading heading="My Projects"/>

            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                <ProjectCard {...project}/>
                </React.Fragment>
            ))}
        </section>
    )
}

export default Projects;