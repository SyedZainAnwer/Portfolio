import React from "react";
import ProjectCard from "./shared/ProjectCard";
import SectionHeading from "./shared/Section-Heading";
import { projectsData } from "@/lib/data";

const Projects = () => {
    return(
        <section>
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